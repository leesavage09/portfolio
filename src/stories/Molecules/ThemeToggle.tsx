import { ThemeContext } from '@components/ThemeContext';
import { useContext } from 'react';
import Moon from '/public/vector/moon.svg';
import Sun from '/public/vector/sun.svg';

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const dark = theme === 'dark';

  const handleToggle = () => {
    setTheme(dark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className="bg-blue w-20 h-11 py-1 rounded-full flex items-center justify-center hover:bg-yellow duration-500"
      onClick={handleToggle}
    >
      <span
        className={`${dark ? '-translate-x-4' : 'translate-x-4'} duration-500`}
      >
        <Sun
          className={`${
            dark ? 'opacity-1' : 'opacity-0'
          } duration-1000 bg-dark-blue text-yellow rounded-full p-1 w-9 h-9`}
          width={'100%'}
          height={'100%'}
        />
        <Moon
          className={`${
            dark ? 'opacity-0' : 'opacity-1'
          } duration-1000 bg-dark-blue text-primary rounded-full p-1 w-9 h-9 -mt-9`}
          width={'100%'}
          height={'100%'}
        />
      </span>
    </button>
  );
};
