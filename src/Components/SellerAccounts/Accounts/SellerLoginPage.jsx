import React, { useState, useContext } from "react";
import ecom1 from "../../../assets/images/Object1.png";
import Logo from "../../../assets/New folder/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SellerContext } from "./SellerContext";
import "./Loading.css";

const SellerLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { setSeller } = useContext(SellerContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation
    const response = await fetch(
      "http://39.61.51.195:8004/account/seller_login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }
    );

    const data = await response.json();
    setLoading(false); // Stop loading animation
    if (response.ok) {
      alert("Login successful");
      console.log("Seller Data", data); // Verify the data here
      setSeller(data); // Store seller data in context
      navigate("/seller-dashboard");
    } else {
      alert("Login failed: " + data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center bg-white p-1">
        <div className="hidden lg:flex flex-1 text-black p-5">
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </div>
        <div className="hidden lg:flex flex-row p-5 items-center space-x-5">
          <div className="flex flex-col">
            <select
              id="country"
              name="country"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="pakistan">Pakistan</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select
              id="language"
              name="language"
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="english">English</option>
              <option value="urdu">Urdu</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-5 bg-gradient-to-br from-blue-600 h-[100vh] to-blue-400">
        <div className="hidden lg:flex flex-1 text-white p-5">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl mt-4 font-bold mb-3">
              Seller on Pakistan's <br /> Top Market Place
            </h1>
            <p>
              Create a Dehleez Seller Account in quick time and Access <br />{" "}
              Millions of Customers Today!
            </p>
            <img
              className="h-[200px] object-contain p-2 mt-5 self-start rotate-[65deg]"
              src={ecom1}
              alt="Ecom1"
            />
          </div>
        </div>
        <div className="flex-1 lg:flex-1.5 w-full lg:w-auto h-auto rounded-2xl m-7 p-5 flex flex-col justify-center bg-white">
          <h1 className="mb-2 text-2xl font-bold">Login With Password</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md mb-4"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
            >
              {loading ? <div className="spinner"></div> : "Login"}
            </button>
          </form>
          <p className="mt-4 text-right">
            <Link to="/forgot-password" className="text-blue-600">
              Reset Password
            </Link>
          </p>
          <p className="mt-4 text-right">
            <Link to="/seller-signup" className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerLoginPage;
