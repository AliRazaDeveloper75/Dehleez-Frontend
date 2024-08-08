import React, { useState } from "react";
import ecom1 from "../../../assets/images/Object1.png";
import Logo from "../../../assets/New folder/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import third from "../../../assets/New folder/Seller/Freq.png";
import second from "../../../assets/New folder/Seller/phone.png";
import first from "../../../assets/New folder/Seller/SellerPage.png";

const SellerSignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://39.61.51.195:8004/account/seller_register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phoneNumber,
          password: formData.password,
          passwordConfirm: formData.passwordConfirm,
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      alert("Registration successful");
      // Handle successful registration (e.g., redirect to login page)
      navigate("/SellerLoginPage");
    } else {
      alert("Registration failed: " + data.message);
      // Handle registration error
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
      <div className="flex flex-col lg:flex-row h-[100vh] justify-center items-center mb-5 bg-gradient-to-br from-blue-600 to-blue-400">
        <div className="hidden lg:flex flex-1 text-white p-5">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-5xl mt-4 font-bold mb-3">
              Seller on Pakistan's <br />
              Top Market Place
            </h1>
            <p>
              Create a Dehleez Seller Account in quick time and Access <br />
              Millions of Customers Today!
            </p>
            <img
              className="h-[200px] object-contain p-2 mt-5 self-start rotate-[65deg]"
              src={ecom1}
              alt="Ecom1"
            />
          </div>
        </div>
        <div className="flex-1 lg:flex-1.5 w-full lg:w-auto  rounded-2xl m-7 p-5 flex flex-col justify-center mt-5 bg-white">
          <h1 className="mb-2 text-2xl font-bold">Login With Password</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <input
                type="text"
                placeholder="UserName"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="phone"
              placeholder="Phone #."
              name="phoneNumber"
              value={formData.phoneNumber}
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
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md mb-4"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-right">
            Already have an Account
            <Link to="/SellerLoginPage" className="text-blue-600 ml-2">
              Login Here!
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
      </div>
      <div className="bg-blue-500 text-white pl-[3rem] pt-[3rem] pb-[3rem] font-bold text-4xl">
        <h1>
          What are you waiting for? <br />
          Start selling with Dehleez today.
        </h1>
      </div>
    </>
  );
};

export default SellerSignupPage;
