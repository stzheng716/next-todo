import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {

  const todos = await prisma.todo.findMany()
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1"><Link href="/">Todos</Link></h1>
        <Link
          className="border border-slate-300 px-2 py-1 rounded hover:bg-slate-700 
          focus-within:bg-slate-700  outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(todo => )}
      </ul>
    </>
  );
}
