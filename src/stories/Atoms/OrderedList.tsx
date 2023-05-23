import React from 'react';

interface OrderedListProps {
  items: Array<{
    name: string;
    discription: string;
  }>;
}

export const OrderedList: React.FC<OrderedListProps> = ({ items }) => {
  const listItems = items.map((item) => (
    <li key={item.name} className="">
      <b>{item.name}</b>: {item.discription}
    </li>
  ));

  return <ol className="self-start">{listItems}</ol>;
};
