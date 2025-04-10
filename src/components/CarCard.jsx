 import React from 'react';
import { Link } from 'react-router-dom';

export default function CarCard({ car, toggleWishlist, isWished }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition hover:shadow-lg">
      <img src={car.image} alt={`${car.make} ${car.model}`} className="rounded w-full h-48 object-cover" />
      <h2 className="mt-2 font-semibold text-lg">{car.make} {car.model}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{car.year} • {car.fuelType} • {car.transmission}</p>
      <p className="mt-1 font-bold text-indigo-600 dark:text-indigo-300">${car.price}</p>
      <div className="flex justify-between items-center mt-3">
        <Link
          to={`/car/${car.id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          View Details
        </Link>
        <button
          onClick={() => toggleWishlist(car)}
          className="text-red-500 text-xl"
        >
          {isWished ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}
