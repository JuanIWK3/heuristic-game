import { Toaster } from '@/components/ui/toaster';
import { GameContextProvider } from '@/context/game-provider';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Heuristic Finder',
  description: 'A game to help you learn about usability heuristics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GameContextProvider>
            {children}
            <Toaster />
          </GameContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
