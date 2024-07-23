import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineShoppingCart, MdVerified, MdVerifiedUser } from "react-icons/md";
import shose from "../../../assets/images/Sneak1.png";
import assets310 from "../../../assets/images/Asset310.png";
import assets41 from "../../../assets/images/Asset41.png";

const PageOne = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #60ACF8 0%, #0073E6 100%)",
      }}
      className="text-white relative"
    >
      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-league-gothic font-semibold text-[48px] md:text-[116.99px] leading-[1.2] md:leading-[132px] break-words w-full tracking-tighter">
            New on Dehleez!
          </h1>

          <p className="text-base md:text-lg lg:text-xl mb-8">
            Explore the Latest Arrivals at Dehleez! Discover <br />
            our newest products and elevate your experience
          </p>
          <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={shose} alt="Product" className="mx-auto" />
        </div>
      </main>
      <div className="flex flex-wrap justify-around bg-blue-100 text-blue-500 p-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <MdVerified className="text-2xl mr-2" />
          <span className="text-lg text-black">Verified Sellers</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={assets41} alt="Authentic Products" className="text-2xl mr-2 w-6" />
          <span className="text-lg text-black">Authentic Products</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <img src={assets310} alt="Free Returns" className="text-2xl mr-2 w-6" />
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
  );
};

export default PageOne;
