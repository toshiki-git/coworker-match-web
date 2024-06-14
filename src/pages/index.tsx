import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!session ? (
        <>
          <p className="mb-4 text-lg">Not signed in</p>
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <p className="mb-4 text-lg">Signed in as {session.user?.email}</p>
          <ul className="mb-4">
            <li>
              <strong>Name:</strong> {session.user?.name}
            </li>
            <li>
              <strong>Email:</strong> {session.user?.email}
            </li>
            <li>
              <strong>Profile Image:</strong>
              <Image
                src={session.user?.image || ''}
                alt="Profile Image"
                width={64}
                height={64}
                className="rounded-full"
              />
            </li>
          </ul>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
