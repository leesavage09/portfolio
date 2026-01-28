import { Menu } from '@stories/Organisms/Menu';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useAppState } from './AppContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Lee Savage',
    template: '%s | Lee Savage',
  },
  description: 'Lee Savage portfolio Next.js app',
  icons: {
    icon: '/favicon.ico',
  },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const appState = useAppState();

  console.log(appState.theme + ' ' + inter.className);
  return (
    <main className={appState.theme + ' ' + inter.className}>
      <Menu />
      {children}
    </main>
  );
};
