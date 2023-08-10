'use client' // Error components must be client components.

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section>
      <h2>Something went wrong!</h2>
      {/* Attempt to recover by trying to re-render. */}
      < button onClick={() => reset()}>
        Try again
      </button>
    </section >
  );
}
