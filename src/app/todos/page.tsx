'use client';

import { getTodos } from '@/lib/apis';
import BlogButton from '@/components/BlogButton';
import Other from '@/components/Other';
import TodoItem from './TodoItem';

export default async function TodosPage() {
  const todos: Todo[] = await getTodos();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('page.tsx onChange: entered');
  }

  return (
    <section>
      <Other />
      <BlogButton />
      <ul className="list-none">
        {todos.map((todo: Todo) =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
    </section >
  )
}
