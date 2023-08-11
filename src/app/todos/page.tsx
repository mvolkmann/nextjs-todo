'use client';

import { getTodos } from '@/lib/apis';
import BlogButton from '@/components/BlogButton';
import Other from '@/components/Other';
import TodoItem from './TodoItem';

export default async function TodosPage() {
  const todos: Todo[] = await getTodos();

  return (
    <section>
      <Other />
      <BlogButton />
      <ul className="list-none">
        {todos.map((todo: Todo) =>
          <TodoItem todo={todo} />
        )}
      </ul>
    </section >
  )
}
