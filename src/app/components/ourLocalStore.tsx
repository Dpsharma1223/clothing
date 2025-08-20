"use client";

import React from "react";

const OurLocalStore = () => {
  return (
    <section className="pt-19 pb-10 bg-white">
      {/* Heading */}
      <div className="text-center pb-19">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Local Store
        </h2>
        <p className="text-dark-grey">
          Click on your nears store location below to set the road on Google Map.
        </p>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px] mb-13">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30694.49458068748!2d-95.745693!3d37.037542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b7e7f0c5a52d2d%3A0xb00b6bfa7b77b8af!2sFawn%20Creek%20Township%2C%20KS%2C%20USA!5e0!3m2!1sen!2sin!4v1691761234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Store Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4">
        {/* Store 1 */}
        <div className="border-2 border-white p-9 hover:border-black">
          <h4 className="font-medium mb-2">01. NEW YORK</h4>
          <p className="text-dark-grey py-1">
            7021 Washington SQ. South New York, NY 10012
          </p>
          <p className="mt-2">
            <strong>Telephone:</strong><span className="text-dark-grey"> 703.172.3412</span>
          </p>
          <p>
            <strong>Email:</strong><span className="text-dark-grey"> hello@example.com</span>
          </p>
        </div>

        {/* Store 2 */}
        <div className="border-2 border-white p-9 hover:border-black">
          <h4 className="font-medium mb-2">02. AUSTIN</h4>
          <p className="text-dark-grey py-1">
            2972 Collins St. Victoria, Austin 8007
          </p>
          <p className="mt-2">
            <strong>Telephone:</strong> <span className="text-dark-grey">703.172.3412</span>
          </p>
          <p>
            <strong>Email:</strong><span className="text-dark-grey"> hello@example.com</span>
          </p>
        </div>

        {/* Store 3 */}
        <div className="border-2 border-white p-9 hover:border-black">
          <h4 className="font-medium mb-2">03. AMSTERDAM</h4>
          <p className="text-dark-grey py-1">
            1081 Vansla Spartan, Salta Town, Amsterdam 10012
          </p>
          <p className="mt-2">
            <strong>Telephone:</strong> <span className="text-dark-grey"> 703.172.3412 </span>
          </p>
          <p>
            <strong>Email:</strong><span className="text-dark-grey"> hello@example.com</span>
          </p>
        </div>

        {/* Store 4 */}
        <div className="border-2 border-white p-9 hover:border-black">
          <h4 className="font-medium mb-2">04. SAN FRANCISCO</h4>
          <p className="text-dark-grey py-1">
            4140 Crosscut Rd. Waytown, San Francisco 12134
          </p>
          <p className="mt-2">
            <strong>Telephone:</strong> <span className="text-dark-grey">703.172.3412</span>
          </p>
          <p>
            <strong>Email:</strong><span className="text-dark-grey"> hello@example.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurLocalStore;
