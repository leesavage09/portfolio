import { ThemeContext, Themes } from '@components/ThemeContext';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Themes>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
