'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface DogData {
  breed: string;
  name: string;
  setBreed: (breed: string) => void;
  setName: (name: string) => void;
}

export const DogContext = createContext<DogData>({
  breed: '',
  name: '',
  setBreed: (string) => '',
  setName: (string) => '',
});

interface Props {
  children: ReactNode;
}

export const DogContextProvider = ({ children }: Props) => {
  const [breed, setBreed] = useState('Whippet');
  const [name, setName] = useState('Comet');

  return (
    <DogContext.Provider value={{ breed, name, setBreed, setName }}>
      {children}
    </DogContext.Provider>
  );
};

export const useDogContext = () => useContext(DogContext);
