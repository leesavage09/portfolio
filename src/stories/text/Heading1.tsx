interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
}

export const Heading1: React.FC<Heading1Props> = ({ children }) => {
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
};
