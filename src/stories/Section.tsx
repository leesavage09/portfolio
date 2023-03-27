import React from 'react';

interface SectionProps {
  children: JSX.Element | Array<JSX.Element>;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="bg-blue dark:bg-dark-blue text-white flex flex-col justify-center items-center p-9 bg-pattern bg-cover">
      {children}
    </section>
  );
};
