"use client";

import React from "react";
import Link from "next/link";

const SaleBanner = () => {
  return (
    <section className="bg-white pb-12">
    <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
                src="/banners/sales.jpg"
                alt="Sales Banner"
                className="w-full h-full object-cover object-center"
             />
        </div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-26 h-[400px] md:h-[500px] min-[1200px]:h-[600px]">
        <div className="flex flex-col justify-center md:max-w-lg items-center text-center px-4 md:px-7">
          <p className="text-sm font-semibold tracking-wide uppercase mb-2">
            SALE 50% OFF ALL DRESSES
          </p>
          <h2 className="text-4xl md:text-5xl min-[1200px]:text-6xl mb-4">Special Offers</h2>
          <p className="text-dark-grey mb-9">
            Get these deals before they're gone! Save big on end-of-season and
            limited-edition colors in our most popular products.
          </p>
          <Link href="/sales" className="bg-black text-white px-14 py-4 text-xs border border-black rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-500">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SaleBanner;
