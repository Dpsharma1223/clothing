"use client";

import React from "react";

const sales = [
  {
    id: 1,
    title: "Sale 10% Off",
    description: "Applies to running products.",
    code: "SALEOFF10APL",
  },
  {
    id: 2,
    title: "Sale 20% Off",
    description: "Direct deduction of 20% for all bills.",
    code: "SALEOFF20ALL",
  },
  {
    id: 3,
    title: "Sale 50% Off",
    description: "Direct deduction of 50% for all bills.",
    code: "SALEOFF50ALL",
  },
  {
    id: 4,
    title: "Best Of Sale",
    description: "Applicable to all items and all store.",
    code: "BESTSALEOFF",
  },
];

export default function SalesHero() {
  return (
    <section className="bg-gradient-to-b from-orange via-pink via-40% to-redish bg-fixed text-white py-25 px-4">
      {/* Hero Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-[5rem] font-semibold leading-19">
          OUTLET
        </h1>
        <h2 className="text-4xl md:text-[5rem] font-semibold mb-4 leading-19">
          UP TO 50% OFF
        </h2>
        <p className="">Selected Pieces / Online Exclusive</p>
      </div>

      {/* Sale Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:container 2xl:mx-auto mb-8">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="text-black rounded-lg flex flex-col justify-between text-center relative w-full"
          >
            <div className="flex flex-col justify-center items-center py-9 border-dashed border border-white rounded-t-lg">
              <span className="border border-white text-white text-[0.6rem] px-5 py-1 rounded-full mb-2">
                SALE OFF
              </span>

              <div className="text-white">
                <h3 className="text-3xl font-medium">{sale.title}</h3>
                <p className="text-md  mt-1.5">{sale.description}</p>
              </div>
            </div>

            <div className="py-4 bg-white border-white border rounded-b-lg">
              <p className="text-xs font-medium mb-1">USE CODE:</p>
              <p className="text-lg font-semibold">{sale.code}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
