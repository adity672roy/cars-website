import React from "react";

export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Brand"
        className="border px-2 py-1"
        value={filters.brand}
        onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fuel Type"
        className="border px-2 py-1"
        value={filters.fuel}
        onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
      />
      <input
        type="number"
        placeholder="Min Price"
        className="border px-2 py-1"
        value={filters.minPrice}
        onChange={(e) => setFilters({ ...filters, minPrice: +e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border px-2 py-1"
        value={filters.maxPrice}
        onChange={(e) => setFilters({ ...filters, maxPrice: +e.target.value })}
      />
    </div>
  );
}
