'use client';

import React from 'react';
import { deleteDog, type Dog } from '@/lib/dogs-api';
import './DogComponent.css';

type Props = { dog: Dog };

export default function DogComponent({ dog }: Props) {
  function handleClick() {
    deleteDog(dog.id);
  }

  return (
    <div className="dog-component">
      <span>
        {dog.name} is a {dog.breed}.
      </span>
      <button onClick={handleClick}>🗑</button>
    </div>
  );
}
