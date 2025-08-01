"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Search className="w-5 h-5" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 px-4 py-8 overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-semibold text-center mt-4 mb-6">
            Search Our Site
          </h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full border border-black/50 px-4 py-3 rounded-full pr-10 text-sm"
              />
              <Search className="absolute right-3 top-3 w-5 h-5 text-black" />
            </div>
          </div>

          {/* Quick Search */}
          <p className="text-center text-sm text-gray-600 mb-8">
            Quick Search:{" "}
            <span className="text-black font-medium">Shirt, Dress, Sweater</span>
          </p>

          {/* Popular Products */}
          <div className="px-4">
            <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Repeat for each product */}
              {Array.from({ length: 5 }).map((_, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl overflow-hidden p-3 text-center"
                >
                  <img
                    src="/product-placeholder.jpg"
                    alt="Product"
                    className="w-full h-auto mb-2"
                  />
                  <p className="text-sm font-medium">Product Name</p>
                  <p className="text-yellow-500 text-xs">★★★★★</p>
                  <p className="text-sm font-semibold mt-1">€123,45</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
