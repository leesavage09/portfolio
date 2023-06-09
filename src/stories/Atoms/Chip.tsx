import React from 'react';

interface ChipProps {
  lable: string;
}

export const Chip: React.FC<ChipProps> = ({ lable }) => {
  return (
    <div className="p-3 bg-blue-500 text-dark-blue rounded-lg drop-shadow-md text-base">
      {lable}
    </div>
  );
};
