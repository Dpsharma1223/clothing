"use client";

import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";

const Headquarter = () => {
  return (
    <section className="px-4 bg-white">
        <div className="2xl:container 2xl:mx-auto border-t py-19 border-b border-light-grey">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        {/* Left Content */}
        <div className="text-2md">
          <h3 className="text-xl font-medium mb-3">HEADQUATER</h3>
          <p className="text-dark-grey text-lg mb-6">
            Contact us for any further questions, possible projects and business
            partnerships.
          </p>

          <p className="mb-3">
            <span className="font-semibold">Phone:&emsp;</span> +1 248-785-9545
          </p>
          <p className="mb-3">
            <span className="font-semibold">Email:&emsp;</span> info@example.com
          </p>
          <p className="mb-6 text-dark-grey">
            <span className="font-semibold text-black">Address:&emsp;</span> 9606 North MoPac Expressway Suite 700 Austin
          </p>

          {/* Social Icons */}
          <div className="flex gap-7 text-base">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/ourStores/headquarter.jpg"        //1200x800
            alt="Headquarter"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Headquarter;
