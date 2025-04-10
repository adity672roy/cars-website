import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/cars")
      .then((res) => res.json())
      .then((data) => setCar(data.find((c) => c.id === +id)));
  }, [id]);

  if (!car) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={car.image_url || "https://via.placeholder.com/500x300"} alt={car.model} className="w-full max-w-md mx-auto" />
      <h1 className="text-2xl font-bold mt-4 dark:text-white">{car.model}</h1>
      <p className="dark:text-gray-300">Brand: {car.make}</p>
      <p className="dark:text-gray-300">Fuel Type: {car.fuel_type}</p>
      <p className="dark:text-gray-300">Seating Capacity: {car.seating_capacity || "N/A"}</p>
      <p className="dark:text-gray-300">Price: ₹{car.price?.toLocaleString() || "N/A"}</p>
    </div>
  );
}
