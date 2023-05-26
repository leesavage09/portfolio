import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  primary?: boolean;
  label: string;
  className?: string;
  href?: string;
  scrollTo?: string;
  onClick?: () => void;
  submit?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  label,
  className = '',
  scrollTo,
  href,
  onClick,
  submit,
  disabled,
}) => {
  const defaultStyle = `${
    primary
      ? 'bg-primary text-dark-blue-800 disabled:bg-primary-100 disabled:text-dark-blue-100'
      : 'bg-blue disabled:bg-blue-100 text-dark-blue disabled:text-dark-blue-100'
  }  uppercase py-3 px-9 rounded-md drop-shadow-lg border-none duration-300 hover:-translate-y-1 disabled:hover:-translate-y-0`;

  const style = twMerge(defaultStyle, className);

  if (scrollTo)
    return (
      <a
        type="button"
        className={style}
        href={`#${scrollTo}`}
        onClick={onClick}
      >
        {label}
      </a>
    );

  if (href)
    return (
      <Link type="button" className={style} href={href} onClick={onClick}>
        {label}
      </Link>
    );

  if (onClick)
    return (
      <button type="button" className={style} onClick={onClick}>
        {label}
      </button>
    );

  if (submit)
    return (
      <button type="submit" className={style} disabled={disabled}>
        {label}
      </button>
    );

  throw Error('Button component requires href, onClick or scrollTo');
};
