import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonPropsBasic {
  type: 'href' | 'scrollTo' | 'onClick' | 'submit';
  primary?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonPropsHref extends ButtonPropsBasic {
  type: 'href';
  href: string;
}

interface ButtonPropsScroll extends ButtonPropsBasic {
  type: 'scrollTo';
  scrollTo: string;
}

interface ButtonPropsOnClick extends ButtonPropsBasic {
  type: 'onClick';
  onClick: () => void;
}

interface ButtonPropsSubmit extends ButtonPropsBasic {
  type: 'submit';
  disabled: boolean;
  disabledText: string;
}

const primaryStyles =
  'bg-primary text-dark-blue-800 disabled:bg-primary-100 disabled:text-dark-blue-100';
const secondaryStyles =
  'bg-primary text-dark-blue-800 disabled:bg-primary-100 disabled:text-dark-blue-100';
const defaultStyle =
  'uppercase py-3 px-9 rounded-md drop-shadow-lg border-none duration-300 hover:-translate-y-1 disabled:hover:-translate-y-0';

type ButtonProps =
  | ButtonPropsHref
  | ButtonPropsScroll
  | ButtonPropsOnClick
  | ButtonPropsSubmit;

export const Button: React.FC<ButtonProps> = (props) => {
  const style = twMerge(
    twMerge(props.primary ? primaryStyles : secondaryStyles, defaultStyle),
    props.className
  );

  switch (props.type) {
    case 'scrollTo':
      return (
        <a type="button" className={style} href={`#${props.scrollTo}`}>
          {props.children}
        </a>
      );
    case 'href':
      return (
        <Link type="button" className={style} href={props.href}>
          {props.children}
        </Link>
      );
    case 'onClick':
      return (
        <button type="button" className={style} onClick={props.onClick}>
          {props.children}
        </button>
      );

    case 'submit':
      return (
        <button type="submit" className={style} disabled={props.disabled}>
          {props.disabled && props.disabledText
            ? props.disabledText
            : props.children}
        </button>
      );
    default:
      throw Error('Button component requires href, onClick submit or scrollTo');
  }
};
