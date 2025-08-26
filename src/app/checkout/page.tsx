// src/app/checkout/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const [step, setStep] = useState("information");

  return (
    <div className="bg-white py-10 pb-20 relative">
        
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white border-r border-light-grey"></div>
            <div className="bg-light-grey/45"></div>
        </div>
        <div className="2xl:container 2xl:mx-auto">
      {/* Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Left - Checkout Form */}
        <div className="px-6 md:px-12 py-10">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Your Store</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center text-sm text-gray-500 gap-2 mb-6">
            <span
              className={`cursor-pointer ${
                step === "information" ? "text-black font-medium" : ""
              }`}
              onClick={() => setStep("information")}
            >
              Information
            </span>
            <span>/</span>
            <span
              className={`cursor-pointer ${
                step === "shipping" ? "text-black font-medium" : ""
              }`}
              onClick={() => setStep("shipping")}
            >
              Shipping
            </span>
            <span>/</span>
            <span
              className={`cursor-pointer ${
                step === "payment" ? "text-black font-medium" : ""
              }`}
              onClick={() => setStep("payment")}
            >
              Payment
            </span>
          </div>

          {/* Step Content */}
          {step === "information" && (
            <div>
              <h2 className="text-lg font-medium mb-4">Contact Information</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />

              <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
              />
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  className="border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
              <input
                type="text"
                placeholder="Phone (optional)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
              />

              <button
                className="bg-black text-white px-6 py-3 rounded-lg w-full"
                onClick={() => setStep("shipping")}
              >
                Continue to Shipping
              </button>
            </div>
          )}

          {step === "shipping" && (
            <div>
              <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
              <div className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between">
                <span>Standard Shipping</span>
                <span>Free</span>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 mb-6 flex justify-between">
                <span>Express Shipping</span>
                <span>₹250</span>
              </div>

              <button
                className="bg-black text-white px-6 py-3 rounded-lg w-full"
                onClick={() => setStep("payment")}
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === "payment" && (
            <div>
              <h2 className="text-lg font-medium mb-4">Payment</h2>
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked />
                  Credit / Debit Card
                </label>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 mb-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" />
                  Cash on Delivery
                </label>
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-lg w-full">
                Complete Order
              </button>
            </div>
          )}
        </div>

        {/* Right - Order Summary */}
        <div className=" px-6 md:px-12 py-10">
          <h2 className="text-lg font-medium mb-6">Order Summary</h2>
          <div className="space-y-4">
            {[
              {
                id: 1,
                name: "Balloon-sleeved Dress",
                price: 104.95,
                img: "/products/p2.jpg",
                qty: 1,
              },
              {
                id: 2,
                name: "Cotton Sweatshirt Dress",
                price: 161.95,
                img: "/products/p3.jpg",
                qty: 2,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 pb-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                </div>
                <p className="font-medium">€{(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 border-t border-gray-300 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€428.85</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>€428.85</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
