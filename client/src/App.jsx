import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashBoard from "./pages/SellerdashBoard";
import BuyerDash from "./pages/BuyerDash";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      {/* <h1 className="text-yellow-500">Aditya</h1> */}

      <BrowserRouter>
        <Nav />
        {/* it give nav components on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashBoard />} />
          <Route path="/buyer/profile" element={<BuyerDash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
