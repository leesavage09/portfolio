import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps {
  href: string;
  scrollTarget?: string;
  children: ReactElement | string;
  className?: string;
}

export const Link = ({
  href,
  scrollTarget,
  children,
  className = '',
}: LinkProps) => {
  const router = useRouter();
  const [foundTarget, setFoundTarget] = useState(false);

  useEffect(() => {
    if (!scrollTarget) return;
    setFoundTarget(!!document.getElementById(scrollTarget));
  }, [router, scrollTarget]);

  if (scrollTarget && foundTarget) {
    return (
      <a
        className={twMerge('text-primary', className)}
        href={'#' + scrollTarget}
      >
        {' '}
        {children}{' '}
      </a>
    );
  }

  const hash = scrollTarget ? '#' + scrollTarget : '';

  return (
    <NextLink className={twMerge('text-primary', className)} href={href + hash}>
      {' '}
      {children}{' '}
    </NextLink>
  );
};
