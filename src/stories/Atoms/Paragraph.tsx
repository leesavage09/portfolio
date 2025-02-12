import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  children: ReactElement | string;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
}) => {
  return (
    <p
      className={twMerge(
        'mb-10 dark:text-blue-100 text-dark-blue-800 text-base lg:text-lg',
        className
      )}
    >
      {children}
    </p>
  );
};
