"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import type { NavigationOptions } from "swiper/types";

const testimonialsData = [
  {
    customerImage: "/images/testimonial1.jpeg",
    name: "Algistino Lionel",
    productImage: "/images/product1.jpeg",
    productName: "Balloon-sleeved Dress",            //600x800
    productPrice: "€179,95",
    review:
      "I just have to say, I am absolutely amazed by the quality of the suit I received! I'm seriously so impressed, and the price is unbeatable! I was a bit worried at first, but everything about it turned out perfect. Thank you so much!",
  },
  {
    customerImage: "/images/testimonial2.mp4",
    name: "Siarhei Dzenisenka",
    productImage: "/images/product2.jpeg",
    productName: "Gathered-sleeve Blazer",
    productPrice: "€289,95",
    review:
      "Beautiful pieces at affordable prices!!! You can never go wrong with that. Shipping is fast and amazing customer service. Unique for wedding wear but still gorgeous and traditional!",
  },
  {
    customerImage: "/images/testimonial3.jpeg",
    name: "Carie-Gosée H.",
    productImage: "/images/product3.jpeg",
    productName: "Polo-neck Body Dress",
    productPrice: "€210,95",
    review:
      "My experience with Rokan has been absolutely amazing!!! I love love love their service so much!! I have ordered twice from their website already and they haven’t let me down!!!",
  },
];

export default function Testimonials() {

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
    <div className="pt-6 xs:pt-9 md:pt-22 bg-white px-4">
      <div className="2xl:container 2xl:mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Customer Say!</h2>
          <p className="text-gray-500 text-sm mt-2">
            Customers love our products and we always strive to please them all.
          </p>
        </div>
        <div className="relative w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1251: { slidesPerView: 2 },
          }}
        //   pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="px-4 py-1 mySwiper w-full peer"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex bg-white rounded-2xl border h-full border-gray-200 overflow-hidden">
                <div className="h-full  overflow-hidden w-2/5 hidden md:inline">
                  {testimonial.customerImage.endsWith(".mp4") ? (
                    <video
                      src={testimonial.customerImage}
                      className="object-cover w-full h-full aspect-6/8"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={testimonial.customerImage}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6 w-full md:w-3/5">
                  <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                  <h3 className="font-medium flex items-center gap-1">
                    {testimonial.name}
                    <span className="text-sm inline-flex items-center font-light text-dark-grey ml-2">
                      <svg
                        className="w-4 h-4 inline-block"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                      Verified Buyer
                    </span>
                  </h3>
                  <p className="text-dark-grey mt-2 text-sm py-3">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center mt-4 border-t border-light-grey pt-4 pb-3">
                    <Image
                      src={testimonial.productImage}
                      alt={testimonial.productName}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-sm">
                        {testimonial.productName}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.productPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

          {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="custom-prev hidden lg:hidden lg:peer-hover:flex lg:hover:inline-flex absolute left-2 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
          className="custom-next hidden lg:hidden lg:peer-hover:flex lg:hover:inline-flex absolute right-2 top-1/2 text-secondary -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
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
    </div>
  );
}
