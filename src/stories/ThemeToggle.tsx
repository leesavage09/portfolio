import { useState } from 'react';
import Moon from '../assets/icons/moon.svg';
import Sun from '../assets/icons/sun.svg';

interface ThemeToggleProps {
  onClick: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick }) => {
  const [dark, setDark] = useState(true);

  const handleToggle = () => {
    setDark((boolean) => !boolean);
    onClick();
  };

  return (
    <button
      type="button"
      className="bg-blue w-20 py-1 rounded-full flex items-center justify-center"
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
