import { type Dog, type NewDog } from '@/lib/dogs-api';

let lastId = 0;
export let dogs: Dog[] = [];
createDog({ name: 'Comet', breed: 'whippet' });
createDog({ name: 'Maisey', breed: 'Treeing Walker Coonhound' });
createDog({ name: 'Oscar', breed: 'German Shorthaired Pointer' });
createDog({ name: 'Ramsay', breed: 'Native American Indian Dog' });
sort();

export function createDog(newDog: NewDog) {
  lastId++;
  const dog = { id: lastId, ...newDog };
  dogs.push(dog);
  sort();
}

export function deleteDog(id: number): Dog | undefined {
  const dog = dogs.find(d => d.id === id);
  if (dog) dogs = dogs.filter(d => d.id !== id);
  return dog;
}

export const getDogs = () => dogs;

export function getDog(id: number): Dog | undefined {
  return dogs.find(d => d.id === id);
}

function sort() {
  dogs.sort((d1, d2) => d1.name.localeCompare(d2.name));
}

export function updateDog(dog: Dog): Dog | undefined {
  const { id } = dog;
  const existingDog = dogs.find(d => d.id === id);
  if (existingDog) {
    existingDog.breed = dog.breed;
    existingDog.name = dog.name;
  }
  sort();
  return existingDog;
}
