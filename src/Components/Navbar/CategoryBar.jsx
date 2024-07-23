import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import {
  MdOutlineShoppingCart,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";


import shose from "../../assets/images/Sneak1.png";
import assets310 from "../../assets/images/Asset310.png";
import assets41 from "../../assets/images/Asset41.png";
import category from "../../assets/images/catmanue.png";
import basket from "../../assets/images/ShoppingBasket1.png";
import lipstice from "../../assets/images/Lipstick1.png";
import cotton from "../../assets/images/CottonPoloShirt1.png";
import women from "../../assets/images/WomanClothes1.png";
import teddy from "../../assets/images/TeddyBear1.png";
import shopper from "../../assets/images/Shopper1.png";
import resposive from "../../assets/images/Responsive1.png";
import plug from "../../assets/images/Plug1.png";
import television from "../../assets/images/Television1.png";
import football from "../../assets/images/Football1.png";
import wrist from "../../assets/images/Wristwatch1.png";
import bike from "../../assets/images/Motorcycle1.png";

const CategoryBar = () => {
  

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleCategory = () => {
      setIsCategoryOpen(!isCategoryOpen);
    };
  return (
    <>
       <div
        style={{
          background: "linear-gradient(90deg, #60ACF8 0%, #0073E6 100%)",
        }}
        className=" text-white relative"
      >
      <nav className="p-2 flex items-center justify-between">
          <div
            className="flex items-center ml-7 cursor-pointer"
            onClick={toggleCategory}
          >
            <img src={category} alt="" className="mr-3" />
            <span className="text-lg">Categories</span>
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
        {/* Category List */}
        {isCategoryOpen && (
          <div className="absolute top-2 rounded-[10px] left-8 p-2 bg-custom-light-blue z-50">
            <ul className="space-y-2 text-white">
              <div className="flex  cursor-pointer text-black font-bold">
                <TfiMenuAlt className="text-2xl mr-2" />
                <span className="text-lg">Categories</span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={basket} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Groceries & Pets
                </span>
              </div>{" "}
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={lipstice} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Health & Beauty
                </span>
              </div>{" "}
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={cotton} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Men's Fashion
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={women} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Women's Fashion
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={teddy} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Mother & Baby
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={shopper} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Home & Lifestyle
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={resposive} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Electronic Devices
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={plug} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Electronic Accessories
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={television} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  TV & Home Appliances
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={football} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Sports & Outdoor
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={wrist} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Watches, Bags & Jewellery
                </span>
              </div>
              <div className="flex cursor-pointer text-custom-gray">
                <div className="w-6 h-6 bg-custom-White-gray mr-3 flex items-center justify-center rounded-full">
                  <img src={bike} className="w-4 h-4" alt="" />
                </div>
                <span className="hover:underline text-[15px] cursor-pointer">
                  Automotive & Motorbike
                </span>
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryBar
