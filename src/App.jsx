// File: src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}
