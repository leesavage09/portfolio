import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: JSX.Element | Array<JSX.Element>;
  pattern?: boolean;
  className?: string;
  invertTheme?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  pattern,
  className,
}) => {
  const defaultStyle =
    'dark:bg-dark-blue dark:text-blue-100 bg-blue text-dark-blue-800 flex flex-col justify-center items-center py-32 px-9 w-full';

  const mergedStyle = twMerge(defaultStyle, className);

  const patternStyle = pattern ? ' bg-pattern bg-cover' : '';

  return <section className={mergedStyle + patternStyle}>{children}</section>;
};
