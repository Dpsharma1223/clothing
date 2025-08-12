"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Star } from "lucide-react";
const testimonials = [
  {
    image: "/aboutUs/testi_1.png",
    title: "Rokan is my favourite store",
    quote:
      "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
    name: "Donald Duck",
    stars: 5,
  },
  {
    image: "/aboutUs/testi_2.png",
    title: "Loved the collection!",
    quote:
      "The colors are vibrant and the fabric feels luxurious. Definitely coming back for more.",
    name: "Mickey Mouse",
    stars: 5,
  },
  {
    image: "/aboutUs/testi_3.png",
    title: "Amazing service",
    quote:
      "The customer support was very helpful and guided me through the entire process smoothly.",
    name: "Goofy",
    stars: 4,
  },
];

export default function AboutTestimonials() {
  return (
    <section className="py-22 bg-cover bg-center text-white bg-[url(/aboutUS/testi.jpg)]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What People Are Saying</h2>
        <p className="text-sm md:text-base mb-12">
          Customers love our products and we always strive to please them all.
        </p>

        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center px-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={100}
                  height={100}
                  className="rounded-full border-1 border-dark-grey shadow-lg mb-6"
                />
                <h3 className="text-xl md:text-2xl font-medium mb-3">{t.title}</h3>
                <p className="text-lg leading-relaxed max-w-xl mb-3">{t.quote}</p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-medium">{t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
