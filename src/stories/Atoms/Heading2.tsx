interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
}

export const Heading2: React.FC<Heading1Props> = ({ children }) => {
  return (
    <h1
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
    </h1>
  );
};
