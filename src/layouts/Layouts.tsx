import { ReactNode } from 'react';
import { Header } from '@/layouts/componets/Header';
import { Footer } from '@/layouts/componets/Footer';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
