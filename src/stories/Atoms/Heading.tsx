import type { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
  type: 'h1' | 'h2' | 'h3';
  className?: string;
}

const baseClassName =
  'text-dark-blue dark:text-blue-100 w-full text-center font-extrabold uppercase';

const baseAfterEffect =
  'after:bg-primary after:w-8 after:h-1 after:inline-block after:rounded-full after:absolute after:-translate-x-2/4 after:left-2/4 after:top-[calc(100%_+_0.875rem)]';

export const Heading: React.FC<Heading1Props> = ({
  children,
  type,
  className = '',
}) => {
  switch (type) {
    case 'h1':
      return (
        <h1
          className={twMerge(
            baseClassName,
            'text-4xl lg:text-6xl pb-4 ',
            className
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={twMerge(
            baseClassName,
            'text-2xl lg:text-4xl mb-11 relative ',
            baseAfterEffect,
            className
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={twMerge(
            baseClassName,
            'text-xl lg:text-3xl capitalize mb-6',
            className
          )}
        >
          {children}
        </h3>
      );
  }
};
