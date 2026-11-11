"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getTodosCollection, type TodoPriority } from "../../lib/mongodb";

export type TodoActionState = {
  message: string;
  error?: boolean;
} | null;

const priorities: TodoPriority[] = ["low", "medium", "high"];

function readTodoIds(formData: FormData): ObjectId[] {
  return formData
    .getAll("ids")
    .map(String)
    .filter((id) => ObjectId.isValid(id))
    .map((id) => new ObjectId(id));
}

export async function createTodoAction(
  _previousState: TodoActionState,
  formData: FormData
): Promise<TodoActionState> {
  const title = String(formData.get("title") ?? "").trim();
  const priority = String(formData.get("priority") ?? "");

  if (!title) {
    return { message: "Enter a task title.", error: true };
  }
  if (title.length > 200) {
    return { message: "Task titles must be 200 characters or fewer.", error: true };
  }

  if (!priorities.includes(priority as TodoPriority)) {
    return { message: "Choose a valid priority.", error: true };
  }

  const now = new Date();
  const todos = await getTodosCollection();
  await todos.insertOne({
    title,
    priority: priority as TodoPriority,
    completed: false,
    createdAt: now,
    updatedAt: now,
  });

  revalidatePath("/exercise4");
  return { message: "Task added." };
}

export async function searchTodosAction(formData: FormData): Promise<void> {
  const query = String(formData.get("q") ?? "").trim();
  const status = String(formData.get("status") ?? "all");
  const search = new URLSearchParams();

  if (query) search.set("q", query);
  if (status === "active" || status === "completed") {
    search.set("status", status);
  }

  const queryString = search.toString();
  redirect(queryString ? `/exercise4?${queryString}` : "/exercise4");
}

export async function deleteSelectedTodosAction(
  _previousState: TodoActionState,
  formData: FormData
): Promise<TodoActionState> {
  const ids = readTodoIds(formData);

  if (ids.length === 0) {
    return { message: "Select at least one task.", error: true };
  }

  const todos = await getTodosCollection();
  const result = await todos.deleteMany({ _id: { $in: ids } });

  revalidatePath("/exercise4");
  return { message: `Deleted ${result.deletedCount} task(s).` };
}

export async function setSelectedTodosStatusAction(
  _previousState: TodoActionState,
  formData: FormData
): Promise<TodoActionState> {
  const ids = readTodoIds(formData);
  const completed = formData.get("completed") === "true";

  if (ids.length === 0) {
    return { message: "Select at least one task.", error: true };
  }

  const todos = await getTodosCollection();
  const result = await todos.updateMany(
    { _id: { $in: ids } },
    { $set: { completed, updatedAt: new Date() } }
  );

  revalidatePath("/exercise4");
  return { message: `Updated ${result.modifiedCount} task(s).` };
}

export async function setAllTodosStatusAction(formData: FormData): Promise<void> {
  const completed = formData.get("completed") === "true";
  const todos = await getTodosCollection();

  await todos.updateMany(
    { completed: { $ne: completed } },
    { $set: { completed, updatedAt: new Date() } }
  );

  revalidatePath("/exercise4");
}
