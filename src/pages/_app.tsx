import { AppProvider } from '@components/AppContext';
import { Layout } from '@components/Layout';
import '@styles/globals.css';
import type { Viewport } from 'next';
import type { AppProps } from 'next/app';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
