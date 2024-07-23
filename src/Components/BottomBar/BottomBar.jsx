import React from "react";
import easypaisa from "../../assets/images/EasypaisaAppLogoVector1.png";
import jazcash from "../../assets/images/Dae7998E4Ddfb250B1646B3Bf6290C61.png";
import mastercard from "../../assets/images/Image113.png";
import visa from "../../assets/images/Image112.png";
import playstore from "../../assets/images/GooglePlayStoreBadgeEnSvg1.png";
import appstore from "../../assets/images/X1281.png";
import facebook from "../../assets/images/VecteezyFacebookLogoPngFacebookIconTransparentPng189306981.png";
import instagram from "../../assets/images/VecteezyInstagramLogoPngInstagramIconTransparent189304151.png";
import twiter from "../../assets/images/VecteezyNewTwitterXlogoTwitterIconXsocialMediaIcon421486111.png";
import youtube from "../../assets/images/VecteezyYoutubeLogoPngYoutubeIconTransparent189306881.png";
import bangladash from "../../assets/images/Asset15.png";
import pakistan from "../../assets/images/pak.png";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center pl-5 pr-5 flex-wrap">
        {/* card */}
        <div className="p-5 w-full lg:w-1/4">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Customer Care
          </span>
          <div className="flex flex-col">
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Help Center
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              How to Buy
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Return &amp; Funds
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Dehleez Shop
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Contact us
            </span>
          </div>
        </div>
        {/* card */}
        <div className="p-5 w-full lg:w-1/4">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Dehleez
          </span>
          <div className="flex flex-col">
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
            <Link to={"/about"}>About us</Link>
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Terms &amp; Conditions
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Privacy Policy
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
               Grocery Shopping
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Dehleez Exclusive
            </span>
          </div>
        </div>
        {/* card */}
        <div className="p-5 w-full lg:w-1/4">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Payment Methods
          </span>
          <div className="flex flex-col items-center lg:items-start">
            <img src={easypaisa} alt="Easypaisa" className="w-[124px] " />
            <img
              src={jazcash}
              alt="JazzCash"
              className="w-[94px]  rotate-44"
            />
            <img src={visa} alt="Visa" className="w-[74px] mb-2" />
            <img src={mastercard} alt="MasterCard" className="w-[60px] mb-5" />
          </div>
        </div>
        {/* card */}
        <div className="p-5 w-full lg:w-1/4">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Exclusive Deals
          </span>
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={playstore}
              alt="Play Store"
              className="w-[124px] mb-2 mt"
            />
            <img src={appstore} alt="App Store" className="w-[124px] mb-2" />
          </div>
          <div className="w-full lg:w-auto text-center lg:text-left font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Follow Us
            <div className="flex justify-center lg:justify-start mt-2 cursor-pointer ">
              <img src={facebook} alt="Easypaisa" className="w-[50px]" />
              <img src={instagram} alt="Easypaisa" className="w-[50px]" />
              <img src={twiter} alt="Easypaisa" className="w-[50px]" />
              <img src={youtube} alt="Easypaisa" className="w-[50px]" />
            </div>
          </div>
        </div>
      </div>

      {/* sect - 2 */}
      <div className="flex flex-col lg:flex-row items-center pl-5 pr-5 flex-wrap">
        {/* card */}
        <div className="p-5 w-full lg:w-1/3">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Make Money With us
          </span>
          <div className="flex flex-col">
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Dehleez University
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Sell on Dehleez
            </span>
            <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">
              Join Dehleez Affiliate Program
            </span>
          </div>
        </div>
        {/* card */}
        <div className="p-5 w-full lg:w-1/3">
          <span className="block mb-6 font-semibold text-lg lg:text-[30.3px] text-[#0073E6]">
            Dehleez International
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-6">
                <img
                  src={pakistan}
                  alt="App Store"
                  className="w-[35px] mr-2"
                />
                <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">Pakistan</span>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src={bangladash}
                  alt="App Store"
                  className="w-[35px] mr-2"
                />
                <span className="mb-3 inline-block  font-normal text-base lg:text-[24.3px] text-[#9D9D9D]">Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
