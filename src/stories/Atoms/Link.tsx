import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps {
  href: string;
  scrollTarget?: string;
  children: ReactElement<any> | string;
  className?: string;
}

export const Link = ({
  href,
  scrollTarget,
  children,
  className = '',
}: LinkProps) => {
  const router = useRouter();

  if (
    scrollTarget &&
    typeof window !== 'undefined' &&
    !!document.getElementById(scrollTarget)
  ) {
    return (
      <a
        className={twMerge('text-primary', className)}
        href={'#' + scrollTarget}
      >
        {' '}
        {children}
      </a>
    );
  }

  const hash = scrollTarget ? '#' + scrollTarget : '';

  return (
    <NextLink className={twMerge('text-primary', className)} href={href + hash}>
      {' '}
      {children}
    </NextLink>
  );
};
