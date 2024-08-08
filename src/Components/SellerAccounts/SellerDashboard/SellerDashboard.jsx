import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SellerContext } from "../Accounts/SellerContext";
import ProductsList from "../Products/ProductsList/ProductsList";

const SellerDashboard = () => {
  const { seller } = useContext(SellerContext);

  useEffect(() => {
    if (seller) {
      console.log("Seller Data in Dashboard", seller);
    }
  }, [seller]);

  return (
    <div className="bg-black text-white text-center align-bottom w-full ">
      <h1 className="text-5xl cursor-pointer hover:underline">
        Seller Dashboard Page
      </h1>
      {seller && seller.seller ? (
        <>
          <div className="pt-5">
            <h2 className="text-2xl">
              Welcome, {seller.seller.first_name || "N/A"}{" "}
              {seller.seller.last_name || "N/A"}
            </h2>
            <p>Email: {seller.seller.email || "N/A"}</p>
            <p>Phone Number: {seller.seller.phone_number || "N/A"}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="pt-5">
        <Link
          to={`/add-products`}
          className="inline-block p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Products
        </Link>
      </div>
      <div className="pt-5 pb-5">
        <div className="bg-white h-1 w-full"></div>
      </div>
      <ProductsList />
    </div>
  );
};

export default SellerDashboard;
