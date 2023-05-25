import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

interface LinkProps {
  href: string;
  scrollTarget?: string;
  children: ReactElement | string;
}

export const Link = ({ href, scrollTarget, children }: LinkProps) => {
  const router = useRouter();
  const [foundTarget, setFoundTarget] = useState(false);

  useEffect(() => {
    if (!scrollTarget) return;
    setFoundTarget(!!document.getElementById(scrollTarget));
  }, [scrollTarget]);

  if (scrollTarget && foundTarget) {
    console.log(router.pathname, { href }, { scrollTarget });
    return (
      <a className="text-primary" href={'#' + scrollTarget}>
        {' '}
        {children}{' '}
      </a>
    );
  }

  const hash = scrollTarget ? '#' + scrollTarget : '';

  return (
    <NextLink className="text-primary" href={href + hash}>
      {' '}
      {children}{' '}
    </NextLink>
  );
};
