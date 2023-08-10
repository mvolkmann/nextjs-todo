'use client'; // needed to specify event handling

import Link from 'next/link';

import { Borel } from 'next/font/google';
const font = Borel({
  // This allows a fallback font to be used until the
  // requested font has been loaded and can be swapped in.
  display: 'swap',
  subsets: ['latin'],
  // "Variable fonts" do not need to specify weights.
  weight: '400' // can be an array of weight strings
});

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
      {/* font.className is an auto-generated CSS class name. */}
      <div className={`flex gap-2 items-center ${font.className}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onChange}
        />
        <span className={getClassName(todo)} style={getStyle(todo)}>
          {todo.title}
        </span>
        <button>🗑</button>
        <Link className="button" href={`/todo/${todo.id}`}>Jump</Link>
      </div>
    </li>
  )
}
