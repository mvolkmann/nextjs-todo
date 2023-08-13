const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getTodos(): Promise<Todo[]> {
  console.log('sleeping');
  // Simulate a long-running request.
  await sleep(500);
  console.log('awake');

  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);

  // Throwing an error triggers the error boundary
  // defined in error.ts.
  if (!res.ok) throw new Error('Failed to fetch todos.');
  return res.json();
}
