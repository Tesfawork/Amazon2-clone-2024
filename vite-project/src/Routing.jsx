import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/Auth/SignUp";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Orders from "./Pages/Order/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import Payment from "./Pages/Payment/Payment";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/results" element={<Results />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Routing;
