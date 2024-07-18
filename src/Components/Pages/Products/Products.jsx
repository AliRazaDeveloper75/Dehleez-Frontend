import React, { useState, useEffect } from "react";
import ProductForYou from "./ProductForYou/ProductForYou";

const Products = () => {
  const [time, setTime] = useState({ hours: 24, minutes: 59, seconds: 59 });
  const [isActive, setIsActive] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;
          if (seconds > 0) {
            seconds -= 1;
          } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timer);
            setIsActive(true);
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
      setIntervalId(timer);
    } else if (!isActive && intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(timer);
  }, [isActive, intervalId]);
  return (
    <>
      <div className="m-[0_55px_38.1px_55px] inline-block self-start break-words  font-semibold text-[37.8px] leading-[0.962] text-[#000000]">
        <h1 className="text-4xl sm:text-6xl  mb-4">Categories</h1>
      </div>
      <div className="m-[0_55px_9px_55px] flex flex-row gap-[0_10px]  box-sizing-border">
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col items-center p-[35px_24px_19.5px_20px] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngTransparentLaptopComputerIconsLaptopElectronicsGadgetImageFileFormats2.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_18.5px_0] w-[214px] h-[149px]"></div>
          <span className="m-[0_0_0_4px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            New Laptops
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col justify-end items-center p-[0_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngimgComEarphonesPng52.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_25.5px_0] w-[135px] h-[135px]"></div>
          <span className="m-[0_0_0_19px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Earpods
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col items-center p-[33px_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngimgComShampooPng172.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_16.5px_0] w-[153px] h-[153px]"></div>
          <span className="m-[0_0_0_3px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Shampoo
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col items-center p-[23px_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngwingCom22.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0px_7.5px_0] w-[147px] h-[172px]"></div>
          <span className="m-[0_0_0_15px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Moisturizers
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col justify-end items-center p-[0_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngwingCom32.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_1px_18.5px_0] w-[94px] h-[138px]"></div>
          <span className="break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Kitchen Tools
          </span>
        </div>
      </div>
      <div className="m-[0_55px_32px_55px] flex flex-row gap-[0_10px] box-sizing-border">
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col items-center p-[30px_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngimgComWatchesPng98531.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_20.5px_0] w-[152px] h-[152px]"></div>
          <span className="m-[0_0_0_13px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Watches
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col items-center p-[38px_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/PngwingCom42.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_14.5px_0] w-[112px] h-[150px]"></div>
          <span className="m-[0_0_0_3px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Clothes
          </span>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex p-[202.5px_0_19.5px_0] w-[258px] box-sizing-border">
          <span className="relative break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Shoes
          </span>
          <div className="bg-[url('assets/images/BlueSportSneakersShoesIsolatedTransparentBackgroundPngPsd8889621190RemovebgPreview2.png')] bg-[50%_50%] bg-cover bg-no-repeat absolute left-[9px] top-[30px] right-[14px] h-[177px]"></div>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex p-[202.5px_0_19.5px_0] w-[258px] box-sizing-border">
          <span className="relative break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Sandles
          </span>
          <div className="bg-[url('assets/images/PngwingCom51.png')] bg-[50%_50%] bg-cover bg-no-repeat absolute left-[1px] top-[29px] right-[9px] h-[178px]"></div>
        </div>
        <div className="bg-[rgba(217,217,217,0.5)] relative flex flex-col justify-end items-center p-[0_0_19.5px_0] w-[258px] box-sizing-border">
          <div className="bg-[url('assets/images/ImgbinMensJeansPng1.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_22.5px_0] w-[133px] h-[133px]"></div>
          <span className="m-[0_0_0_2px] break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
            Pants
          </span>
        </div>
      </div>
      {/* Stopwatch */}
      <div className="bg-[#EEF6FE] relative m-[0_0_39px_0] flex flex-row justify-between p-[16px_0_15px_55px] box-sizing-border">
        <div className="m-[9px_18px_10px_0] inline-block w-[145px] break-words font-['Lato'] font-normal text-[25px] leading-[1.455] text-[#0073E6]">
          Stopwatch
        </div>
        <div className="flex flex-row box-sizing-border items-center">
          <div className="rounded-[2px] bg-[#0073E6] relative m-[0_11px_0_0] flex p-[13px_17px_12px_15px] box-sizing-border">
            <span className="break-words font-['Lato'] font-normal text-[25px] leading-[1.2] text-[#FFFFFF]">
              {String(time.hours).padStart(2, "0")}
            </span>
          </div>
          <div className="m-[22.5px_13.8px_25.5px_0] inline-block break-words font-['Lato'] font-normal text-[25px] leading-[0.28] text-[#000000]">
            :
          </div>
          <div className="rounded-[2px] bg-[#0073E6] relative m-[0_13px_0_0] flex p-[13px_17px_12px_15px] box-sizing-border">
            <span className="break-words font-['Lato'] font-normal text-[25px] leading-[1.2] text-[#FFFFFF]">
              {String(time.minutes).padStart(2, "0")}
            </span>
          </div>
          <div className="m-[22.5px_11.8px_25.5px_0] inline-block break-words font-['Lato'] font-normal text-[25px] leading-[0.28] text-[#000000]">
            :
          </div>
          <div className="rounded-[2px] bg-[#0073E6] relative flex p-[13px_17px_12px_15px] box-sizing-border">
            <span className="break-words font-['Lato'] font-normal text-[25px] leading-[1.2] text-[#FFFFFF]">
              {String(time.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    {/* flash on sale */}
<div className="relative m-[0_55px_9px_55px] flex flex-wrap gap-6 box-sizing-border justify-center">
  {[1, 2, 3, 4,5,6,7].map((_, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="relative flex box-sizing-border">
        <div className="relative flex flex-row gap-[10px] h-[fit-content] box-sizing-border">
          <div className="bg-[rgba(217,217,217,0.5)] relative p-[42px_18px_67px_18px] w-[258px] h-[258px] box-sizing-border">
            <div className="bg-[url('assets/images/Pngtreeairpods91491371.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[214px] h-[149px]"></div>
          </div>
        </div>
      </div>
      <div className="m-1">
        <span className="block m-[0_20px_0_0] w-[186px] break-words font-['Lato'] font-semibold text-[15.5px] leading-[1.29] text-[#000000]">
          M10 Wireless Headphones Earbuds Touch
        </span>
        <span className="block m-[0_15px_0_0] break-words font-['Lato'] font-semibold text-[23.3px] leading-[1.29] text-[#FF2E00]">
          Rs 890
        </span>
        <span className="block m-[0_12.5px_0_0] break-words font-['Lato'] font-normal text-[15.5px] leading-[1.29] text-[#AEAEAE]">
          Rs 4000 <span className="text-black">75%</span>
        </span>
      </div>
    </div>
  ))}
</div>
<ProductForYou/>
    </>
  );
};

export default Products;
