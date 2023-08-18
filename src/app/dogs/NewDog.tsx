'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { createDog, type NewDog } from '@lib/dogs-api';

export default function NewDog() {
  const router = useRouter();
  const [breed, setBreed] = useState('');
  const [name, setName] = useState('');

  async function handleAdd() {
    await createDog({ breed, name });
    refresh();
  }

  const refresh = () => router.refresh();

  function updateBreed(event: ChangeEvent<HTMLInputElement>) {
    setBreed(event.target.value);
  }

  function updateName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  // Placing the inputs and button in a form allows
  // users to press the return key to trigger the button.
  return (
    <form className="flex gap-4">
      <input
        onChange={updateName}
        placeholder="name"
        type="text"
        value={name}
      />
      <input
        onChange={updateBreed}
        placeholder="breed"
        type="text"
        value={breed}
      />
      <button className="button" disabled={!breed || !name} onClick={handleAdd}>
        Add
      </button>
    </form>
  );
}
