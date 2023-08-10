export async function getTodos(): Promise<Todo[]> {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);

  // Throwing an error triggers the error boundary
  // defined in error.ts.
  if (!res.ok) throw new Error('Failed to fetch todos.');
  return res.json();
}
