// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
  session: any;
}

export const metadata: Metadata = {
  title: 'Youtube Project 1',
  description: 'Hitesh Choudhary, Nextjs Full stack course',
};

export default function RootLayout({
  children,
  session,
  ...pageProps
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout session={session}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
