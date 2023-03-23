import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session]);

  return (
    <div>
      <h1>Welcome to ChatGPT Email App</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
}
