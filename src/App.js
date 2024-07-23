import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import CategoryBar from "./Components/Navbar/CategoryBar";
import BottomBar from "./Components/BottomBar/BottomBar";
import About from "./Components/Pages/About/About";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <CategoryBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <BottomBar/>
      </Router>
    </>
  );
};

export default App;
