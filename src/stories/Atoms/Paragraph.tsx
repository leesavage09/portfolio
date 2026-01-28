import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  children: ReactElement<any> | string;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
}) => {
  return (
    <span
      className={twMerge(
        'mb-6 dark:text-blue-100 text-dark-blue-800 text-base lg:text-lg',
        className
      )}
    >
      {children}
    </span>
  );
};
