import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import HomePage from "./HomePage";
import Login from "./Login";
import Mens from "./Mens";
import ProductPage from "./ProductPage";
import { Signup } from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AllRoutes;
