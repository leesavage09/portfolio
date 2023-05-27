interface AnchorProps {
  id: string;
}

export const Anchor = ({ id }: AnchorProps) => {
  return <span className="block relative -top-20" id={id} />;
};
