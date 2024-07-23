import React, { useState } from "react";
import { FaRegHeart, FaFacebookF } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import {
  MdOutlineShoppingCart,
} from "react-icons/md";
import logo from "../../assets/images/Logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #60ACF8 0%, #0073E6 100%)",
        }}
        className=" text-white relative"
      >
      <header className="flex items-center justify-between p-4 sm:hidden">
        <Link to={"/"}>
          <img className="h-12" src={logo} alt="Dehleez Logo" />
        </Link>
          {/* Burger Icon */}
          <div>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-blue-500">
            <div className="flex flex-col items-center p-4">
              <div className="relative ml-5 mb-4">
                <input
                  type="text"
                  className="bg-blue-500 text-white rounded-[10px] px-4 py-1 pl-10 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
              </div>
              <nav className="flex flex-col items-center space-y-4">
                <div className="flex items-center">
                  <IoPersonOutline className="text-2xl mr-2" />
                  <span className="text-lg cursor-pointer">Sign in</span>
                </div>
                <div className="flex items-center">
                  <FaRegHeart className="text-2xl mr-2" />
                  <span className="text-lg cursor-pointer">Favorites</span>
                </div>
                <div className="flex items-center">
                  <MdOutlineShoppingCart className="text-2xl mr-2 cursor-pointer" />
                </div>
              </nav>
            </div>
          </div>
        )}
        {/* End Mobile Menu */}

        {/* Desktop Header */}
        <header className="hidden sm:flex items-center justify-between p-2">
          <img className="h-10 ml-7 " src={logo} alt="Dehleez Logo" />
          <div className="flex-grow mx-8">
            <div className="relative ml-20">
              <input
                type="text"
                className="bg-blue-500 text-white rounded-[10px] px-4 py-2 pl-10 w-full sm:w-[550px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <GrInstagram className="text-white hover:text-gray-500 cursor-pointer text-2xl" />
            <FaFacebookF className="text-white hover:text-gray-500 cursor-pointer text-2xl" />
            <BiLogoTelegram className="text-white hover:text-gray-500 cursor-pointer text-2xl" />
          </div>
        </header>
        
      </div>
    </>
  )
}

export default Navbar
