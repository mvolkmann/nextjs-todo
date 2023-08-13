import { getDogs, type Dog } from '@/lib/dogs-api';
import DogComponent from './DogComponent';

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
