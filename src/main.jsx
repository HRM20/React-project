import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Card from "./Card.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Contact from "./assets/Contact.jsx";
import Login from "./login.jsx";
import SignUp from "./SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* ریدایرکت از / به /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* مسیرهای اصلی */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* نمایش جزئیات محصول */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* صفحه 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
