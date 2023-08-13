'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { deleteDog, updateDog, type Dog } from '@/lib/dogs-api';
import './DogComponent.css';

type Props = { dog: Dog };

export default function DogComponent({ dog }: Props) {
  const router = useRouter();
  const [breed, setBreed] = useState(dog.breed);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(dog.name);

  async function handleDelete() {
    await deleteDog(dog.id);
    refresh();
  }

  function handleEdit() {
    setEditing(true);
  }

  async function handleSave() {
    await updateDog({ id: dog.id, breed, name });
    setEditing(false);
    refresh();
  }

  const refresh = () => router.refresh();

  function updateBreed(event: ChangeEvent<HTMLInputElement>) {
    setBreed(event.target.value);
  }

  function updateName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div className="dog-component flex gap-4">
      {editing ? (
        <span>
          <input
            className="mr-4"
            onChange={updateName}
            placeholder="name"
            value={name}
          />
          <input onChange={updateBreed} placeholder="breed" value={breed} />
        </span>
      ) : (
        <span>
          {dog.name} is a {dog.breed}.
        </span>
      )}
      {editing ? (
        <button onClick={handleSave}>💾</button>
      ) : (
        <button onClick={handleEdit}>✎</button>
      )}
      <button onClick={handleDelete}>🗑</button>
    </div>
  );
}
