import { ProfilePage } from '@/routes/User/Profile';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>profile</title>
      </Head>
      <ProfilePage />
    </div>
  );
}

export default Page;
