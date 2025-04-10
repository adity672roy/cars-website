import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FaGasPump,
  FaCogs,
  FaPalette,
  FaMoneyBillWave,
  FaHeart,
  FaRegHeart,
} from 'react-icons/fa';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch('/cars.json');
        const data = await response.json();
        const found = data.find((c) => c.id.toString() === id);
        setCar(found);

        // Check wishlist status from localStorage
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (found && wishlist.some((item) => item.id === found.id)) {
          setIsWished(true);
        }
      } catch (error) {
        console.error('Error loading car details:', error);
      }
    };

    fetchCar();
  }, [id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (isWished) {
      const updated = wishlist.filter((item) => item.id !== car.id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      setIsWished(false);
    } else {
      wishlist.push(car);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWished(true);
    }
  };

  if (!car) return <p className="p-6 text-center text-gray-500">Loading car details...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg mt-6">
      {/* Banner */}
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-[400px] object-cover rounded-xl shadow"
        />
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-xl font-semibold">
          {car.make} {car.model} <span className="text-sm text-gray-300">({car.year})</span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/70 p-2 rounded-full text-red-500 hover:scale-110 transition"
          title="Add to Wishlist"
        >
          {isWished ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </button>
      </div>

      {/* Info Section */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
              <FaPalette className="text-indigo-500" /> Color: {car.color}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
              <FaCogs className="text-indigo-500" /> Transmission: {car.transmission}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
              <FaGasPump className="text-indigo-500" /> Fuel: {car.fuelType}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
              <FaMoneyBillWave className="text-indigo-500" /> Price: ₹{car.price.toLocaleString()}
            </div>
          </div>

          <button className="mt-6 inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition shadow-md">
            Book a Test Drive
          </button>
        </div>

        {/* Price Highlight */}
        <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-6 shadow text-center">
          <p className="text-gray-500 text-sm mb-1">Ex-showroom Price</p>
          <p className="text-3xl font-bold text-indigo-700 dark:text-white">
            ₹{car.price.toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 mt-2">* Prices may vary based on location</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Key Features</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-700 dark:text-gray-300">
          {car.features.map((feature, index) => (
            <li
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md before:content-['✔'] before:text-green-500 before:mr-2"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
