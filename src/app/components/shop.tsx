"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import type { NavigationOptions } from "swiper/types";


const productSlides = [
  { name: "DRESSES", image: "/shop/dress.jpeg", link: "/" },
  { name: "SHIRTS", image: "/shop/shirt.jpeg", link: "/" },
  { name: "SPORTSWEAR", image: "/shop/sportswear.jpeg", link: "/" },
  { name: "SWEATERS", image: "/shop/sweater.jpeg", link: "/" },
  { name: "TOP T-SHIRT", image: "/shop/tshirt.jpeg", link: "/" },
  { name: "WINTER COAT", image: "/shop/wintercoat.jpeg", link: "/" },
];

export default function Shop() {
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
    <div className="relative group">
      <Link href="/shopPage" className="hover:underline-offset-5 hover:underline font-medium py-7 px-4 inline-flex items-center">
        Shop
        <svg
          className="w-4 h-4 ml-1 mt-[1px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Mega Menu */}
      <div className="absolute left-7/3 -translate-x-1/2 top-full hidden group-hover:flex bg-white text-black shadow-lg px-10 py-10 z-50 w-7xl justify-between">

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={5}
          className="mySwiper w-full peer"
        >
          {productSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.link}
                className="relative block overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-5 inset-x-6 mx-4 flex justify-center bg-white/80 px-5 py-2 rounded-full text-sm font-semibold">
                  {item.name}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="custom-prev hidden peer-hover:flex hover:inline-flex absolute left-10 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
          className="custom-next hidden peer-hover:flex hover:inline-flex absolute right-10 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
  );
}
