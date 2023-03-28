import { createContext } from 'react';

export type Themes = 'light' | 'dark';

export type ThemeContext = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);
