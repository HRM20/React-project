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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"Home"} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
