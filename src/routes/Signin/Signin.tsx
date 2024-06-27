import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function SigninPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/mypage');
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!session && (
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
      )}
    </div>
  );
}
