import { getDogs, type Dog } from '@/lib/dogs-api';
import DogComponent from './DogComponent';

// This shows one way to preventing caching API results used by this page.
// A value of zero causes "dynamic rendering"
// which does not use cached responses.
// A value of false is the default which does use cached responses.
export const revalidate = 0;

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
