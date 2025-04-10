
// File: src/pages/Wishlist.jsx
import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadWishlist = () => {
      const data = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(data);
    };
    loadWishlist();
    window.addEventListener("wishlistUpdated", loadWishlist);
    return () => window.removeEventListener("wishlistUpdated", loadWishlist);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 dark:text-white">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center dark:text-gray-400">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
