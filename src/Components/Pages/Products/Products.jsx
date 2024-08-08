import React from "react";
import ProductForYou from "./ProductForYou/ProductForYou";
import Watch from "../StopWatchProducts/Watch";
// import img1 from "./assets/images/PngTransparentLaptopComputerIconsLaptopElectronicsGadgetImageFileFormats2.png"
import img1 from "../../../assets/images/PngTransparentLaptopComputerIconsLaptopElectronicsGadgetImageFileFormats2.png"
import img3 from "../../../assets/images/PngimgComEarphonesPng52.png";
import img2 from "../../../assets/images/PngimgComShampooPng172.png";

const Products = () => {
  return (
    <>
      <div className="m-[0_55px_38.1px_55px] inline-block self-start break-words font-semibold text-[37.8px] leading-[0.962] text-[#000000]">
        <h1 className="text-4xl sm:text-6xl ">Categories</h1>
      </div>
      {/*  */}
      <div className="m-[0_55px_9px_55px] flex flex-wrap justify-center gap-4 box-sizing-border">
        {[
          // { title: "New Laptops", img: "./assets/images/PngTransparentLaptopComputerIconsLaptopElectronicsGadgetImageFileFormats2.png" },
          { title: "New Laptops", img: {img1} },

          { title: "Earpods", img: "assets/images/PngimgComEarphonesPng52.png" },
          { title: "Shampoo", img: "assets/images/PngimgComShampooPng172.png" },
          { title: "Moisturizers", img: "assets/images/PngwingCom22.png" },
          { title: "Kitchen Tools", img: "assets/images/PngwingCom32.png" },
          { title: "Watches", img: "assets/images/PngimgComWatchesPng98531.png" },
          { title: "Clothes", img: "assets/images/PngwingCom42.png" },
          { title: "Shoes", img: "assets/images/BlueSportSneakersShoesIsolatedTransparentBackgroundPngPsd8889621190RemovebgPreview2.png" },
          { title: "Sandles", img: "assets/images/PngwingCom51.png" },
          { title: "Pants", img: "assets/images/ImgbinMensJeansPng1.png" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-[rgba(217,217,217,0.5)] flex flex-col items-center p-4 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] box-sizing-border"
          >
            <div
              className="bg-cover bg-no-repeat w-full h-48 mb-4"
              style={{ backgroundImage: `url('${product.img}')` }}
            ></div>
            <span className="break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
              {product.title}
            </span>
          </div>
        ))}
      </div>
      <Watch />
      <ProductForYou />
    </>
  );
};

export default Products;
 