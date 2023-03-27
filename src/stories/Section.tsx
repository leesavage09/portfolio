import React from 'react';

interface SectionProps {
  children: JSX.Element | Array<JSX.Element>;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section
      className="
    bg-blue-200 
    text-dark-blue-800 

    dark:bg-dark-blue 
    dark:text-blue-100 
    
    flex flex-col justify-center items-center 
    
    p-9
    h-screen
    
    bg-pattern bg-cover
    "
    >
      {children}
    </section>
  );
};
