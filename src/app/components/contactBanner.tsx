"use client";

import React from "react";

const ContactBanner = () => {
  return (
    <section className="bg-white pt-10">
        <div className="2xl:container 2xl:mx-auto">
      {/* Breadcrumb */}
      <div className=" px-4 text-sm text-dark-grey">
        <nav className="flex items-center space-x-2">
          <a href="/" className="hover:text-black">Home</a>
          <span>›</span>
          <a href="/pages" className="hover:text-black">Pages</a>
          <span>›</span>
          <span className="text-md-grey">Contact</span>
        </nav>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="text-lg mb-1">Hi, friends!</p>
        <h1 className="text-4xl font-medium text-gray-900 mb-7">Contact Us</h1>
        <p className="text-dark-grey leading-relaxed mb-11">
          Welcome to Rokan! We're delighted to hear from you. Whether you have a query
          about an order, want to collaborate, or simply wish to share your thoughts,
          we're here to assist you every step of the way.
        </p>
      </div>

      {/* Image */}
      <div className="">
        <img
          src="/images/contact-banner.jpg"
          alt="Contact Us"
          className="w-full h-auto object-cover"
        />
      </div>
      </div>
    </section>
  );
};

export default ContactBanner;
