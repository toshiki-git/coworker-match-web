import '@/styles/globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    enableMocking();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <div className={notoSansJP.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
