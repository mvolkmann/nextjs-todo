'use client';

import { useRouter } from 'next/navigation';

export default function BlogButton() {
  const router = useRouter();

  function goToBlog() {
    router.push('https://mvolkmann.github.io/blog/');
  }

  return (
    <button className="button my-4" onClick={goToBlog}>
      My Blog
    </button>
  );
}
