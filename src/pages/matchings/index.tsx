import { MatchingsPage } from '@/routes/Matchings';
import Head from 'next/head';

function Page() {
  return (
    <div>
      <Head>
        <title>Matching</title>
      </Head>
      <MatchingsPage />
    </div>
  );
}

export default Page;
