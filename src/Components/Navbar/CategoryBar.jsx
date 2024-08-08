import React, { useState, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import categoryIcon from "../../assets/images/catmanue.png";
import basket from "../../assets/images/ShoppingBasket1.png";
import lipstick from "../../assets/images/Lipstick1.png";
import cotton from "../../assets/images/CottonPoloShirt1.png";
import women from "../../assets/images/WomanClothes1.png";
import teddy from "../../assets/images/TeddyBear1.png";
import shopper from "../../assets/images/Shopper1.png";
import responsive from "../../assets/images/Responsive1.png";
import plug from "../../assets/images/Plug1.png";
import television from "../../assets/images/Television1.png";
import football from "../../assets/images/Football1.png";
import wrist from "../../assets/images/Wristwatch1.png";
import bike from "../../assets/images/Motorcycle1.png";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
  const categoryRef = useRef(null);
  const navigate = useNavigate();

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleMouseEnter = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    setHoverPosition({ top: rect.top - 65, left: rect.right - 20 }); // Adjusted position
    setHoveredCategory(index);
  };

  const handleCategoryClick = (index) => {
    const categoryName = categories[index].name;
    navigate(`/category/${categoryName.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const categories = [
    { name: "Groceries & Pets", img: basket },
    { name: "Health & Beauty", img: lipstick },
    { name: "Men's Fashion", img: cotton },
    { name: "Women's Fashion", img: women },
    { name: "Mother & Baby", img: teddy },
    { name: "Home & Lifestyle", img: shopper },
    { name: "Electronic Devices", img: responsive },
    { name: "Electronic Accessories", img: plug },
    { name: "TV & Home Appliances", img: television },
    { name: "Sports & Outdoor", img: football },
    { name: "Watches, Bags & Jewellery", img: wrist },
    { name: "Automotive & Motorbike", img: bike },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white relative">
      <nav className="p-2 flex items-center justify-between">
        <div
          className="flex items-center ml-7 cursor-pointer"
          onClick={toggleCategory}
        >
          <img src={categoryIcon} alt="Category Icon" className="mr-3" />
          <span className="text-lg">Categories</span>
        </div>
        <div className="flex items-center space-x-10 hidden sm:flex">
          <div className="flex items-center">
            <IoPersonOutline className="text-2xl mr-2" />
            <Link to="/userLogin">
              <span className="text-lg cursor-pointer">Sign in</span>
            </Link>
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
      {isCategoryOpen && (
        <div className="absolute top-2 rounded-lg left-8 p-2 bg-blue-200 z-50" ref={categoryRef}>
          <ul className="space-y-2 text-white">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`flex items-center cursor-pointer text-gray-700 hover:bg-blue-400 p-2 rounded-lg ${
                  hoveredCategory === index ? "bg-blue-300" : ""
                }`}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => handleCategoryClick(index)}
              >
                <div className="w-6 h-6 bg-gray-100 mr-3 flex items-center justify-center rounded-full">
                  <img
                    src={category.img}
                    className="w-4 h-4"
                    alt={category.name}
                  />
                </div>
                <span className="text-sm">{category.name}</span>
              </li>
            ))}
          </ul>
          {hoveredCategory !== null && (
            <div
              className="absolute w-[15rem] bg-white text-black p-2 rounded-lg shadow-lg flex items-center hover:underline"
              style={{ top: hoverPosition.top, left: hoverPosition.left }}
            >
              <img
                src={categories[hoveredCategory].img}
                className="w-5 h-5 mr-2"
                alt={categories[hoveredCategory].name}
              />
              <span>{categories[hoveredCategory].name}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryBar;
