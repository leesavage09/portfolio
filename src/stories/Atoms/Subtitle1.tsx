interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
}

export const Subtitle1: React.FC<Heading1Props> = ({ children }) => {
  return <p className="text-2xl text-center mb-8">{children}</p>;
};
