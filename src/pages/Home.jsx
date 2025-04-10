import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    minPrice: 0,
    maxPrice: 100000,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://freetestapi.com/api/v1/cars")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((car) => {
          return (
            (!filters.brand || car.make === filters.brand) &&
            (!filters.fuel || car.fuel_type === filters.fuel) &&
            car.price >= filters.minPrice &&
            car.price <= filters.maxPrice
          );
        });
        setCars(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch cars");
        setLoading(false);
      });
  }, [filters]);

  const carsToShow = cars.slice((page - 1) * 10, page * 10);

  return (
    <div className="p-4">
      <Filters filters={filters} setFilters={setFilters} />
      {loading ? (
        <p className="text-center mt-10">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {carsToShow.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <Pagination total={cars.length} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
