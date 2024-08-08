import React, { useState } from "react";
import ecom from "../../../assets/New folder/Ecom.png";
import ecom1 from "../../../assets/New folder/Ecom1.png";
import { Link, useNavigate } from "react-router-dom";
import BottomBar from "../../BottomBar/BottomBar";
import Navbar from "../../Navbar/Navbar";
import { registerUser } from "../../Api/Api";
import GoogleLogin from "react-google-login";

const UserSignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, name, email, phone, password, passwordConfirm } = formData;

    const requestData = {
      email,
      first_name: firstName,
      last_name: lastName,
      name,
      phone_number: phone,
      password,
      passwordConfirm,
    };

    try {
      const result = await registerUser(requestData);
      if (result && result.id) {
        console.log("Registration successful");
        alert("Registration successful");
        navigate("/userLogin");
      } else {
        console.error("Registration failed:", result);
        alert("Registration failed: " + (result.error || JSON.stringify(result)));
      }
    } catch (error) {
      const errorMessage = error.response?.data ? JSON.stringify(error.response.data) : error.message;
      console.error("Registration error:", errorMessage);
      alert("Registration error: " + errorMessage);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) {
      console.log("Google login successful:", response.profileObj);
      // Handle the response from Google login here
    } else {
      console.error("Google login failed:", response);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center mb-5">
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-400 text-white p-5 rounded-tr-2xl rounded-br-2xl flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <img className="h-20 object-contain p-2 self-start" src={ecom1} alt="Ecom1" />
            <h5 className="text-2xl mt-4">Shop Smart, Save More – Welcome to Dehleez</h5>
            <img className="h-[350px] object-contain mt-4 self-center" src={ecom} alt="Ecom" />
          </div>
        </div>
        <div className="flex-1 lg:flex-1.5 w-full lg:w-auto h-auto pl-5 pr-5 flex flex-col justify-center">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="User Name"
                name="name"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone No"
              name="phone"
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={formData.phone}
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
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirm"
              className="p-2 border border-gray-300 rounded-md mb-4"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <GoogleLogin
            clientId="845031891099-mjmpgjbl978fcil9u8joju3suhm26j94.apps.googleusercontent.com"
            className="w-full p-2 mt-3 text-blue border border-black-600 rounded-md flex hover:bg-green-400 cursor-pointer items-center justify-center"
            buttonText="Signup with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <p className="mt-2 text-center">
            Already have an account?{" "}
            <Link to="/userLogin" className="text-blue-600">
              Login
            </Link>
          </p>
          <p className="mt-2 text-center">
            By signing up you agree to the{" "}
            <Link to="/terms" className="text-blue-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default UserSignupPage;
