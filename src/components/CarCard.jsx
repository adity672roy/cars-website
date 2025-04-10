import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump, FaCogs, FaHeart, FaRegHeart } from 'react-icons/fa';

export default function CarCard({ car, toggleWishlist, isWished }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleWishlist(car)}
          className="absolute top-3 right-3 bg-white/70 dark:bg-gray-800/70 p-1.5 rounded-full text-red-500 hover:scale-110 transition"
          title="Add to Wishlist"
        >
          {isWished ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">
          {car.make} {car.model}
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          {car.year} • {car.fuelType} • {car.transmission}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold text-lg">
            ₹{car.price.toLocaleString()}
          </span>
          <Link
            to={`/car/${car.id}`}
            className="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded hover:bg-indigo-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
