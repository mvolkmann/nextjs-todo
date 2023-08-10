// This is a dynamic route.

import Link from 'next/link';
import { getTodos } from '@/lib/apis';

type Params = {
  params: {
    id: number
  }
}

export default async function TodoPage({ params: { id } }: Params) {
  const todos: Todo[] = await getTodos();
  console.log('page.tsx TodoPage: todos =', todos);

  const number = Number(id);
  const todo = todos.find(t => t.id === number);
  console.log('page.tsx TodoPage: todo =', todo);

  return (
    <section>
      <h1>Todo</h1>
      <p>Id: {todo.id}</p>
      <p>Title: {todo?.title ?? "missing title"}</p>
      <p>Completed: {String(todo.completed)}</p>
      <Link className="button mt-2" href="/todos">Back</Link>
    </section >
  )
}
