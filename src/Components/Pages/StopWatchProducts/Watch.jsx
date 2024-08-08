import React, { useState, useEffect } from 'react';

const Watch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 5 }); // Set initial countdown time
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prevTime) => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({ ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }));
      } else if (time.hours > 0) {
        setTime((prevTime) => ({ ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }));
      } else {
        clearInterval(countdown);
        setShowProducts(false); // Hide products when countdown completes
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);

  return (
    <>
      {/* Stopwatch */}
      <div className="bg-[#EEF6FE] relative m-[0_0_39px_0] flex flex-row justify-between p-[16px_0_15px_55px] box-sizing-border">
        <div className="m-[9px_18px_10px_0] inline-block w-[145px] break-words font-['Lato'] font-normal text-[25px] leading-[1.455] text-[#0073E6]">
          Countdown
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
      {showProducts && (
        <div className="relative m-[0_55px_9px_55px] flex flex-wrap gap-6 box-sizing-border justify-center">
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
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
      )}
    </>
  );
}

export default Watch;