import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../src/components/ThemeContext';
import '../src/styles/globals.css';

export const parameters = {
  backgrounds: {
    disable: false,
    values: [
      { name: 'light', value: '#F7FBFD' },
      { name: 'dark', value: '#151C37' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const updateGlobals = (theme) =>
  addons.getChannel().emit(UPDATE_GLOBALS, {
    globals: {
      theme: theme,
      backgrounds:
        theme === 'dark'
          ? { name: 'dark', value: '#151C37' }
          : { name: 'light', value: '#F7FBFD' },
    },
  });

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

    useEffect(() => {
      updateGlobals(theme);
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <Story />
        </div>
      </ThemeContext.Provider>
    );
  },
];
