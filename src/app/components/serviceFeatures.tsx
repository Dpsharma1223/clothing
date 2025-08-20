"use client";

import React from "react";
import { Truck, CreditCard, RotateCcw, MessageCircle } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Free Shipping",
    description: "For all Orders Over $100",
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "100% Payment Secure",
    description: "Safe payment with PEV",
  },
  {
    icon: <RotateCcw className="w-10 h-10" />,
    title: "30 Days Return",
    description: "For an Exchange Product",
  },
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Support 24/7",
    description: "Contact us Anytime",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="bg-white p-4">
      <div className="2xl:container border-t border-light-grey 2xl:mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-black">{service.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-dark-grey text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
