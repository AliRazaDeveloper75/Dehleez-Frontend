import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import About from "./Components/Pages/About/About";
import UserLoginPage from "./Components/UsersAccounts/Accounts/UserLoginPage";
import UserSignupPage from "./Components/UsersAccounts/Accounts/UserSignupPage";
import SellerLoginPage from "./Components/SellerAccounts/Accounts/SellerLoginPage";
import ForgotPassword from "./Components/SellerAccounts/Accounts/ForgotPassword";
import SellerSignupPage from "./Components/SellerAccounts/Accounts/SellerSignupPage";
import SellerDashboard from "./Components/SellerAccounts/SellerDashboard/SellerDashboard";
import UserDashboard from "./Components/UsersAccounts/Dashboard/UserDashboard";
import AddProduct from "./Components/SellerAccounts/Products/AddProducts/AddProduct";
import DeleteProducts from "./Components/SellerAccounts/Products/DeleteProducts/DeleteProducts";
import { SellerProvider } from "./Components/SellerAccounts/Accounts/SellerContext";

const App = () => {
  return (
    <>
      <SellerProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Dehleez-Frontend" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            {/* User Accounts URLS */}
            <Route path="/userLogin" element={<UserLoginPage />} />
            <Route path="/userReg" element={<UserSignupPage />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            {/* Seller Accounts URLS */}
            <Route path="/SellerLoginPage" element={<SellerLoginPage />} />
            <Route path="/seller-signup" element={<SellerSignupPage />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/add-products" element={<AddProduct />} />
            <Route path="/delete-products" element={<DeleteProducts />} />
          </Routes>
          {/* <BottomBar/> */}
        </Router>
      </SellerProvider>
    </>
  );
};

export default App;


