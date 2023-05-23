import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  columns: Array<JSX.Element>;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ columns, className = '' }) => {
  const jsxColumns = columns.map((column, idx) => (
    <div key={idx} className="flex flex-col justify-start">
      {column}
    </div>
  ));

  return <div className={twMerge('w-full', className)}>{jsxColumns}</div>;
};
