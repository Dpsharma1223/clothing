"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { categories, products } from "../../../public/data/categories";

const TopOffers = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredProducts =
    activeCategory === "All Items"
      ? products
      : products.filter((item) => item.tags.includes(activeCategory));

  return (
    <section className="py-20 px-6 bg-white">
      <div className="2xl:container 2xl:mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold">Top Offers</h2>
        <p className="text-dark-grey mt-2">
          Our products are designed for everyone, environmentally friendly.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-2.5 uppercase rounded-full text-xs font-medium transition ${
              activeCategory === category
                ? "bg-red text-white"
                : "bg-light-grey/50 hover:bg-light-grey"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white">
            {/* PRE-ORDER label */}
            {product.preOrder && (
              <span className="absolute top-4 left-4 bg-tag text-white text-[0.65rem] z-10 font-medium px-2.5 py-1 rounded">
                PRE-ORDER
              </span>
            )}

            {/* Product Image */}
            <Link href={`/product/${product.id}`}>
              <div className="relative group/card rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={400}
                  className="w-full object-cover"
                />

                {/* Wishlist button */}
                <Link
                  href="/"
                  className="absolute right-4 top-9 -translate-y-1/2 flex flex-col gap-2"
                >
                  <button className="w-10 h-10 bg-white text-secondary hover:text-white hover:bg-secondary transition-colors duration-500 rounded-full flex items-center justify-center text-lg shadow">
                    <Heart className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </Link>

                {/* Add to Cart (on hover) */}
                <div className="absolute inset-x-0 bottom-4 opacity-0 group-hover/card:opacity-100 transition px-4">
                  <button className="bg-white/90 text-secondary font-semibold py-3 rounded-full shadow block w-full hover:bg-secondary hover:text-white transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="text-sm font-medium">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price}</p>

              {/* Colors */}
              <div className="flex gap-1 mt-2">
                {product.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default TopOffers;
