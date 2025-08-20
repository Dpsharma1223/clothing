"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Heart } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import type { NavigationOptions } from "swiper/types";


const products = [
  {
    id: 1,
    title: "Gathered-Sleeve Blazer",
    price: "€288,95",
    image: "/shop/s1.jpeg",
    colors: ["#d2c9bb", "#000000"],
    preOrder: false,
  },
  {
    id: 2,
    title: "Colorful Wind Coats",
    price: "€157,95",
    image: "/shop/s2.jpeg",
    colors: ["#5a3828", "#d2c9bb", "#000000"],
    preOrder: false,
  },
  {
    id: 3,
    title: "Short Sleeve Sweater",
    price: "€87,95",
    image: "/shop/s3.jpeg",
    colors: ["#d2c9bb", "#5a3828"],
    preOrder: false,
  },
  {
    id: 4,
    title: "Long Sleeve Shirts",
    price: "€183,95",
    image: "/shop/s4.jpeg",
    colors: ["#5a3828", "#00736e"],
    preOrder: true,
  },
  {
    id: 5,
    title: "Short Sleeve Sweater",
    price: "€87,95",
    image: "/shop/s3.jpeg",
    colors: ["#d2c9bb", "#5a3828"],
    preOrder: false,
  },
];

export default function BestSellers() {

    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      const navigation = swiperRef.current.params.navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
  
      if (
        swiperRef.current.navigation &&
        typeof swiperRef.current.navigation.init === "function" &&
        typeof swiperRef.current.navigation.update === "function"
      ) {
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);
  return (
    <section className="pb-6 xs:pb-9 md:pb-22 md:pt-5 bg-white px-4">
      <div className="container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
        Our Bestsellers 
        </h2>
        <p className="text-gray-500 text-sm">
        Unmatched design—superior performance and customer satisfaction in one.
        </p>
      </div>
      <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="group mySwiper w-full peer"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div className="group relative bg-white">
              {/* PRE-ORDER label */}
              {product.preOrder && (
                <span className="absolute top-4 left-4 bg-tag text-white text-[0.65rem] z-2 font-medium px-2.5 py-1 rounded">
                  PRE-ORDER
                </span>
              )}

              {/* Image */}
              <Link href={`/product/${product.id}`}>
                <div className="relative group/card rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={400}
                    className="w-full object-cover"
                  />

                  <button className="absolute right-4 top-9 -translate-y-1/2 flex flex-col gap-2"
                  >
                    <div className="w-10 h-10 bg-white text-secondary hover:text-white hover:bg-secondary transition-colors duration-500 rounded-full flex items-center justify-center text-lg shadow">
                    <Heart className="w-5 h-5 " strokeWidth={1.5} />
                    </div>
                  </button>
                  <div className="absolute inset-x-0 bottom-4 opacity-0 group-hover/card:opacity-100 transition px-4">
                    <button className="bg-white/90 text-secondary font-semibold py-3 rounded-full shadow block w-full hover:bg-secondary hover:text-white transition">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </Link>

              {/* Info */}
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
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <button
          ref={prevRef}
          className="custom-prev hidden xs:inline-flex lg:hidden lg:peer-hover:flex lg:hover:inline-flex absolute left-2 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="custom-next hidden xs:inline-flex lg:hidden lg:peer-hover:flex lg:hover:inline-flex absolute right-2 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      </div>
    </section>
  );
}