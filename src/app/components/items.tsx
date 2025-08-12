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
        <div className="md:col-span-1 grid grid-cols-1 md:grid-cols-7 gap-4">
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
          <div className="md:col-span-6 px-2 flex relative">
            

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full rounded-md peer"
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


            {/* Custom Prev Button */}
            <button
              ref={prevRef}
              className="custom-prev hidden peer-hover:inline-flex hover:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
              className="custom-next hidden peer-hover:inline-flex hover:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
            {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper spaceBetween={10} slidesPerView={4}>
            {productImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-full cursor-pointer border rounded-md transition-all ${
                  activeIndex === i ? "border-black" : "border-gray-300"
                }`}
                onClick={() => handleThumbClick(i)}
              />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        </div>

        {/* RIGHT SIDE: Product details (unchanged) */}
        <div className="md:col-span-1">
          <div>
            <h2 className="text-sm text-gray-500">ROKAN-THEME</h2>
            <h1 className="text-2xl font-semibold mb-2">Balloon-sleeved Dress</h1>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-500">2 reviews</span>
              <span className="text-red-500 text-sm">🔥 8 sold in last 12 hours</span>
            </div>
            <p className="text-2xl font-semibold mb-4">€104,95</p>
            <p className="text-gray-600 mb-4">
              The garments labelled as committed are produced using sustainable
              fibres or processes, reducing their environmental impact.
            </p>

            {/* Size */}
            <div className="mb-4">
              <h3 className="mb-1 font-medium">Size: {selectedSize}</h3>
              <div className="flex gap-2">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border ${
                      selectedSize === size ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-4">
              <h3 className="mb-1 font-medium">Color: {selectedColor}</h3>
              <div className="flex gap-2">
                {[
                  { name: "gray", code: "#A9A9A9" },
                  { name: "blue", code: "#87CEEB" },
                  { name: "black", code: "#000000" },
                ].map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color.name ? "border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            {/* Personalization */}
            <div className="mb-4">
              <h3 className="text-2md mb-2 font-medium">Add your personalization</h3>
              <p className="text-md text-dark-grey">
                Add your name, note or upload your customized idea image to
                personalise your item. Custom items cannot be returned or
                exchanged.
              </p>
              <input
                type="text"
                placeholder="Customize note"
                className="w-full border px-3 py-3 mb-2 rounded-full border-light-grey placeholder:text-dark-grey"
              />
              <input
                type="file"
                placeholder=""
                className="w-full border px-3 py-3 mb-2 rounded-full border-light-grey placeholder:text-dark-grey"
              />
            </div>

            {/* Buy button */}
            <button className="bg-black text-white hover:bg-white hover:text-black border rounded-full text-xs font-semibold w-full py-4 mb-4">
              BUY ON THEMEFOREST!
            </button>

            {/* Info */}
            <p className="text-sm text-gray-500">Pickup available at Shop location. Usually ready in 24 hours</p>
            <p className="text-sm mt-2">
              Estimate delivery times: <b>12-26 days</b> (International), <b>3-6 days</b> (US).
            </p>
            <p className="text-sm">Return within 45 days of purchase.</p>

            {/* SKU */}
            <div className="mt-4 text-sm text-gray-600">
              <p>Sku: FS_01</p>
              <p>Available: In stock</p>
              <p>Vendor: Rokan-Theme</p>
              <p>
                Collections: Blazers, Dresses, Handbag, Home Page, Shirts, Shop,
                Sportswear, Sweaters, Top T-Shirt, Underwear, Winter Coat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
