import { ThemeToggle } from '@stories/Molecules/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '/public/images/leeSavage.png';

const MenuLinkItem = ({ lable, href }: { lable: string; href: string }) => (
  <li>
    <Link
      className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
      href={href}
    >
      {lable}
    </Link>
  </li>
);

export const Menu = () => {
  return (
    <nav
      className="fixed z-10 top-0 left-0 
    flex justify-between w-full p-4 
    dark:bg-dark-blue bg-blue-100 drop-shadow-lg 
    text-md uppercase font-extrabold     
    "
    >
      <div className="flex items-center space-x-4 ">
        <Image
          src={profilePic}
          width={60}
          height={60}
          className="w-11 h-11 rounded-full dark:bg-dark-blue-700 bg-blue-200"
          alt="A portrait photo of Lee Savage"
        />
        <a href="#" className="text-primary hover:text-yellow duration-500">
          Lee Savage
        </a>
      </div>
      <ol className="flex space-x-9 items-center text-blue-100 ">
        <MenuLinkItem href="#" lable="Home" />
        <MenuLinkItem href="#" lable="About" />
        <MenuLinkItem href="#" lable="Projects" />
        <MenuLinkItem href="#" lable="Contact" />
        <li>
          {' '}
          <ThemeToggle />
        </li>
      </ol>
    </nav>
  );
};
