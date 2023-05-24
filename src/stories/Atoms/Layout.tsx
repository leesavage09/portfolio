import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  columns?: number;
  elements: Array<{
    className?: string;
    element: JSX.Element;
  }>;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  elements,
  className = '',
  columns = 1,
}) => {
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

  return (
    <div
      className={twMerge(
        'w-full grid grid-cols-' + columns.toString() + ' gap-x-20 gap-y-24',
        className
      )}
    >
      {jsx}
    </div>
  );
};
