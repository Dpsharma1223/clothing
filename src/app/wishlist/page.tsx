// src/app/wishlist/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
  rating: number;
  colors: string[];
  badge?: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Wrapover Shirt Dress",
    price: "€126,95",
    image: "/shop/s1.jpeg",
    link: "/products/wrapover-shirt-dress",
    rating: 5,
    colors: ["#000000", "#f5c7d9"],
  },
  {
    id: 2,
    name: "Stand-Up Collar Blouse",
    price: "€113,95",
    image: "/shop/s2.jpeg",
    link: "/products/stand-up-collar-blouse",
    rating: 5,
    colors: ["#c3d8f5", "#000000"],
  },
  {
    id: 3,
    name: "Polo-Neck Body Dress",
    price: "€209,95",
    image: "/shop/s3.jpeg",
    link: "/products/polo-neck-body-dress",
    rating: 5,
    colors: ["#5fe1dc", "#5b3b2e", "#000000"],
    badge: "Pre-order",
  },
];

export default function WishlistPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const removeFromWishlist = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-white px-4 py-15 pb-25">
      <div className="2xl:container 2xl:mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-semibold text-center mb-2">Wishlist</h1>

        {/* Breadcrumb */}
        <nav className="flex justify-center items-center text-sm mb-15">
          <Link href="/" className="hover:text-md-grey">
            Home
          </Link>{" "}
          &nbsp;
          <span className="text-lg">›</span> &nbsp;
          <Link href="/" className="hover:text-md-grey">
            Pages
          </Link>{" "}
          &nbsp;
          <span className="text-lg">›</span> &nbsp;
          <span className="text-dark-grey">Wishlist</span>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white">
              {/* PRE-ORDER label */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-teal-600 text-white text-[0.65rem] z-10 font-medium px-2.5 py-1 rounded">
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              <Link href={product.link}>
                <div className="relative group/card rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full object-cover"
                  />

                  {/* Cross (Remove) button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute right-4 top-4 w-10 h-10 bg-white text-gray-600 hover:text-white hover:bg-light-grey transition-colors duration-300 rounded-full flex items-center justify-center"
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </button>

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
                <h3 className="text-sm font-medium">{product.name}</h3>
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

          {products.length === 0 && (
            <p className="text-center text-lg col-span-full">
              No products were added to the wishlist page. <Link href="/shopPage" className="underline underline-offset-4"> Back to shopping</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

