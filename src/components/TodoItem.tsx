"use client";

import { redirect } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {

  async function handleDelete(id: string) {
    deleteTodo(id)

    redirect("/new")
  }

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through
      peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button
        className="border border-slate-300 px-1 rounded hover:bg-red-700 
          focus-within:bg-slate-700 outline-none"
        onClick={() => handleDelete(id)}
      >
        remove
      </button>
    </li>
  );
}
