import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage'



const App = () => {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
