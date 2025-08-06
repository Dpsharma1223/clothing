"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// Example product shape
interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  inStock: boolean;
  color: string; // e.g. "brown", "blue", "black", etc.
  sizeOptions: string[]; // e.g. ["S","M","L"]
  tags: string[]; // e.g. ["Fashion", "Luxury"]
}

const productsData: Product[] = [
  {
    id: 1,
    title: "Balloon‑Sleeved Dress",
    image: "/products/product1.jpeg",
    price: "€105,95",
    inStock: true,
    color: "blue",
    sizeOptions: ["S", "M", "L"],
    tags: ["Fashion", "Womenswear"],
  },
  {
    id: 2,
    title: "Colorful Wind Coats",
    image: "/products/product2.jpeg",
    price: "€157,95",
    inStock: true,
    color: "brown",
    sizeOptions: ["M", "L", "XL"],
    tags: ["FashionTrends"],
  },
  {
    id: 3,
    title: "Cotton Button‑Up Shirt",
    image: "/products/product3.jpeg",
    price: "€131,95",
    inStock: false,
    color: "black",
    sizeOptions: ["S", "M"],
    tags: ["FormalWear"],
  },
  // Add more sample products ...
];

export default function ProductsList() {
  // Filter state
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Helper to toggle selection
  const toggle = (value: string, arr: string[], setFn: any) =>
    arr.includes(value)
      ? setFn(arr.filter((v) => v !== value))
      : setFn([...arr, value]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      if (onlyInStock && !product.inStock) return false;
      if (selectedColors.length && !selectedColors.includes(product.color)) return false;
      if (
        selectedSizes.length &&
        !product.sizeOptions.some((s) => selectedSizes.includes(s))
      )
        return false;
      if (selectedTags.length && !product.tags.some((t) => selectedTags.includes(t)))
        return false;
      return true;
    });
  }, [onlyInStock, selectedColors, selectedSizes, selectedTags]);

  return (
    <div className="py-6 bg-white px-4">
        <div className="2xl:container 2xl:mx-auto flex gap-6">
      {/* Sidebar Filters */}
      <aside className="w-64 flex-shrink-0 space-y-6">
        <div>
          <h2 className="font-semibold">Collections</h2>
          <ul className="mt-2 space-y-1">
            {["Blazers", "Dresses", "Shirts", "Sweaters", "Top T-shirt"].map((c) => (
              <li key={c}>
                <button className="text-left text-gray-700 hover:underline">{c}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mt-4">Availability</h2>
          <label className="inline-flex items-center mt-1">
            <input type="checkbox" className="form-checkbox" checked={onlyInStock}
              onChange={() => setOnlyInStock((v) => !v)} />
            <span className="ml-2 text-gray-700">In stock</span>
          </label>
        </div>

        <div>
          <h2 className="font-semibold mt-4">Color</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["blue", "brown", "black", "gray", "white"].map((clr) => (
              <button
                key={clr}
                onClick={() => toggle(clr, selectedColors, setSelectedColors)}
                className={`w-6 h-6 rounded-full border ${clr === "white" ? "bg-white" : `bg-${clr}-500`} ${selectedColors.includes(clr) ? "ring-2 ring-black" : ""}`}
                aria-label={clr}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mt-4">Size</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((sz) => (
              <button
                key={sz}
                onClick={() => toggle(sz, selectedSizes, setSelectedSizes)}
                className={`px-2 py-1 border rounded ${selectedSizes.includes(sz) ? "bg-gray-800 text-white" : "text-gray-700"}`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mt-4">Tags</h2>
          <ul className="mt-2 space-y-1">
            {["Fashion", "FashionTrends", "FashionWeek", "FormalWear", "Luxury", "Style", "Vintage", "Womenswear"].map((tag) => (
              <li key={tag}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggle(tag, selectedTags, setSelectedTags)}
                  />
                  <span className="ml-2 text-gray-700">{tag}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="mb-4 text-gray-600">
          {filteredProducts.length === 0
            ? "There are no results"
            : `There are ${filteredProducts.length} results in total`}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="border rounded-lg overflow-hidden relative group">
              <Link href={`/products/${p.id}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={500}
                  className="object-cover w-full h-64 group-hover:opacity-90 transition"
                />
              </Link>
              <div className="p-4 space-y-1">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-gray-600">{p.price}</p>
              </div>
              {/* Wishlist icon */}
              <div className="absolute top-2 right-2 text-gray-800">
                <button>♡</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
