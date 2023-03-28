interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
}

export const Subtitle2: React.FC<Heading1Props> = ({ children }) => {
  return <p className="text-center text-xl mb-24">{children}</p>;
};
