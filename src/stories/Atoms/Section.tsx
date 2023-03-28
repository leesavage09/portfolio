import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: JSX.Element | Array<JSX.Element>;
  pattern?: boolean;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  pattern,
  className,
}) => {
  const defaultStyle =
    'flex flex-col justify-center items-center py-32 px-9 w-full dark:text-blue-100 text-dark-blue-800 text-lg';

  const mergedStyle = twMerge(defaultStyle, className);

  const patternStyle = pattern
    ? ' dark:bg-dark-blue  bg-blue-300 bg-pattern bg-cover'
    : ' dark:bg-dark-blue-700  bg-blue-200  ';

  return (
    <section className={mergedStyle + patternStyle}>
      <div className="max-w-screen-lg flex flex-col justify-center items-center">
        {children}
      </div>
    </section>
  );
};
