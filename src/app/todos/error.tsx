'use client'; // Error components must be client components.

import { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <h2>{error.message}</h2>
      {/* Attempt to recover by trying to re-render. */}
      <button onClick={() => reset()}>Try again</button>
    </section>
  );
}
