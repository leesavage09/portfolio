import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  columns: 1 | 2 | 3;
  elements: Array<{
    className?: string;
    element: JSX.Element;
  }>;
}

export const Layout: React.FC<LayoutProps> = ({ elements, columns }) => {
  const jsx = elements.map((element, idx) => (
    <div
      key={idx}
      className={twMerge(
        'flex flex-col justify-start',
        element?.className || ''
      )}
    >
      {element.element}
    </div>
  ));

  const tailwindCol = (() => {
    switch (columns) {
      case 1:
        return 'w-full grid grid-cols-1 gap-x-20 gap-y-24';
      case 2:
        return 'w-full grid grid-cols-2 gap-x-20 gap-y-24';
      case 3:
        return 'w-full grid grid-cols-3 gap-x-20 gap-y-24';
    }
  })();

  return <div className={tailwindCol}>{jsx}</div>;
};
