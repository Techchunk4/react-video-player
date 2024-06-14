import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold"></div>
        <div className="flex space-x-4">
          <ul className="flex justify-end">
            <li className="mr-4">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
