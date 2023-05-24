import React from 'react';

interface OrderedListProps {
  items: Array<{
    name: string;
    discription: string;
    href?: string;
  }>;
}

export const OrderedList: React.FC<OrderedListProps> = ({ items }) => {
  const listItems = items.map((item) => (
    <li key={item.name} className="">
      {item.href ? (
        <>
          <b>{item.name}</b>:{` `}
          <a className="text-primary underline" href={item.href}>
            {item.discription}
          </a>
        </>
      ) : (
        <>
          <b>{item.name}</b>: {item.discription}
        </>
      )}
    </li>
  ));

  return <ol className="self-start">{listItems}</ol>;
};
