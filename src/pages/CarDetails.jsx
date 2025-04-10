// File: src/pages/CarDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch('/cars.json');
        const data = await response.json();
        const found = data.find((c) => c.id.toString() === id);
        setCar(found);
      } catch (error) {
        console.error('Error loading car details:', error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) return <p className="p-6">Loading car details...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded shadow">
      <img src={car.image} alt={car.make} className="w-full h-80 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{car.make} {car.model} ({car.year})</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{car.color} • {car.transmission} • {car.fuelType}</p>
      <p className="mt-2 font-bold text-indigo-600 dark:text-indigo-400">${car.price}</p>
      <ul className="mt-4 list-disc pl-6">
        {car.features.map((f, idx) => <li key={idx}>{f}</li>)}
      </ul>
    </div>
  );
}
