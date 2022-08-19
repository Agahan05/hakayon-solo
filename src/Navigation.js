import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPages from "./Pages/MainPages";
import Navbar from "./components/Navbar";
import ClientProvider from "./context/ClientProvider";
import AllProductsPages from "./Pages/AllProductsPages";
import AboutPages from "./Pages/AboutPages";
import SupportPages from "./Pages/SupportPages";
import BasketPages from "./Pages/BasketPages";

function Navigation() {
  return (
    <ClientProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/products/:category" element={<AllProductsPages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/support" element={<SupportPages />} />
          <Route path="/basket" element={<BasketPages />} />
        </Routes>
      </BrowserRouter>
    </ClientProvider>
  );
}

export default Navigation;
