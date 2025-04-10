import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const toggleWishlist = () => {
    const exists = wishlist.some((c) => c.id === car.id);
    const updated = exists
      ? wishlist.filter((c) => c.id !== car.id)
      : [...wishlist, car];
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
      <img src={car.image_url || "https://via.placeholder.com/300x150"} alt={car.model} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2 dark:text-white">{car.model}</h2>
      <p className="text-sm dark:text-gray-300">{car.make} | {car.fuel_type}</p>
      <p className="text-sm dark:text-gray-300">₹{car.price?.toLocaleString() || 'N/A'}</p>
      <div className="flex justify-between mt-3">
        <button
          className="text-blue-500"
          onClick={() => navigate(`/car/${car.id}`)}
        >
          View Details
        </button>
        <button
          className="text-red-500"
          onClick={toggleWishlist}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
