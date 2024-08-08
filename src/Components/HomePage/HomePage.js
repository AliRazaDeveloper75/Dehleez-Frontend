import React from "react";
import PageOne from "../Pages/PageOne/PageOne";
import PageTwo from "../Pages/PageTwo/PageTwo";
import Products from "../Pages/Products/Products";
import Navbar from "../Navbar/Navbar";
import CategoryBar from "../Navbar/CategoryBar";
import Categories from "../Pages/Products/Categories";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <PageOne />
      <PageTwo />
      <Categories/>
      <Products />
    </>
  );
};

export default HomePage;
