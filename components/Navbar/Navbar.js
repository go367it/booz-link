import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { LinkIcon } from "@heroicons/react/outline";
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

const Navbar = () => {
  // for hiding the mobile menu
  const toggleMenu = () => {
    // menu.classList.toggle('hidden')
    document.querySelector(".mobile-menu").classList.toggle("hidden");
  };

  return (
    <div>
        <Fade down>
      <div className="py-3">
        <div className="flex justify-between w-full">
          <div className="primary ml-8 text-blue-600 flex items-center gap-2 md:gap-4">
            <LinkIcon className="h-6 w-6" />
            <h2 className="text-xl md:text-2xl">Booz.link</h2>
          </div>

          <div className="secondary hidden md:flex items-center gap-8">
            <a>Features</a>
            <a>FAQ</a>
            <Link href='/login'>
            <a className=" text-blue-600">Login</a>
            </Link>

            <button
              className="bg-blue-500 py-2 px-4 rounded-full mr-10 text-white 
                    hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Sign Up Free
            </button>
          </div>

          {/* for mobile view hamburger button */}
          <div className="md:hidden flex items-center h-12 w-12 mr-3">
            <button
              onClick={() => toggleMenu()}
              className="mobile-menu-button py-2 px-3 focus:ring-2 focus:ring-gray-600 rounded-sm"
            >
              <MenuIcon className="block h-6 w-6" />
            </button>
          </div>
        </div>

        {/* list for mobile view */}
        <div
          className="mobile-menu hidden md:hidden p-5 w-screen"
          toggle="hidden"
        >
          <button
            className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            Features
          </button>
          <button
            className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            FAQ
          </button>

          <button
            className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 text-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
          <button
            className="bg-blue-500 my-2 w-full py-2 px-4 rounded-full mr-10 text-white 
                    hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Sign Up Free
          </button>
        </div>
      </div>
      <hr />
      </Fade>
    </div>
  );
};

export default Navbar;
