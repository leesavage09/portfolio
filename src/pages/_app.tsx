import { ThemeContext, Themes } from '@components/ThemeContext';
import { Menu } from '@stories/Organisms/Menu';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Themes>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={theme}>
        <Menu />
        <Component {...pageProps} />
      </main>
    </ThemeContext.Provider>
  );
}
