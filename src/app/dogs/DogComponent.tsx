'use client';

import React, { ChangeEvent, useState } from 'react';
import { deleteDog, updateDog, type Dog } from '@/lib/dogs-api';
import './DogComponent.css';

type Props = { dog: Dog };

export default function DogComponent({ dog }: Props) {
  const [breed, setBreed] = useState(dog.breed);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(dog.name);

  async function handleDelete() {
    await deleteDog(dog.id);
    // TODO: How can you trigger page to update so deleted dog disappears?
  }

  function handleEdit() {
    setEditing(true);
  }

  async function handleSave() {
    await updateDog({ id: dog.id, breed, name });
    setEditing(false);
  }

  function updateBreed(event: ChangeEvent<HTMLInputElement>) {
    setBreed(event.target.value);
  }

  function updateName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div className="dog-component">
      {editing ? (
        <span>
          <input onChange={updateName} placeholder="name" value={name} />
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
