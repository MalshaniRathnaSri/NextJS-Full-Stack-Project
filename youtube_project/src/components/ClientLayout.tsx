'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ClientLayoutProps {
  children: ReactNode;
  session: any;
}

export default function ClientLayout({ children, session }: ClientLayoutProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      {children}
      <Footer />
    </SessionProvider>
  );
}
