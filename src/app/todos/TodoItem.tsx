'use client'; // needed to specify event handling

import Link from 'next/link';

function getClassName(todo: Todo): string {
  return todo.completed ? 'line-through' : '';
}

function getStyle(todo: Todo): object {
  return todo.completed ? { color: 'gray' } : {};
}

type Props = {
  key: number,
  todo: Todo
}

export default function TodoItem(props: Props) {
  const todo: Todo = props.todo;
  console.log('todo.tsx: todo =', todo);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('todo.tsx onChange: entered');
  }

  return (
    <li key={props.key}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onChange}
      />
      <span className={getClassName(todo)} style={getStyle(todo)}>
        {todo.title}
      </span>
      <button className="bg-white rounded space-x-4">Delete</button>
      <Link href={`/todo/${todo.id}`}>Jump</Link>
    </li>
  )
}
