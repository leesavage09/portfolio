import Image from 'next/image';
import profilePic from '../../public/leeSavage.png';
import { ThemeToggle } from './ThemeToggle';

export const Menu = () => {
  return (
    <nav
      className="absolute top-0 left-0 
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
        <li>
          <a href="#" className="hover:text-yellow duration-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow duration-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow duration-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow duration-500">
            Contact
          </a>
        </li>
        <li>
          {' '}
          <ThemeToggle />
        </li>
      </ol>
    </nav>
  );
};
