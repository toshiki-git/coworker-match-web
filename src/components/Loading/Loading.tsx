import { useState, useEffect } from 'react';

interface LoadingProps {
  loadingMessage: string;
}

export function Loading({ loadingMessage }: LoadingProps) {
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="mt-4 text-lg text-red-500">
            エラーが発生しました。再試行してください。
          </p>
        </div>
      </div>
    );
  }

  return null;
}
