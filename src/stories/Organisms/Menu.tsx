import { Link } from '@stories/Atoms/Link';
import { ThemeToggle } from '@stories/Atoms/ThemeToggle';
import Image from 'next/image';
import profilePic from '/public/images/leeSavage.png';

export const Menu = () => (
  <nav
    className="fixed z-10 top-0 left-0 
    flex justify-between w-full p-4 
    dark:bg-dark-blue-700 bg-blue-100 drop-shadow-lg 
    text-sm uppercase font-extrabold  
    sm:text-base
    md:text-lg
    "
  >
    <Link
      href="/"
      scrollTarget="home"
      className="text-primary hover:text-yellow duration-500 flex items-center"
    >
      <>
        <Image
          src={profilePic}
          width={60}
          height={60}
          className="w-11 h-11 rounded-full dark:bg-dark-blue-500 bg-blue-200 mr-3 hidden md:block"
          alt="A portrait photo of Lee Savage"
        />
        <span className="hidden md:block">Lee Savage</span>
      </>
    </Link>
    <div className="flex items-center ">
      <ol className="flex flex-wrap space-x-9 justify-end text-blue-100 ">
        <span className="flex flex-wrap space-x-9 justify-end">
          <Link
            href="/"
            scrollTarget="home"
            className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
          >
            Home
          </Link>
          <Link
            href="/"
            scrollTarget="about"
            className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
          >
            About
          </Link>
        </span>
        <span className="flex flex-wrap space-x-9 justify-end">
          <Link
            href="/"
            scrollTarget="projects"
            className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
          >
            Projects
          </Link>
          <Link
            href="/"
            scrollTarget="contact"
            className="text-dark-blue dark:text-blue-100 hover:text-yellow dark:hover:text-yellow duration-500"
          >
            Contact
          </Link>
        </span>
      </ol>
      <li className="list-none ml-4">
        <ThemeToggle />
      </li>
    </div>
  </nav>
);
