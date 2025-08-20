"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    category: "Shopping",
    questions: [
      { q: "What Shipping Methods Are Available?", a: "We offer standard, express, and overnight shipping options depending on your location." },
      { q: "Do You Ship Internationally?", a: "Yes, we ship worldwide. Shipping costs and delivery times vary by region." },
      { q: "How long does it take for home delivery?", a: "Standard home delivery typically takes 3–7 business days." },
      { q: "How Long Will It Take To Get My Package?", a: "Most orders are delivered within 5–10 business days depending on your shipping choice." },
    ],
  },
  {
    category: "Payment",
    questions: [
      { q: "What Payment Methods Are Accepted?", a: "We accept credit cards, debit cards, PayPal, UPI, and net banking." },
      { q: "How Do I Track My Order?", a: "Once your order is shipped, you’ll receive a tracking number by email." },
      { q: "Can I use a different payment method?", a: "Currently, we only support listed payment methods for security reasons." },
    ],
  },
  {
    category: "Orders & Returns",
    questions: [
      { q: "How do I place an Order?", a: "Simply browse our products, add items to your cart, and proceed to checkout." },
      { q: "How Can I Cancel Or Change My Order?", a: "Orders can be modified or canceled within 24 hours of placing them." },
      { q: "Do I need an account to place an order?", a: "No, you can checkout as a guest. However, creating an account makes tracking easier." },
      { q: "How Can I Return a Product?", a: "You can request a return within 7 days of receiving the product through your account dashboard." },
    ],
  },
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  let count = 0;

  return (
    <section className="bg-white py-16">
      <div className="2xl:container 2xl:mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">FAQ</h2>
          <p className="text-dark-grey mt-2">
            If you have other burning questions we weren't able to address here,
            feel free to email.
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((section, i) => (
            <div key={i} className="md:grid md:grid-cols-3 md:gap-8 pb-18">
              {/* Left Heading */}
              <div>
                <h3 className="text-3xl text-gray-800">
                  {section.category} <span className="font-thin"> &nbsp;&nbsp;———</span>
                </h3>
              </div>

              {/* Right Questions */}
              <div className="md:col-span-2 space-y-4 mt-6 md:mt-0">
                {section.questions.map((item, j) => {
                  count++;
                  const index = count;
                  const isOpen = openIndexes.includes(index);

                  return (
                    <div
                      key={j}
                      className="border-b border-gray-200 pb-4 cursor-pointer"
                      onClick={() => toggleQuestion(index)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-medium">{item.q}</span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-dark-grey" />
                        ) : (
                          <Plus className="w-5 h-5 text-dark-grey" />
                        )}
                      </div>
                      {isOpen && (
                        <p className="mt-2 text-dark-grey">{item.a}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
