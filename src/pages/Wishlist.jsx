// File: src/pages/Wishlist.jsx
import React, { useState, useEffect } from 'react';
import { getWishlist, toggleWishlistItem } from '../utils/localStorageUtils';
import CarCard from '../components/CarCard';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const toggleWishlist = (car) => {
    const updated = toggleWishlistItem(car);
    setWishlist(updated);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              toggleWishlist={toggleWishlist}
              isWished={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
