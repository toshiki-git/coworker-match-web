import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/layouts';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/resource');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout>
      <h1>{session?.userId}</h1>
      <h1>Mock Service Worker Test</h1>
      <Button onClick={fetchData}>Fetch Data</Button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data</p>}
    </Layout>
  );
}
