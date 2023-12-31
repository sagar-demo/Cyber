import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing/Pricing";
import AddDevice from "./Components/AddDevice/AddDevice";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from './Login/Login'
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/adddevice" element={<AddDevice />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
