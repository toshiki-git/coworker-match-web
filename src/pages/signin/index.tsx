import { SigninPage } from '@/routes/Signin';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>signin</title>
      </Head>
      <SigninPage />
    </div>
  );
}

export default Page;
