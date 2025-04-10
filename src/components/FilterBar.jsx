// File: src/components/FilterBar.jsx
import React from 'react';

export default function FilterBar({ filters, setFilters }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6 grid md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Search by brand/model"
        className="p-2 rounded border w-full dark:text-black"
        value={filters.search}
        onChange={(e) => updateFilter('search', e.target.value)}
      />
      <select className="p-2 dark:text-black rounded border" onChange={(e) => updateFilter('fuelType', e.target.value)}>
        <option value="">All Fuel Types</option>
        <option value="Gasoline">Gasoline</option>
        <option value="Electric">Electric</option>
      </select>
      <select className="p-2 dark:text-black rounded border" onChange={(e) => updateFilter('sort', e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <button
        className="bg-red-500 text-white px-3 py-2 rounded"
        onClick={() => setFilters({ search: '', fuelType: '', sort: '' })}
      >
        Clear Filters
      </button>
    </div>
  );
}
