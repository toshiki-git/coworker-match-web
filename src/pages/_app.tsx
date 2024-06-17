import '@/styles/globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={notoSansJP.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
