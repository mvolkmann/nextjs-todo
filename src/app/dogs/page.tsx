import { retrieveDogs, type Dog } from '@lib/dogs-api';
import DogRow from './DogRow';
import NewDog from './NewDog';

// This is one way to preventing caching API results used by this page.
// A value of `false` is the default which does use cached responses.
// A value of zero causes "dynamic rendering"
// which does not use cached responses.
// This is especially useful during development
// to avoid confusion caused by seeing cached results.
export const revalidate = 0;

export default async function DogsPage() {
  const dogs = await retrieveDogs();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-red-400">Dogs</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"
        />
      </svg>

      <NewDog />
      <ul className="list-none">
        {dogs.map((dog: Dog) => (
          <DogRow key={dog.id} dog={dog} />
        ))}
      </ul>
    </section>
  );
}
