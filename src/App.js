import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/Home/HeroSection";
import ProductDetails from "./pages/ProductDetails";
import ShopDetails from "./pages/ShopDetails";
import Shops from "./pages/Shops";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shopdetails/:id" element={<ShopDetails />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
