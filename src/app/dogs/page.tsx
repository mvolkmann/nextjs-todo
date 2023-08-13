import { getDogs, type Dog } from '@/lib/dogs-api';
import DogComponent from './DogComponent';

// This shows one way to preventing caching API results used by this page.
export const revalidate = 0; // number, not boolean

export default async function DogsPage() {
  const dogs: Dog[] = await getDogs();

  return (
    <section>
      <h2>Dogs</h2>
      <ul className="list-none">
        {dogs.map((dog: Dog) => (
          <DogComponent key={dog.id} dog={dog} />
        ))}
      </ul>
    </section>
  );
}
