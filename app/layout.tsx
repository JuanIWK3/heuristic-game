import { Toaster } from '@/components/ui/toaster';
import { GameContextProvider } from '@/context/game-provider';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Heuristic Finder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GameContextProvider>
          {children}
          <Toaster />
        </GameContextProvider>
      </body>
    </html>
  );
}
