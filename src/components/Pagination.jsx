import React from "react";

export default function Pagination({ total, page, setPage }) {
  const pages = Math.ceil(total / 10);
  return (
    <div className="flex justify-center gap-2 mt-4">
      {[...Array(pages)].map((_, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 rounded ${
            idx + 1 === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
