"use client";

import Image from "next/image";
import Link from "next/link";

export default function ShopHero() {
  return (
    <section className="w-full bg-white pt-20">
      <div className="relative bg-[url(/banners/shopbanner.jpeg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white py-14">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Shop</h1>
          <nav className="text-sm md:text-base opacity-80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-1">›</span>
            <span>Shop</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
