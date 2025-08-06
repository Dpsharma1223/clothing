"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const slides = [
  {
    id: 1,
    heading: "Lifestyle Inspiration",
    description:
      "Inspire your customers by illustrating a sophisticated lifestyle made possible through their purchases on your website.",
    btnText: "DISCOVER COLLECTION",
    imageUrl: "/banners/banner1.jpeg",
  },
  {
    id: 2,
    heading: "Timeless Essence",
    description:
      "Create a stylish statement this season with summer-ready picks and new arrivals that redefine fashion.",
    btnText: "DISCOVER COLLECTION",
    imageUrl: "/banners/banner2.jpeg",
  },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[96vh]">

      <button className="swiper-button-prev-custom hidden sm:inline-flex absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white text-secondary p-2 rounded-full">
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
      <button className="swiper-button-next-custom hidden sm:inline-flex absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white text-secondary p-2 rounded-full">
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

      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{ delay: 5000 }}
        navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.imageUrl}
                alt={slide.heading}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-24 left-10 md:left-20 z-10">
                <div className="max-w-md text-white space-y-5">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    {slide.heading}
                  </h2>
                  <p className="text-sm md:text-base">{slide.description}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-semibold hover:bg-gray-100 transition">
                    {slide.btnText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
