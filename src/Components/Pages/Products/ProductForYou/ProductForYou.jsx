import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa'; // Assuming you are using react-icons for the heart and star icons

const ProductForYou = () => {
  return (
    <>
      <div className="m-[0_55px_28px_55px] inline-block self-start break-words font-['Lato'] font-semibold text-[37.8px] leading-[0.962] text-[#000000]">
        Just For You
      </div>
      <div className="relative m-[0_55px_9px_55px] flex flex-wrap gap-6 box-sizing-border justify-center">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative flex box-sizing-border">
              <div className="relative flex flex-row gap-[10px] h-[fit-content] box-sizing-border">
                <div className="bg-[rgba(217,217,217,0.5)] relative p-[42px_18px_67px_18px] w-[258px] h-[258px] box-sizing-border">
                  <div className="bg-[url('assets/images/Pngtreeairpods91491371.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[214px] h-[149px]"></div>
                </div>
              </div>
            </div>
            <div className="m-1 flex flex-col ">
              <div className="flex justify-between w-full px-2">
                <span className="block break-words font-['Lato'] font-semibold  ">
                  Wireless Headphones 
                </span>
                <FaHeart className="text-red-500" />
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
               <span className="block mt-1 break-words font-['Lato'] font-normal text-[15.5px] leading-[1.29] text-[#AEAEAE]">
                Rs 4000 <span className="text-black">75%</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductForYou;
