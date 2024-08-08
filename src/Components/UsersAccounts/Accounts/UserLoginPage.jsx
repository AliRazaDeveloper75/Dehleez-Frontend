import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ecom from "../../../assets/New folder/Ecom.png";
import ecom1 from "../../../assets/New folder/Ecom1.png";
import Logo from "../../../assets/New folder/Logo.png";
import { Link } from "react-router-dom";
import BottomBar from "../../BottomBar/BottomBar";
import Navbar from "../../Navbar/Navbar";

const UserLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const requestData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("http://39.61.51.195:8004/account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const data = await response.json();
        // Save user data (e.g., token) in localStorage or state management
        localStorage.setItem("user", JSON.stringify(data));
        // Navigate to user dashboard
        alert("Login Successfully..");
        navigate("/userdashboard");
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Login failed");
        alert("Email Password does not match.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center mb-5">
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-5 rounded-tr-2xl rounded-br-2xl flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <img
              className="h-20 object-contain p-2 self-start"
              src={ecom1}
              alt="Ecom1"
            />
            <h5 className="text-2xl mt-4">
              Shop Smart, Save More – Welcome to Dehleez
            </h5>
            <img
              className="h-[350px] object-contain mt-4 self-center"
              src={ecom}
              alt="Ecom"
            />
          </div>
        </div>
        <div className="flex-1 lg:flex-1.5 w-full lg:w-auto h-auto pl-5 pr-5 flex flex-col justify-center">
          <img src={Logo} alt="" className="w-[350px] pl-5 pt-2 pb-5" />
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <button className="w-full p-2 mt-3 bg-white text-blue-600 border border-blue-600 rounded-md flex items-center justify-center">
            <ion-icon name="logo-google" className="mr-2" />
            Sign up with Google
          </button>
          <button className="w-full p-2 mt-3 bg-blue-800 text-white rounded-md flex items-center justify-center">
            <ion-icon name="logo-facebook" className="mr-2" />
            Continue with Facebook
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/userReg" className="text-blue-600">
              Register
            </Link>
          </p>
          <p className="mt-4 text-center">
            By signing up you agree to the{" "}
            <a href="/terms" className="text-blue-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default UserLoginPage;
