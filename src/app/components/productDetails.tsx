"use client";

import React, { useState } from "react";

const ProductDetails: React.FC = () => {
  const tabs = [
    "Description",
    "Customer Reviews",
    "Shipping & Returns",
    "Return Policies",
  ];
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="bg-white">
      <div className="2xl:container 2xl:mx-auto px-4 py-10">
        <div className="flex gap-8 justify-center pb-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-medium ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Description" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Outstanding Features
                </h2>
                <p className="text-gray-600 mb-4">
                  The garments labelled as committed are products that have been
                  produced using sustainable fibres or processes, reducing their
                  environmental impact. Umino's goal is to support the
                  implementation of practices more committed to the environment.
                </p>
                <ul className="list-disc ml-5 mb-4 text-gray-600 space-y-1">
                  <li>Tonal stitching: 98% cotton, 2% elastane.</li>
                  <li>Supple and stretch knit with a rich touch of wool.</li>
                  <li>Model: Model is 6'1″, wearing a size M.</li>
                  <li>
                    Caring for your clothes is caring for the environment.
                  </li>
                </ul>
              </div>

              {/* Right Side - Washing Instructions */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Washing Instructions
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🧺</span> Machine wash max. 30ºC.
                    Short spin.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🧼</span> Iron maximum 110ºC.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span> Do not bleach/bleach.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span> Do not dry clean.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🌀</span> Tumble dry, medium
                    heat.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600">
              We work with monitoring programmes to ensure compliance with our
              social, environmental and health and safety standards for our
              garments. To assess compliance, we have developed a programme of
              audits and continuous improvement plans. Made of super–soft
              cotton, the Organic Cotton Cutaway Tank features a high neck and
              back, and a slight curve at the shoulders, which makes it extra
              flattering. If there’s one thing the ’90s got right, it’s the
              basics.
            </p>
          </div>
        )}

        {activeTab === "Customer Reviews" && (
          <div>
            <p className="text-gray-500">
              Customer reviews content goes here...
            </p>
          </div>
        )}

        {activeTab === "Shipping & Returns" && (
          <div className="space-y-6">
            <p className="text-gray-500">
              For all orders exceeding a value of 100USD shipping is offered for
              free.
            </p>
            <p className="text-gray-500">
              Returns will be accepted for up to 10 days of Customer’s receipt
              or tracking number on unworn items. You, as a Customer, are
              obliged to inform us via email before you return the item.
            </p>
            <p className="text-gray-500">
              Otherwise, standard shipping charges apply. Check out our delivery
              Terms & Conditions for more details.
            </p>
          </div>
        )}

        {activeTab === "Return Policies" && (
          <div>
            <p className="text-gray-500">
              Return policies content goes here...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
