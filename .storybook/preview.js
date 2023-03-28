import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../src/stories/components/ThemeContext';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// All stories expect a theme arg
export const argTypes = {
  theme: { control: 'select', options: ['light', 'dark'] },
};

// The default value of the theme arg to all stories
export const args = { theme: 'light' };

export const decorators = [
  (Story, options) => {
    const [theme, setTheme] = useState(options.args.theme);

    useEffect(() => {
      setTheme(options.args.theme);
    }, [options.args.theme]);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`${theme} flex justify-center items-center h-screen ${
            theme === 'dark' ? 'bg-dark-blue' : 'bg-blue-100'
          }`}
        >
          <Story />
        </div>
      </ThemeContext.Provider>
    );
  },
];
