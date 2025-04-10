// File: src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { getWishlist, toggleWishlistItem } from '../utils/localStorageUtils';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ search: '', fuelType: '', sort: '' });
  const [wishlist, setWishlist] = useState(getWishlist());
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/cars.json');
        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars
    .filter((car) =>
      (car.make + car.model).toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.fuelType ? car.fuelType === filters.fuelType : true)
    )
    .sort((a, b) =>
      filters.sort === 'asc' ? a.price - b.price :
      filters.sort === 'desc' ? b.price - a.price : 0
    );

  const carsToShow = filteredCars.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filteredCars.length / perPage);

  const toggleWishlist = (car) => {
    const updated = toggleWishlistItem(car);
    setWishlist(updated);
  };

  if (loading) return <div className="p-6 text-center">Loading cars...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <FilterBar filters={filters} setFilters={setFilters} />
      {carsToShow.length === 0 ? (
        <p className="text-center text-gray-500">No cars match your filters.</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsToShow.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                toggleWishlist={toggleWishlist}
                isWished={wishlist.some((w) => w.id === car.id)}
              />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
}
