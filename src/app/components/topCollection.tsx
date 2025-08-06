"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import type { NavigationOptions } from "swiper/types";


const collections = [
  {
    title: "Top T-shirt",
    image: "/shop/s1.jpeg",
    link: "/"
  },
  {
    title: "Sweaters",
    image: "/shop/s2.jpeg",
    link: "/"
  },
  {
    title: "Dresses",
    image: "/shop/s3.jpeg",
    link: "/"
  },
  {
    title: "Shirts",
    image: "/shop/s4.jpeg",
    link: "/"
  },
  {
    title: "Blazers",
    image: "/shop/s5.jpeg",
    link: "/"
  },
];

export default function TopCollection() {
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
    <section className="py-6 xs:py-9 md:py-16 bg-white">
      <div className="container mx-auto p-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-semibold">Top Collections</h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Express your style with our standout collection—fashion meets sophistication.
          </p>
        </div>

      {/* Mega Menu */}
      <div className="relative w-full">

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper w-full peer"
        >
          {collections.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.link}
                className="relative block overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-5 inset-x-2 xs:inset-x-4 md:inset-x-6 md:mx-4 flex justify-center bg-white/80 px-5 py-2 rounded-full text-sm font-semibold">
                  {item.title}
                </div>
              </Link>
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