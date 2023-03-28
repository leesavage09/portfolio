import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

export const Menu = () => {
  return (
    <nav
      className="absolute top-0 left-0 
    flex justify-between w-full p-4 
    bg-dark-blue drop-shadow-lg 
    text-md uppercase font-extrabold
    "
    >
      <div className="flex items-center space-x-4 ">
        <Image
          src="/leeSavage.png"
          width={60}
          height={60}
          className="w-11 h-11 rounded-full bg-dark-blue-700"
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
