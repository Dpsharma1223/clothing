"use client";

import { Mail, MapPin, Phone} from "lucide-react";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white px-6 md:px-20 pt-18 pb-23 text-md">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 pb-10">
        {/* Column 1 */}
        <div className="col-span-2">
        <div className="flex-shrink-0 mb-4">
              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tighter font-stretch-200%"
              >
                ROKAN
              </Link>
            </div>
          <p className="text-md-grey mb-6">
            Experience the Perfect Fusion of Style and Luxury. Where Elegance Meets Sophistication in Every Detail.
          </p>
          <div className="space-y-2 text-md-grey">
            <p><span className="text-white">Phone:</span> +222–1800–2628</p>
            <p><span className="text-white">Address:</span> 502 New Design Str, Melbourne, Australia</p>
            <p><span className="text-white">Email:</span> rokan@domain.com</p>
          </div>
          <div className="flex gap-6 mt-4 items-center">
            <Link href="/">
              <FaFacebookF className="w-5 h-5 text-white" />
            </Link>
            <Link href="/">
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link href="/">
              <FaXTwitter className="w-5 h-5 text-white" />
            </Link>
            <Link href="/">
              <FaYoutube className="w-5 h-5 text-white" />
            </Link>
            <Link href="/">
              <FaPinterest  className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 hidden md:block">
          <h4 className="text-lg font-medium mb-5">Our Company</h4>
          <ul className="space-y-2 text-md-grey">
            <li>About Us</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Size Guide</li>
            <li>My Account</li>
            <li>Timeline</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 hidden md:block">
          <h4 className="text-lg font-medium mb-5">Customer Service</h4>
          <ul className="space-y-2 text-md-grey">
            <li>Privacy Policy</li>
            <li>Theme FAQs</li>
            <li>Refund Policy</li>
            <li>Advanced Search</li>
            <li>Store Locations</li>
            <li>Term & Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-span-2 hidden md:block">
          <h4 className="text-lg font-medium mb-5">Sign Up To Newsletter</h4>
          <p className="text-md-grey mb-7">
            Sign up for exclusive updates, new arrivals & insider only discounts
          </p>
          <form className="flex items-center bg-transparent rounded-full border border-border overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent flex-1 px-4 py-3 text-white focus:outline-none "
            />
            <button className="bg-white text-black px-6 py-3">
              SUBSCRIBE
            </button>
          </form>
          <p className="text-md-grey text-md mt-5">
            ***By entering the e-mail you accept the <span className="font-bold text-white">terms and conditions</span> and the <span className="font-bold text-white">privacy policy</span>.
          </p>
        </div>
      </div>
      {/* Mobile Accordions (show only on small screens) */}
<div className="md:hidden space-y-4">
  {/* Our Company */}
  <details className="border-t border-border py-3">
    <summary className="flex justify-between items-center cursor-pointer">
      <span className="text-lg font-medium">Our Company</span>
      <span className="text-xl">+</span>
    </summary>
    <ul className="mt-3 space-y-2 text-md-grey">
      <li>About Us</li>
      <li>Our Stores</li>
      <li>Contact Us</li>
      <li>Size Guide</li>
      <li>My Account</li>
      <li>Timeline</li>
    </ul>
  </details>

  {/* Customer Service */}
  <details className="border-t border-border py-3">
    <summary className="flex justify-between items-center cursor-pointer">
      <span className="text-lg font-medium">Customer Service</span>
      <span className="text-xl">+</span>
    </summary>
    <ul className="mt-3 space-y-2 text-md-grey">
      <li>Privacy Policy</li>
      <li>Theme FAQs</li>
      <li>Refund Policy</li>
      <li>Advanced Search</li>
      <li>Store Locations</li>
      <li>Term & Conditions</li>
    </ul>
  </details>

  {/* Newsletter */}
  <details className="border-t border-border pt-3">
    <summary className="flex justify-between items-center cursor-pointer">
      <span className="text-lg font-medium">Sign Up To Newsletter</span>
      <span className="text-xl">+</span>
    </summary>
    <div className="mt-3">
      <p className="text-md-grey mb-4">
        Sign up for exclusive updates, new arrivals & insider only discounts
      </p>
      <form className="flex items-center bg-transparent rounded-full border border-border overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email..."
          className="bg-transparent flex-1 px-4 py-3 text-white focus:outline-none"
        />
        <button className="bg-white text-black px-6 py-3">
          SUBSCRIBE
        </button>
      </form>
      <p className="text-md-grey text-md mt-4">
        ***By entering the e-mail you accept the{" "}
        <span className="font-bold text-white">terms and conditions</span> and the{" "}
        <span className="font-bold text-white">privacy policy</span>.
      </p>
    </div>
  </details>
</div>

      <div className="border-t border-border mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-md-grey text-md">
        <p className="mt-3">© 2024 Rokan store. All rights reserved.</p>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-7 md:mt-0">
          <img src="/visa.svg" alt="Visa" className="h-6" />
          <img src="/paypal.svg" alt="PayPal" className="h-6" />
          <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/moneybookers.svg" alt="Moneybookers" className="h-6" />
          <img src="/maestro.svg" alt="Maestro" className="h-6" />
          <img src="/jcb.svg" alt="JCB" className="h-6" />
        </div>
      </div>
    </footer>
  );
}