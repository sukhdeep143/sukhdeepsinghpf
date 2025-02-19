"use client";

import Link from "next/link";
import React, { useState } from "react";


function Header() {
  const [isClick, setisClick] = useState(false);

  const ToggleNav = () => {
    setisClick(!isClick);
  };
  return (
    <main className={`bg-transparent sm:pl-5 sm:rounded-full sm:border border-purple-600 `} >
      <div className=" max-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center   h-16">
          <div className="flex items-center    min-w-full  justify-between  ">
            <div className="flex-shrink-0  text-white flex-col-reverse transform transition-transform duration-300 ease-in-out  hover:scale-125 ">
              <Link 
              href="/"
              >
                <div className={`text-white hover:bg-pink-700 hover:text-white rounded-full transform transition-transform duration-300 ease-in-out  hover:scale-90 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient p-2 BokorFont sm:text-4xl text-xl `} >Sukhdeep Singh</div>
                </Link>
            </div>
            <div className="hidden sm:block  sm:text-3xl ">
              <div className="ml-4 flex items-center  space-x-4 ">
                <Link
                
                  href="/"
                  className="text-white hover:bg-pink-600 hover:text-white rounded-lg transform transition-transform duration-300 ease-in-out  hover:scale-90 p-2 Bokor"
                  >
                  Home
                  </Link>
                
                <a
                  href="/about_me"
                  className="text-white hover:bg-pink-600 hover:text-white rounded-lg transform transition-transform duration-300 ease-in-out  hover:scale-90 p-2"
                >
                  About Me
                </a>
                <Link
                  href="/contact"
                  className="text-white hover:bg-pink-600 hover:text-white transform transition-transform duration-300 ease-in-out  hover:scale-90 rounded-lg p-2"
                >
                  Contact Us
                </Link>
                <Link
                  href="/Our_services"
                  className="text-white hover:bg-pink-600 hover:text-white transform transition-transform duration-300 ease-in-out  hover:scale-90 rounded-lg p-2"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <button  className="bg-black p-2 rounded-sm  m-4 sm:hidden transform transition-transform duration-300 ease-in-out   hover:scale-90  "
             onClick={ToggleNav}
             >
              {isClick ? (
                  // Close Icon
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6   "
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                  // Hamburger Icon
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  
                  >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="sm:hidden shadow-2xl border rounded-xl text-xl ">
          <div className="px-2 pt-2 pb-3  space-y-1 sm:px-3 grid grid-row-4 ">
            <Link
              href="/"
              className="text-white hover:bg-pink-600  hover:text-white rounded-lg p-2 transform transition-transform duration-300 ease-in-out  hover:scale-90"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-white hover:bg-pink-600 hover:text-white rounded-lg p-2  transform transition-transform duration-300 ease-in-out  hover:scale-90"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="text-white hover:bg-pink-600 hover:text-white rounded-lg p-2  transform transition-transform duration-300 ease-in-out  hover:scale-90"
            >
              Contact Us
            </Link>
            <Link
              href="/Our_services"
              className="text-white hover:bg-pink-600 hover:text-white rounded-lg p-2  transform transition-transform duration-300 ease-in-out  hover:scale-90"
            >
              Our Services
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Header;
