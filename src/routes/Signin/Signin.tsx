import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export function SigninPage() {
  const { data: session } = useSession();

  console.log(`accessToken: ${session?.accessToken}`);
  console.log(`idToken: ${session?.idToken}`);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!session ? (
        <>
          <div className="flex gap-3 mb-8">
            <Image
              src="/CwM-logo-green-transparent.png"
              alt="login_icon"
              width={140}
              height={140}
              className="hidden md:inline-block"
            />
            <Image
              src="/CowokerMatch-green.png"
              alt="login_logo"
              width={400}
              height={140}
            />
          </div>
          <p className="font-bold mb-4">ログインまたは新規登録</p>
          <button onClick={() => signIn('google')}>
            <Image
              src="/web_light_sq_SU.svg"
              alt="Google Icon"
              width={250}
              height={56}
            />
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
