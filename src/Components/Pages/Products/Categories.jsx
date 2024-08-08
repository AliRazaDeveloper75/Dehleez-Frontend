import React, { useState, useEffect } from "react";
import img1 from "../../../assets/images/PngTransparentLaptopComputerIconsLaptopElectronicsGadgetImageFileFormats2.png";
import img2 from "../../../assets/images/PngimgComEarphonesPng52.png";
import img3 from "../../../assets/images/PngimgComShampooPng172.png";
import img4 from "../../../assets/images/PngimgComShampooPng172.png";
import img5 from "../../../assets/images/PngimgComShampooPng172.png";
import img6 from "../../../assets/images/PngimgComShampooPng172.png";
import img7 from "../../../assets/images/PngimgComShampooPng172.png";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const imageLinks = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
  };

  useEffect(() => {
    fetch("http://39.61.51.195:8004/account/category/")
      .then((response) => response.json())
      .then((data) => {
        // Add image URL to each category
        const categoriesWithImages = data.map((category) => ({
          ...category,
          imageUrl: imageLinks[category.category_id] || "default_image.jpg", // Use a default image if not mapped
        }));
        setCategories(categoriesWithImages);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
      <div className="m-[0_55px_38.1px_55px] inline-block self-start break-words font-semibold text-[37.8px] leading-[0.962] text-[#000000]">
        <h1 className="text-4xl sm:text-6xl">Categories</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-12">
        {categories.map((category) => (
          <div
            key={category.category_id}
            className="bg-[rgba(217,217,217,0.5)] flex flex-col items-center p-4 w-full box-sizing-border"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-32 h-32 object-cover mb-2"
            />
            <p className="break-words font-['Lato'] font-semibold text-[24px] leading-[1.516] text-[#000000]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
