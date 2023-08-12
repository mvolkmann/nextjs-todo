export type Dog = {
  name: string;
  breed: string;
};

export let dogs: Dog[] = [
  { name: 'Comet', breed: 'whippet' },
  { name: 'Maisey', breed: 'Treeing Walker Coonhound' },
  { name: 'Oscar', breed: 'German Shorthaired Pointer' },
  { name: 'Ramsay', breed: 'Native American Indian Dog' },
];

export function addDog(dog: Dog) {
  dogs.push(dog);
}

export function deleteDog(name: string): Dog | undefined {
  const dog = dogs.find((d) => d.name === name);
  if (dog) dogs = dogs.filter((d) => d.name !== name);
  return dog;
}

export const getDogs = () => dogs;

export function getDog(name: string): Dog | undefined {
  return dogs.find((d) => d.name === name);
}

export function updateDog(dog: Dog): Dog | undefined {
  const { breed, name } = dog;
  const existingDog = dogs.find((d) => d.name === name);
  if (existingDog) existingDog.breed = breed;
  return existingDog;
}
