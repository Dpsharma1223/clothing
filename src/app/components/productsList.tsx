"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Heart, Check } from "lucide-react";

const colors = [
  "#000000",
  "#FFFFFF",
  "#724D2A",
  "#E0CDA9",
  "#775E4E",
  "#CFE1E5",
  "#1C2536",
  "#865439",
  "#E4C59E",
  "#90AFC5",
  "#336B87",
  "#2A3132",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const categories = [
  "Blazers",
  "Dresses",
  "Shirts",
  "Sportswear",
  "Sweaters",
  "Top T-shirt",
];
const tags = [
  "Fashion",
  "FashionTrends",
  "FashionWeek",
  "FormalWear",
  "HighFashion",
  "Style",
  "Trendy",
  "Vintage",
  "Womenswear",
];

const ProductCard = ({ product }: { product: any }) => (
  <div className="overflow-hidden group/card">
    <div className="relative overflow-hidden">
      <Link href="/">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={500}
        className="w-full rounded-lg object-cover hover:scale-110 transition-transform duration-700"
      />
      </Link>
      {product.isPreorder && (
        <div className="absolute top-3 left-3 bg-teal-500 text-white px-2 py-1 text-xs rounded">
          PRE-ORDER
        </div>
      )}
      <button className="absolute top-3 right-3 p-3 bg-white rounded-full">
        <Heart className="w-5 h-5 text-gray-600 hover:text-black" />
      </button>
      <Link href="/" className="absolute z-50 inset-x-0 bottom-4 opacity-0 group-hover/card:opacity-100 transition px-4">
                    <button className="bg-white/90 text-secondary font-semibold py-3 rounded-full shadow block w-full hover:bg-secondary hover:text-white transition">
                      Add To Cart
                    </button>
                  </Link>
    </div>
    <div className="p-3">
      <Link href="/" className="text-sm font-semibold text-gray-800 mb-1">
        {product.name}
      </Link>
      <div className="text-dark-grey mb-1">
        €{product.price.toFixed(2)}
      </div>
      <div className="flex space-x-1">
        {product.colors.map((color: string) => (
          <span
            key={color}
            className="w-5 h-5 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  </div>
);

const SidebarFilters = ({
  selectedFilters,
  toggleFilter,
}: {
  selectedFilters: any;
  toggleFilter: (key: string, value: string) => void;
}) => {
  return (
    <aside className="w-full lg:w-1/5 pr-6 space-y-6">
      <div className="border-b border-light-grey pb-5">
        <h3 className="text-2xl font-semibold mb-2">Collections</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                toggleFilter("categories", cat);
              }}
              className={`cursor-pointer px-2 py-0.5 rounded transition-all duration-150 ${
                selectedFilters.categories.includes(cat)
                  ? "bg-light-grey"
                  : "text-gray-800 hover:translate-x-3 transition-transform duration-500"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-b border-light-grey pb-5">
        <h3 className="text-2xl font-semibold mb-2">Availability</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedFilters.availability.includes("In stock")}
            onChange={() => toggleFilter("availability", "In stock")}
          />{" "}
          In stock
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedFilters.availability.includes("Out of stock")}
            onChange={() => toggleFilter("availability", "Out of stock")}
          />{" "}
          Out of stock
        </label>
      </div>

      <div className="border-b border-light-grey pb-5">
        <h3 className="text-2xl font-semibold mb-2">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedFilters.colors.includes(color)
                  ? "border-black"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => toggleFilter("colors", color)}
            >
              {selectedFilters.colors.includes(color) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-light-grey pb-5">
        <h3 className="text-2xl font-semibold mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`border px-3 py-1 text-sm rounded ${
                selectedFilters.sizes.includes(size)
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300"
              }`}
              onClick={() => toggleFilter("sizes", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-light-grey pb-5">
        <h3 className="text-2xl font-semibold mb-2">Tags</h3>
        <ul className="space-y-1">
          {tags.map((tag) => (
            <li key={tag}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.tags.includes(tag)}
                  onChange={() => toggleFilter("tags", tag)}
                />
                {tag}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const allProducts = [
  {
    id: 1,
    name: "Gathered-Sleeve Blazer",
    image: "/shop/s1.jpeg",
    price: 286.95,
    isPreorder: false,
    colors: ["#000000", "#FFFFFF"],
    sizes: ["M", "L"],
    category: "Blazers",
    tags: ["Fashion", "FormalWear"],
    availability: "In stock",
  },
  {
    id: 2,
    name: "Colorful Wind Coats",
    image: "/shop/s2.jpeg",
    price: 166.95,
    isPreorder: false,
    colors: ["#724D2A", "#E0CDA9"],
    sizes: ["S", "M"],
    category: "Shirts",
    tags: ["Trendy", "Style"],
    availability: "Out of stock",
  },
  // Add more products...
];

export default function ProductsList() {
  type FilterState = {
    colors: string[];
    sizes: string[];
    categories: string[];
    availability: string[];
    tags: string[];
  };

  const [filters, setFilters] = useState<FilterState>({
    colors: [],
    sizes: [],
    categories: [],
    availability: [],
    tags: [],
  });

  const toggleFilter = (key: string, value: string) => {
    setFilters((prev) => {
      const values = prev[key as keyof FilterState];
      if (!Array.isArray(values)) return prev;

      const updated =
        key === "categories"
          ? values.includes(value)
            ? []
            : [value]
          : values.includes(value)
          ? values.filter((v: string) => v !== value)
          : [...values, value];

      return { ...prev, [key]: updated };
    });
  };

  const filteredProducts = allProducts.filter((product) => {
    const colorMatch =
      filters.colors.length === 0 ||
      product.colors.some((c) => filters.colors.includes(c));
    const sizeMatch =
      filters.sizes.length === 0 ||
      product.sizes.some((s) => filters.sizes.includes(s));
    const catMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);
    const tagMatch =
      filters.tags.length === 0 ||
      product.tags.some((t) => filters.tags.includes(t));
    const availMatch =
      filters.availability.length === 0 ||
      filters.availability.includes(product.availability);
    return colorMatch && sizeMatch && catMatch && tagMatch && availMatch;
  });

  return (
    <div className=" py-10 bg-white">
      <div className="2xl:container 2xl:mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <SidebarFilters
            selectedFilters={filters}
            toggleFilter={toggleFilter}
          />
          <main className="w-full lg:w-3/4">
            <div className="mb-4 text-gray-600 text-sm">
              There are {filteredProducts.length} results in total
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
