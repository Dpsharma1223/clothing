"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function SearchBar({
  searchOpen,
  setSearchOpen,
}: {
  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;
}) {
  if (!searchOpen) return null;

  const products = [
    {
      name: "Long Sleeve Shirts",
      price: "€186,95",
      image: "/shop/s1.jpeg",
      rating: 4,
    },
    {
      name: "Wrapover Shirt Dress",
      price: "€128,95",
      image: "/shop/s2.jpeg",
      rating: 5,
    },
    {
      name: "Stand-Up Collar Blouse",
      price: "€115,95",
      image: "/shop/s3.jpeg",
      rating: 3,
    },
    {
      name: "Polo-Neck Body Dress",
      price: "€213,95",
      image: "/shop/s4.jpeg",
      rating: 4,
    },
    {
      name: "Long-Sleeve Cotton Coats",
      price: "€248,95",
      image: "/shop/s5.jpeg",
      rating: 5,
    },
  ];
  //image size: 1200x1600

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">
      <div className="flex flex-col relative p-6 py-16 inset-x-0 bg-primary top-0 mav-h-[80vh] z-51">
        <button
          onClick={() => setSearchOpen(false)}
          aria-label="Close Search"
          className="absolute right-5 top-5 text-md-grey "
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
              fill="currentColor"
            />
            <path
              d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center container mx-auto">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-3xl md:text-5xl font-medium text-center">
              Search Our Site
            </h2>
          </div>

          {/* Search Bar */}

          <form className="flex items-center border border-gray-300 rounded-full px-5 py-3 w-full max-w-3xl mx-auto mb-4">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full outline-none bg-transparent text-base"
            />
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
          </form>

          <p className="text-center flex flex-wrap justify-center items-center text-gray-500 mb-10 mx-3">
            <span className="whitespace-nowrap text-center">Quick Search:</span>
            <span className="text-black whitespace-nowrap font-medium ml-1 text-center">
              Shirt, Dress, Sweater
            </span>
          </p>
        </div>
        {/* Popular Products */}
        <h3 className="text-lg font-medium mb-4">Popular Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="rounded-xl object-cover w-full h-auto hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="mt-2 font-medium text-sm">{product.name}</p>
              <div className="flex items-center space-x-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.951-.69l1.285-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
