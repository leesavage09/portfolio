import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  primary: boolean;
  label: string;
  className?: string;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  label,
  className = '',
  href,
}) => {
  const defaultStyle = `${
    primary ? 'bg-primary' : 'bg-blue'
  } text-dark-blue-800 uppercase py-3 px-9 rounded-md drop-shadow-lg border-none duration-300 hover:-translate-y-1`;

  return (
    <Link
      type="button"
      className={twMerge(defaultStyle, className)}
      href={href}
    >
      {label}
    </Link>
  );
};
