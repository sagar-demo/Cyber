import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing";
import AddDevice from "./Components/AddDevice";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { Login } from "@mui/icons-material";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
