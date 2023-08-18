'use client';

import { useState } from 'react';
const [providers, setProviders] = useState(null);

async function setProviders() {
  const response = await getProviders();
  setProviders(response);
}

useEffect(() => {
  setProviders();
});

...

{providers && Object.values(providers).map(provider => (
  <button
    key={provider.name}
    onClick={() => signIn(provider.id)}
    type="button"
  >
    Sign In
  </button>
)}