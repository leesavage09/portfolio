import React from 'react';

interface ParagraphProps {
  children: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="mb-10 dark:text-blue-100 text-dark-blue-800 text-lg">
      {children}
    </p>
  );
};
