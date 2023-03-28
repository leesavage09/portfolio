interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
}

export const Heading3: React.FC<Heading1Props> = ({ children }) => {
  return (
    <h1
      className="
    text-dark-blue 
    dark:text-blue-100 
    
    text-3xl capitalize font-extrabold

    mb-6
    "
    >
      {children}
    </h1>
  );
};
