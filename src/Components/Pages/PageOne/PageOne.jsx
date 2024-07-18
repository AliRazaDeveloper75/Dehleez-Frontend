import React, { useState } from "react";
import { FaRegHeart, FaFacebookF } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { GoVerified } from "react-icons/go";
import {
  MdOutlineShoppingCart,
  MdVerified,
  MdVerifiedUser,
  MdOutlineKeyboardReturn,
} from "react-icons/md";
import logo from "../../../assets/images/Logo1.png";
import shose from "../../../assets/images/Sneak1.png";
import assets310 from "../../../assets/images/Asset310.png";
import assets41 from "../../../assets/images/Asset41.png";
const PageOne = () => {
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
        className="min-h-screen text-white"
      >
        <header className="flex items-center justify-between p-4 sm:hidden">
          <img className="h-12" src={logo} alt="Dehleez Logo" />
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
        {/* End Mobile Header */}

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
        {/* End Desktop Header */}

        {/* Categories */}
        <nav className="p-2 flex items-center justify-between">
          <div className="flex items-center ml-7">
            <TfiMenuAlt className="text-2xl  mr-2" />
            <span className="text-lg cursor-pointer">Categories</span>
          </div>
          <div className="flex items-center space-x-10 hidden sm:flex">
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
          </div>
        </nav>
        {/* Main Content */}
        <main className="flex flex-col sm:flex-row items-center justify-between pr-8 pl-8">
          <div className="sm:w-1/2">
            <h1 class="font-league-gothic font-semibold text-[116.99px] leading-[132px] text-left break-words w-full">
              New on Dehleez!
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Explore the Latest Arrivals at Dehleez! Discover <br />
              our newest products and elevate your experience
            </p>
            <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="sm:w-1/2">
            <img src={shose} alt="Product" className="mx-auto" />
          </div>
        </main>
        <div className="flex flex-col sm:flex-row justify-around bg-blue-100 text-blue-500 p-4 ">
        <div className="flex items-center mb-2 sm:mb-0">
          <MdVerified className="text-2xl mr-2" />
          <span className="text-lg text-black">Verified Sellers</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={assets41} alt="" className="text-2xl mr-2 w-6" />
          <span className="text-lg text-black">Authentic Products</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={assets310} alt="" className="text-2xl mr-2 w-6" />
          <span className="text-lg text-black">Free Returns</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <TbTruckDelivery className="text-2xl mr-2" />
          <span className="text-lg text-black">Nationwide Delivery</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <MdVerifiedUser className="text-2xl mr-2" />
          <span className="text-lg text-black">Safe Payments</span>
        </div>
      </div>
      </div>

    
    </>
  );
};

export default PageOne;
