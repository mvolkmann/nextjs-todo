'use client';

import { useDogContext } from '@/app/context/dog-context';
import BlogButton from '@/components/BlogButton';
import Dog from '@/components/Dog';
import { getTodos } from '@/lib/apis';
import TodoItem from './TodoItem';
import type { Todo } from '@/types.d';

export default async function TodosPage() {
  const { setBreed, setName } = useDogContext();

  const todos: Todo[] = await getTodos();

  function handleClick() {
    setBreed('Beagle');
    setName('Snoopy');
  }

  // console.log('page.tsx: DB_HOST =', process.env.DB_HOST);
  // console.log('page.tsx: DOG =', process.env.NEXT_PUBLIC_DOG);

  return (
    <section>
      <div className="border border-black my-4 p-2">
        <Dog />
        <button className="button" onClick={handleClick}>
          Change Dog
        </button>
      </div>
      <BlogButton />
      <ul className="list-none">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
