import { useState } from 'react';

export default function Home() {
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
    <div>
      <h1>Mock Service Worker Test</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data</p>}
    </div>
  );
}
