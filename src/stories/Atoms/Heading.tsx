interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
  type: 'h1' | 'h2' | 'h3';
}

export const Heading: React.FC<Heading1Props> = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return (
        <h1
          className="
        text-dark-blue 
        dark:text-blue-100 
        
        text-6xl uppercase font-extrabold
    
        pb-4
        "
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className="
          text-dark-blue 
          dark:text-blue-100 
          
          text-4xl uppercase font-extrabold
      
          mb-11
      
          relative
      
          after:bg-primary
          after:w-8
          after:h-1
          after:inline-block
          after:rounded-full
          after:absolute
          after:-translate-x-2/4
          after:left-2/4
          after:top-[calc(100%_+_0.875rem)]
          "
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className="
            text-dark-blue 
            dark:text-blue-100 
            
            text-3xl capitalize font-extrabold
        
            mb-6
            "
        >
          {children}
        </h3>
      );
  }
};
