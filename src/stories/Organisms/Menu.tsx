/* eslint-disable @next/next/no-html-link-for-pages */
import { ThemeToggle } from '@stories/Atoms/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import profilePic from '/public/images/leeSavage.png';

const MenuLinkItem = ({
  lable,
  href,
  scroll,
}: {
  lable: string;
  href: string;
  scroll?: boolean;
}) => {
  if (scroll)
    return (
      <li>
        <a
          className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
          href={href}
        >
          {lable}
        </a>
      </li>
    );

  return (
    <li>
      <Link
        className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
        href={href}
      >
        {lable}
      </Link>
    </li>
  );
};

export const Menu = () => {
  const router = useRouter();

  return (
    <nav
      className="fixed z-10 top-0 left-0 
    flex justify-between w-full p-4 
    dark:bg-dark-blue-700 bg-blue-100 drop-shadow-lg 
    text-md uppercase font-extrabold     
    "
    >
      <a
        href="/#"
        className="text-primary hover:text-yellow duration-500 flex items-center"
      >
        <Image
          src={profilePic}
          width={60}
          height={60}
          className="w-11 h-11 rounded-full dark:bg-dark-blue-500 bg-blue-200 mr-3"
          alt="A portrait photo of Lee Savage"
        />
        <span className="invisible md:visible">Lee Savage</span>
      </a>
      <ol className="flex flex-wrap space-x-9 items-center justify-end text-blue-100 ">
        {router.pathname === '/' ? (
          <MenuLinkItem href="/#" lable="Home" scroll />
        ) : (
          <MenuLinkItem href="/#" lable="Home" />
        )}

        {router.pathname === '/' ? (
          <MenuLinkItem href="/#about" lable="About" scroll />
        ) : (
          <MenuLinkItem href="/#about" lable="About" />
        )}

        {router.pathname === '/' ? (
          <MenuLinkItem href="/#projects" lable="Projects" scroll />
        ) : (
          <MenuLinkItem href="/#projects" lable="Projects" />
        )}

        <MenuLinkItem href="#contact" lable="Contact" scroll />

        <li>
          {' '}
          <ThemeToggle />
        </li>
      </ol>
    </nav>
  );
};
