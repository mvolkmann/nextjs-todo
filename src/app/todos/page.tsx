import { getTodos } from '@/lib/apis';
import Other from './Other';
import TodoItem from './TodoItem';

export default async function TodosPage() {
  const todos: Todo[] = await getTodos();

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