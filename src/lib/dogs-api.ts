const BASE_URL = 'http://localhost:3000/api/dogs';

export interface NewDog {
  name: string;
  breed: string;
}

export interface Dog extends NewDog {
  id: number;
}

export async function createDog(dog: Dog): Promise<Dog> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog),
  });

  if (!res.ok) throw new Error('Failed to create dog.');
  return res.json();
}

export async function deleteDog(id: number): Promise<boolean> {
  console.log('dogs-api.ts deleteDog: id =', id);
  const res = await fetch(BASE_URL + '/' + id, { method: 'DELETE' });
  console.log('dogs-api.ts deleteDog: res.status =', res.status);
  // if (!res.ok) throw new Error('Failed to delete dog.');
  // return res.ok;
  return true;
}

export async function getDog(id: number): Promise<Dog> {
  const res = await fetch(BASE_URL + '/' + id);
  if (!res.ok) throw new Error('Failed to fetch dogs.');
  return res.json();
}

export async function getDogs(): Promise<Dog[]> {
  // This shows one way to preventing caching of this response.
  // const res = await fetch(BASE_URL, { cache: 'no-store' });
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch dogs.');
  return res.json();
}

export async function updateDog(dog: Dog): Promise<Dog> {
  const res = await fetch(BASE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog),
  });
  if (!res.ok) throw new Error('Failed to update dog.');
  return res.json();
}
