"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Cotton Sweatshirt Dress",
      variant: "M / Brown",
      price: 161.95,
      image: "/products/p4.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Balloon-sleeved Dress",
      variant: "S / Beige Gray",
      price: 104.95,
      image: "/products/p5.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Stand-up Collar Blouse",
      variant: "S / Light Blue",
      price: 113.95,
      image: "/products/p6.jpg",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white">
      <div className="2xl:container 2xl:mx-auto px-3 py-10">
        {/* Heading */} <h1 className="text-5xl text-center mb-3">Your Cart</h1>
        <p className="text-center mb-16">
          <Link href="/" className="text-sm mt-1">
            Home
          </Link>
          <span className="mx-1 text-lg">›</span>
          <span className="text-dark-grey">Your Shopping Cart</span>
        </p>
        {/* Alert Banner */}
        <div className="bg-blue text-2md px-4 py-3 mt-6 flex items-center justify-center">
          🔥 You’re out of time! Checkout now to avoid losing your order!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-15 gap-7 mt-12">
          {/* Cart Table for above medium screen*/}
          <div className="md:block hidden lg:col-span-11 overflow-x-auto">
            {/* Grid Header */}
            <div className="grid grid-cols-13 border border-light-grey text-md font-medium">
              <div className="p-4 col-span-6 border-r border-light-grey">
                Product
              </div>
              <div className="p-4 col-span-4 border-r border-light-grey">
                Quantity
              </div>
              <div className="p-4 col-span-2 border-r border-light-grey">
                Total
              </div>
              <div className="p-4"></div>
            </div>
            {/* Grid Rows */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-13 border border-light-grey border-t-0"
              >
                {/* Product */}
                <div className="p-4 col-span-6 flex items-center gap-4 border-r border-light-grey">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={110}
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-md-grey">{item.variant}</p>
                    <p className="font-semibold">€{item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="p-4 col-span-4 flex items-center border-r border-light-grey">
                  <div className="flex items-center gap-4 border border-light-grey text-dark-grey p-2 py-1.5">
                    <button
                      className="px-2 text-xl"
                      onClick={() => updateQuantity(item.id, "dec")}
                    >
                      -
                    </button>
                    <span className="pl-1 w-5">{item.quantity}</span>
                    <button
                      className="px-2"
                      onClick={() => updateQuantity(item.id, "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="p-4 col-span-2 flex items-center border-r border-light-grey">
                  €{(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove */}
                <div className="p-4 flex justify-center items-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-md-grey hover:text-dark-grey/80"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {/* Recommended Section */}
            <div className="mt-10">
              <h2 className="text-xl font-medium mb-4">You may also like</h2>
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                }}
                pagination={{ clickable: true }}
                className=""
              >
                {[
                  {
                    id: 1,
                    name: "Balloon-sleeved Dress",
                    price: "€104,95",
                    img: "/products/p2.jpg",
                  },
                  {
                    id: 2,
                    name: "Cotton Sweatshirt Dress",
                    price: "€161,95",
                    img: "/products/p3.jpg",
                  },
                  {
                    id: 3,
                    name: "Stand-up Collar Blouse",
                    price: "€113,95",
                    img: "/products/p1.jpg",
                  },
                ].map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="border border-light-grey rounded-lg p-3 gap-5 flex items-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div>
                        <p className="mt-2 font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.price}</p>
                        <button className="mt-2 text-sm underline font-medium text-black">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Mobile Cart - visible below md */}
          <div className="block md:hidden lg:col-span-11">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-6 border-b border-light-grey relative"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={120}
                  className="rounded-md shrink-0"
                />

                {/* Details */}
                <div className="flex-1">
                  {/* Name + Variant */}
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-md-grey">{item.variant}</p>
                  <p className="font-semibold">€{item.price.toFixed(2)}</p>

                  {/* Quantity Selector */}
                  <div className="mt-3 flex items-center gap-4 border border-light-grey text-dark-grey px-3 py-1.5 w-fit">
                    <button
                      className="px-2 text-xl"
                      onClick={() => updateQuantity(item.id, "dec")}
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      className="px-2 text-xl"
                      onClick={() => updateQuantity(item.id, "inc")}
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <p className="mt-2 font-medium">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-0 text-md-grey hover:text-dark-grey/80"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-light-grey/40 p-6 lg:col-span-4">
            <div className="text-green-600 mb-4">
              🎉 Congratulations! You've got free shipping!
            </div>

            <div className="mb-3">
              <label className="block mb-3 text-2md font-medium">
                Add Order Note
              </label>
              <textarea
                rows={5}
                className="w-full border border-light-grey px-4 rounded-3xl bg-white p-2"
                placeholder="Add order note"
              />
            </div>

            <div className="pb-10 border-b border-light-grey mb-7">
              <label className="block mb-3 text-2md font-medium">
                Estimate Shipping
              </label>
              <label className="block mb-1 text-sm text-dark-grey">
                Country/region
              </label>
              <select className="w-full border border-light-grey bg-white p-3 text-sm text-dark-grey rounded-full mb-3">
                <option>United States</option>
                <option>India</option>
                <option>Germany</option>
              </select>
              <label className="block mb-1 text-sm text-dark-grey">
                Province
              </label>
              <select className="w-full border border-light-grey bg-white p-3 text-sm text-dark-grey rounded-full mb-3">
                <option>Alabama</option>
                <option>California</option>
              </select>
              <label className="block mb-1 text-sm text-dark-grey">
                Postal/ZIP code
              </label>
              <input
                type="text"
                className="w-full border border-light-grey bg-white p-3 text-sm text-dark-grey/80 rounded-full mb-6"
              />
              <button className="w-full text-sm font-semibold bg-black text-white py-3.5 border border-black hover:bg-white hover:text-black rounded-full">
                ESTIMATE
              </button>
            </div>

            <div className="flex justify-between text-xl font-medium">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-dark-grey mb-4">
              Taxes and shipping calculated at checkout
            </p>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                className="h-4 w-4 border border-light-grey/10 accent-black"
              />

              <label className="text-sm">
                I agree with{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <Link href="/checkout" className="w-full flex justify-center text-sm font-semibold bg-black text-white py-3.5 border border-black hover:bg-white hover:text-black rounded-full">
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
