import { useState, useEffect } from 'react';
import { ApiError } from '@/components/ApiError';

interface LoadingProps {
  loadingMessage?: string;
}

export function Loading({
  loadingMessage = 'ローディング中です...',
}: LoadingProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(true);
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
          <p className="mt-4 text-lg">{loadingMessage}</p>
        </div>
      </div>
    );
  }
}
