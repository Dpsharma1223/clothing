"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const productSlides = [
  {
    name: "DRESSES",
    image: "/shop/dress.jpeg",
    link: "/",
  },
  {
    name: "SHIRTS",
    image: "/shop/shirt.jpeg",
    link: "/",
  },
  {
    name: "SPORTSWEAR",
    image: "/shop/sportswear.jpeg",
    link: "/",
  },
  {
    name: "SWEATERS",
    image: "/shop/sweater.jpeg",
    link: "/",
  },
  {
    name: "TOP T-SHIRT",
    image: "/shop/tshirt.jpeg",
    link: "/",
  },
];

export default function Shop() {
  return (
    <div className="relative group">
      <button className="hover:underline-offset-5 hover:underline font-semibold py-7 px-4 inline-flex items-center">
        Shop
        <svg
          className="w-4 h-4 ml-1 mt-[1px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Mega Menu */}
      <div className="absolute left-9/6 -translate-x-1/2 top-full hidden group-hover:flex bg-white text-black shadow-lg px-10 py-10 z-50 w-7xl justify-between">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          className="mySwiper"
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 inset-x-6 mx-4 flex justify-center bg-white/80 px-5 py-2 rounded-full text-sm font-semibold">
               {item.name}
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
