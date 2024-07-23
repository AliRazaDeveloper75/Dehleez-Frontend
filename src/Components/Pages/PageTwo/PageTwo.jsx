import React from "react";
import shose from '../../../assets/images/Asset14.png'

const PageTwo = () => {
  return (
    <>
      <div className=" min-h-screen text-black">
        <main className="flex flex-col sm:flex-row items-center justify-between p-8">
          <div className="sm:w-1/2">
            <h1 className="text-4xl sm:text-6xl  mb-4">
              Experience Luxury <br />and comfort <br />with Dehleez
            </h1>
            <p className="text-lg sm:text-xl mb-8">
            Discover the Dehleez difference today. Explore our stunning <br />projects or shedule a free consultation with our experts <br /> to start your journey towards a luxuroius and <br />comfortable living experience.
            </p>
          </div>
          <div className="sm:w-1/2 mt-8">
            <img src={shose} alt="Product" className="w-[30rem] mx-auto" />
          </div>
        </main>
      </div>
    </>
  );
};

export default PageTwo;
