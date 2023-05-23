interface Heading1Props {
  children: JSX.Element | Array<JSX.Element | string> | string;
  type: 'L' | 'M';
}

export const Subtitle: React.FC<Heading1Props> = ({ children, type }) => {
  switch (type) {
    case 'L':
      return <p className="text-2xl text-center mb-8">{children}</p>;
    case 'M':
      return <p className="text-center text-xl mb-16">{children}</p>;
  }
};
