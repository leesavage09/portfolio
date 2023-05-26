import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LayoutItemProps {
  className?: string;
  children?: ReactNode;
}

export const LayoutItem = ({ children, className }: LayoutItemProps) => (
  <div
    className={twMerge('flex flex-col justify-start  items-center', className)}
  >
    {children}
  </div>
);

interface LayoutProps {
  columns: 1 | 2 | 3;
  children: ReactNode;
}

export const Layout = ({ children, columns }: LayoutProps) => {
  const tailwindCol = (() => {
    switch (columns) {
      case 1:
        return 'w-full grid grid-cols-1 gap-y-16';
      case 2:
        return 'w-full grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:gap-y-12 lg:gap-y-24  gap-x-8 md:gap-x-14 lg:gap-x-20';
    }
  })();

  return <div className={tailwindCol}>{children}</div>;
};
