import React, { ReactElement } from 'react';

interface ParagraphProps {
  children: ReactElement | string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="mb-10 dark:text-blue-100 text-dark-blue-800 text-base lg:text-lg">
      {children}
    </p>
  );
};
