'use client';

import React from 'react';
import { deleteDog, type Dog } from '@/lib/dogs-api';

type Props = { dog: Dog };

export default function DogComponent({ dog }: Props) {
  function handleClick() {
    deleteDog(dog.id);
  }

  return (
    <div>
      {dog.name} is a {dog.breed}.<button onClick={handleClick}>🗑</button>
    </div>
  );
}
