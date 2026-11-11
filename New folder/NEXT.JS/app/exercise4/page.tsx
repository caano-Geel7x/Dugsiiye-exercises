import { getTodosCollection, type TodoPriority } from "../../lib/mongodb";
import TodoManager, { type TodoListItem } from "./TodoManager";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{
  q?: string;
  status?: string;
}>;

function formatRelativeTime(date: Date, now: number): string {
  const elapsedSeconds = Math.round((date.getTime() - now) / 1000);
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const [unit, secondsPerUnit] of units) {
    if (Math.abs(elapsedSeconds) >= secondsPerUnit) {
      return formatter.format(
        Math.round(elapsedSeconds / secondsPerUnit),
        unit
      );
    }
  }

  return formatter.format(elapsedSeconds, "second");
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default async function Exercise4Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q = "", status = "all" } = await searchParams;
  const normalizedStatus =
    status === "active" || status === "completed" ? status : "all";
  const filter: Record<string, unknown> = {};

  if (q.trim()) {
    filter.title = { $regex: escapeRegex(q.trim()), $options: "i" };
  }
  if (normalizedStatus === "active") filter.completed = false;
  if (normalizedStatus === "completed") filter.completed = true;

  const todosCollection = await getTodosCollection();
  const documents = await todosCollection
    .aggregate<{
      _id: import("mongodb").ObjectId;
      title: string;
      completed: boolean;
      priority: TodoPriority;
      createdAt: Date;
      updatedAt: Date;
    }>([
      { $match: filter },
      {
        $addFields: {
          prioritySort: {
            $switch: {
              branches: [
                { case: { $eq: ["$priority", "high"] }, then: 3 },
                { case: { $eq: ["$priority", "medium"] }, then: 2 },
                { case: { $eq: ["$priority", "low"] }, then: 1 },
              ],
              default: 0,
            },
          },
        },
      },
      { $sort: { prioritySort: -1, createdAt: -1 } },
    ])
    .toArray();
  const now = Date.now();

  const todos: TodoListItem[] = documents.map((todo) => ({
    id: todo._id.toHexString(),
    title: todo.title,
    completed: todo.completed,
    priority: todo.priority,
    createdAt: todo.createdAt.toLocaleString(),
    updatedAt: todo.updatedAt.toLocaleString(),
    createdRelative: formatRelativeTime(todo.createdAt, now),
    updatedRelative: formatRelativeTime(todo.updatedAt, now),
  }));

  return (
    <main
      style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <p>
        <a href="/">All exercises</a> | <a href="/exercise3">Exercise 3</a>
      </p>
      <h1>Exercise 4: MongoDB Todo Manager</h1>
      <p>
        Add, search, prioritize, filter, and update tasks. Search uses a MongoDB
        regular expression; list order is high, medium, then low priority.
      </p>
      <TodoManager todos={todos} query={q} status={normalizedStatus} />
    </main>
  );
}
