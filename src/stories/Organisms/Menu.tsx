/* eslint-disable @next/next/no-html-link-for-pages */
import { ThemeToggle } from '@stories/Atoms/ThemeToggle';
import Image from 'next/image';
import profilePic from '/public/images/leeSavage.png';

const MenuLinkItem = ({
  lable,
  scrollTo,
}: {
  lable: string;
  scrollTo: string;
}) => (
  <li>
    <a
      className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
      href={`/#${scrollTo}`}
    >
      {lable}
    </a>
  </li>
);

export const Menu = () => {
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
        <MenuLinkItem scrollTo="" lable="Home" />
        <MenuLinkItem scrollTo="about" lable="About" />
        <MenuLinkItem scrollTo="projects" lable="Projects" />
        <MenuLinkItem scrollTo="contact" lable="Contact" />
        <li>
          {' '}
          <ThemeToggle />
        </li>
      </ol>
    </nav>
  );
};
