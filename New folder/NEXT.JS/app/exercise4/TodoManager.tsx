"use client";

import { useState } from "react";
import { useActionState } from "react";
import {
  createTodoAction,
  deleteSelectedTodosAction,
  searchTodosAction,
  setAllTodosStatusAction,
  setSelectedTodosStatusAction,
  type TodoActionState,
} from "./actions";

export type TodoListItem = {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
  createdRelative: string;
  updatedRelative: string;
};

const emptyState: TodoActionState = null;

function ActionMessage({ state }: { state: TodoActionState }) {
  if (!state) return null;

  return (
    <p role={state.error ? "alert" : "status"} aria-live="polite">
      {state.message}
    </p>
  );
}

export default function TodoManager({
  todos,
  query,
  status,
}: {
  todos: TodoListItem[];
  query: string;
  status: string;
}) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [createState, createAction, isCreating] = useActionState(
    createTodoAction,
    emptyState
  );
  const [deleteState, deleteAction, isDeleting] = useActionState(
    deleteSelectedTodosAction,
    emptyState
  );
  const [completeState, completeAction, isUpdatingComplete] = useActionState(
    setSelectedTodosStatusAction,
    emptyState
  );
  const [incompleteState, incompleteAction, isUpdatingIncomplete] = useActionState(
    setSelectedTodosStatusAction,
    emptyState
  );

  function toggleSelected(id: string) {
    setSelectedIds((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id]
    );
  }

  function renderSelectedIds() {
    return selectedIds.map((id) => (
      <input key={id} type="hidden" name="ids" value={id} />
    ));
  }

  return (
    <>
      <section>
        <h2>Add a task</h2>
        <form action={createAction}>
          <label htmlFor="todo-title">Task</label>{" "}
          <input
            id="todo-title"
            name="title"
            type="text"
            maxLength={200}
            required
          />{" "}
          <label htmlFor="todo-priority">Priority</label>{" "}
          <select id="todo-priority" name="priority" defaultValue="medium">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>{" "}
          <button type="submit" disabled={isCreating}>
            {isCreating ? "Adding..." : "Add task"}
          </button>
        </form>
        <ActionMessage state={createState} />
      </section>

      <section>
        <h2>Search and filter</h2>
        <form action={searchTodosAction}>
          <label htmlFor="todo-search">Search tasks</label>{" "}
          <input
            id="todo-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search by title"
          />{" "}
          <label htmlFor="todo-status">Status</label>{" "}
          <select id="todo-status" name="status" defaultValue={status}>
            <option value="all">All</option>
            <option value="active">Incomplete</option>
            <option value="completed">Complete</option>
          </select>{" "}
          <button type="submit">Search</button>
          <a href="/exercise4" style={{ marginLeft: "0.75rem" }}>
            Clear
          </a>
        </form>
      </section>

      <section>
        <h2>Tasks</h2>
        <p>{todos.length} task(s) shown. Sorted by priority: high, medium, low.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <form action={deleteAction}>
            {renderSelectedIds()}
            <button type="submit" disabled={isDeleting || selectedIds.length === 0}>
              {isDeleting ? "Deleting..." : `Delete selected (${selectedIds.length})`}
            </button>
          </form>
          <form action={completeAction}>
            {renderSelectedIds()}
            <input type="hidden" name="completed" value="true" />
            <button
              type="submit"
              disabled={isUpdatingComplete || selectedIds.length === 0}
            >
              Mark selected complete
            </button>
          </form>
          <form action={incompleteAction}>
            {renderSelectedIds()}
            <input type="hidden" name="completed" value="false" />
            <button
              type="submit"
              disabled={isUpdatingIncomplete || selectedIds.length === 0}
            >
              Mark selected incomplete
            </button>
          </form>
          <form action={setAllTodosStatusAction}>
            <input type="hidden" name="completed" value="true" />
            <button type="submit">Mark all complete</button>
          </form>
          <form action={setAllTodosStatusAction}>
            <input type="hidden" name="completed" value="false" />
            <button type="submit">Mark all incomplete</button>
          </form>
        </div>
        <ActionMessage state={deleteState} />
        <ActionMessage state={completeState} />
        <ActionMessage state={incompleteState} />

        {todos.length === 0 ? (
          <p>No tasks found. Add one or adjust your search.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: "none" }}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  border: "1px solid #999",
                  borderRadius: "0.5rem",
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(todo.id)}
                    onChange={() => toggleSelected(todo.id)}
                    aria-label={`Select ${todo.title}`}
                  />{" "}
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </span>
                </label>
                <p>
                  Priority: <strong>{todo.priority}</strong> ·{" "}
                  {todo.completed ? "Complete" : "Incomplete"}
                </p>
                <small>
                  Created {todo.createdRelative} ({todo.createdAt})
                  <br />
                  Updated {todo.updatedRelative} ({todo.updatedAt})
                </small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
