import React, { useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';

export default function FilterBar({ filters, setFilters }) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ search: '', fuelType: '', sort: '' });
  };

  return (
    <>
    
      <div className="hidden md:grid bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6 grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by brand/model"
          className="p-2 rounded border w-full dark:text-black"
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
        />
        <select
          className="p-2 dark:text-black rounded border"
          value={filters.fuelType}
          onChange={(e) => updateFilter('fuelType', e.target.value)}
        >
          <option value="">All Fuel Types</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
        </select>
        <select
          className="p-2 dark:text-black rounded border"
          value={filters.sort}
          onChange={(e) => updateFilter('sort', e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <button className="bg-red-500 text-white px-3 py-2 rounded" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

     
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded shadow"
        >
          <FaFilter /> Filters
        </button>
      </div>

      
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex">
         
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowMobileFilters(false)}
          ></div>

     
          <div className="relative bg-white dark:bg-gray-900 w-72 h-full p-5 shadow-lg transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)}>
                <FaTimes className="text-xl text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search by brand/model"
                className="p-2 w-full rounded border dark:text-black"
                value={filters.search}
                onChange={(e) => updateFilter('search', e.target.value)}
              />
              <select
                className="p-2 w-full rounded border dark:text-black"
                value={filters.fuelType}
                onChange={(e) => updateFilter('fuelType', e.target.value)}
              >
                <option value="">All Fuel Types</option>
                <option value="Gasoline">Gasoline</option>
                <option value="Electric">Electric</option>
              </select>
              <select
                className="p-2 w-full rounded border dark:text-black"
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
              >
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
              <button
                className="w-full bg-red-500 text-white px-3 py-2 rounded"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
