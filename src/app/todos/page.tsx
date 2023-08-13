import { useDogContext } from '@/app/context/dog-context';
import BlogButton from '@/components/BlogButton';
import Dog from '@/components/Dog';
import { getTodos } from '@/lib/todos-api';
import TodoItem from './TodoItem';
import type { Todo } from '@/types.d';

export default async function TodosPage() {
  const todos: Todo[] = await getTodos();

  return (
    <section>
      <BlogButton />
      <ul className="list-none">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
