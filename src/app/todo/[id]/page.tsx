// This is a dynamic route.

import { useContext } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getTodos } from '@lib/todos-api';
import type { Todo } from '@types.d';

type Props = {
  params: {
    id: number;
  };
};

export default async function TodoPage({ params: { id } }: Props) {
  // params properties are always strings.
  const number = Number(id);

  const todos: Todo[] = await getTodos();
  const todo = todos.find(t => t.id === number);
  if (!todo) return notFound();

  return (
    <section>
      <h1>Todo</h1>
      <p>Id: {todo.id}</p>
      <p>Title: {todo?.title ?? 'missing title'}</p>
      <p>Completed: {String(todo.completed)}</p>
      <Link href="/todos">
        <div className="button mt-2">Back</div>
      </Link>
    </section>
  );
}
