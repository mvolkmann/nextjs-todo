import Other from './Other';
import TodoItem from './TodoItem';
import { type Todo } from './types';

async function getTodos(): Promise<Todo[]> {
  const url = 'https://jsonplaceholder.typicode.com/todosx';
  const res = await fetch(url);

  // Throwing an error triggers the error boundary
  // defined in error.ts.
  if (!res.ok) throw new Error('Failed to fetch todos.');
  return res.json();
}

export default async function TodoPage() {
  const todos: Todo[] = await getTodos();
  console.log('page.tsx x: todos =', todos);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('page.tsx onChange: entered');
  }

  return (
    <section>
      <h1>Todos</h1>
      <Other />
      <ul className="list-none">
        {todos.map((todo: Todo) =>
          <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
    </section >
  )
}
