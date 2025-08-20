// src/app/brands/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type Brand = {
  name: string;
  website: string;
};

const brands: Brand[] = [
  { name: "Apple", website: "https://www.apple.com" },
  { name: "Adobe", website: "https://www.adobe.com" },
  { name: "Amazon", website: "https://www.amazon.com" },
  { name: "BMW", website: "https://www.bmw.com" },
  { name: "Coca-Cola", website: "https://www.coca-cola.com" },
  { name: "Dell", website: "https://www.dell.com" },
  { name: "Google", website: "https://www.google.com" },
  { name: "Microsoft", website: "https://www.microsoft.com" },
  { name: "Nike", website: "https://www.nike.com" },
  { name: "Samsung", website: "https://www.samsung.com" },
  { name: "Tesla", website: "https://www.tesla.com" },
  { name: "Zoom", website: "https://zoom.us" },
];

const alphabet = [
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","O","P","Q","R",
  "S","T","U","V","W","X","Y","Z","#",
];

export default function BrandsPage() {
  const [activeLetter, setActiveLetter] = useState<string>("ALL");

  const filteredBrands =
    activeLetter === "ALL"
      ? brands
      : brands.filter((brand) =>
          /^[A-Z]/.test(brand.name)
            ? brand.name.startsWith(activeLetter)
            : activeLetter === "#"
        );

  return (
    <div className="bg-white px-4 py-15">
        <div className="2xl:container 2xl:mx-auto">
      {/* Page Title */}
      <h1 className="text-5xl font-semibold text-center mb-4">Brands</h1>
      <p className="text-center text-dark-grey mb-7">
        Browse our collection of brands alphabetically
      </p>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-3 py-18 border-b border-light-grey mb-5">
        <button
          onClick={() => setActiveLetter("ALL")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
            activeLetter === "ALL"
              ? "bg-black text-white"
              : "border border-light-grey text-dark-grey hover:bg-light-grey/50"
          }`}
        >
          Show All
        </button>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter)}
            className={`px-6 py-2.5 flex items-center justify-center rounded-full text-sm font-medium transition ${
              activeLetter === letter
                ? "bg-black text-white"
                : "border border-light-grey text-dark-grey hover:bg-light-grey/50"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Brands List */}
      <div className="pb-12">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-40 py-4"
            >
              <span className="text-4xl font-medium">{brand.name[0]}</span>
              <Link
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-tag transition"
              >
                {brand.name}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center py-8 text-dark-grey">No brands found.</p>
        )}
      </div>
      </div>
    </div>
  );
}
