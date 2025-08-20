"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolios } from "../../../public/data/portfolio"; 

const categories = [
  "All",
  "Branding",
  "Graphic Design",
  "Marketing",
  "Photography",
  "Web Design",
];

export default function PortfolioLists() {
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredItems =
    activeCategory === "All"
      ? portfolios
      : portfolios.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-white">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-3xl max-w-4xl md:text-[2.7em] leading-snug mb-4">
          Hi, I’m Rokan. Building Digital Products, Brands.
        </h1>
        <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed">
          We help our clients succeed by creating identities, digital experiences, and print
          materials that communicate clearly, achieve marketing goals, and look fantastic.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`uppercase text-sm tracking-wide ${
              activeCategory === cat
                ? "font-semibold border-b border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 container mx-auto space-y-6">
        {filteredItems.map((item) => (
          <div className="relative group overflow-hidden rounded-xl break-inside-avoid">
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className=""
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            </Link>
            <div className="absolute h-fit bottom-0 inset-x-0 hidden rounded-b-xl bg-black/10 backdrop-blur-sm group-hover:flex flex-col justify-center p-5">
              <button className="text-xs font-medium bg-white rounded-md px-3 py-0.5 w-fit uppercase mb-2">
                {item.category}
              </button>
              <p className="text-xl text-white font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
