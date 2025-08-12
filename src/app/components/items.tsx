"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { NavigationOptions } from "swiper/types";
import { Navigation } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "swiper/css";
import "react-medium-image-zoom/dist/styles.css";

const productImages = [
  "/products/p1.jpg",
  "/products/p2.jpg",
  "/products/p3.jpg",
  "/products/p4.jpg",
  "/products/p5.jpg",
  "/products/p6.jpg",
];

const Items: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("black");
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperCore | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const handleThumbClick = (index: number) => {
    swiperRef.current?.slideTo(index);
    setActiveIndex(index);
  };

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

      if (swiperRef.current.navigation) {
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="2xl:container 2xl:mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT SIDE: Thumbnails + Big Image */}
        <div className="md:col-span-1 grid grid-cols-7 gap-4">
          
          {/* Thumbnails */}
          <div className="hidden md:flex md:col-span-1 flex-col gap-2 w-20">
            {productImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-full cursor-pointer border rounded-md transition-all ${
                  activeIndex === i ? "border-black" : "border-gray-300"
                }`}
                onClick={() => handleThumbClick(i)}
              />
            ))}
          </div>

          {/* Big Image Swiper */}
          <div className="md:col-span-6 px-2 flex relative peer">
            
            {/* Custom Prev Button */}
            <button
              ref={prevRef}
              className="custom-prev hidden peer-hover:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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

            {/* Custom Next Button */}
            <button
              ref={nextRef}
              className="custom-next hidden peer-hover:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full rounded-md"
            >
              {productImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <Zoom>
                    <img
                      src={img}
                      alt="Product"
                      className="w-full object-cover rounded-md cursor-zoom-in"
                    />
                  </Zoom>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* RIGHT SIDE: Product details (unchanged) */}
        <div className="md:col-span-1">
          {/* ... your product details code stays exactly as it is ... */}
        </div>
      </div>
    </section>
  );
};

export default Items;
