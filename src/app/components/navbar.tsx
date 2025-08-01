"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobileMenu";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Search, Heart, User, ShoppingBag } from "lucide-react";
import Shop from "./shop";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      {!isScrolled && (
        <div className="hidden lg:flex justify-between items-center bg-black text-white text-sm px-6 py-2">
          <div className="flex gap-6 items-center">
            <Link href="/">
              <FaFacebookF className="w-3.5 h-3.5 text-white" />
            </Link>
            <Link href="/">
              <Instagram className="w-3.5 h-3.5 text-white" />
            </Link>
            <Link href="/">
              <FaXTwitter className="w-3.5 h-3.5 text-white" />
            </Link>
            <Link href="/">
              <FaYoutube className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
          <div className="text-sm">
            Summer Sale 15% off!{" "}
            <Link href="#" className="underline ml-1">
              Shop Now!
            </Link>
          </div>
          <div className="text-sm">
            Need Any Help? Call us: <Link href="#">+222-1800-2628 </Link>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`w-full z-50 sticky top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow text-black"
            : "lg:bg-black/25 lg:backdrop-blur-sm lg:text-white bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Hamburger Menu */}
            <div className="lg:hidden flex text-dark-grey items-center">
              <button onClick={() => setMenuOpen(true)}>
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tighter font-stretch-200%"
              >
                ROKAN
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/"
                className="hover:underline hover:underline-offset-5 font-semibold py-7 px-4"
              >
                Home
              </Link>
              <Shop />
              <Link
                href="/"
                className="hover:underline hover:underline-offset-5 font-semibold py-7 px-4"
              >
                About
              </Link>
              <div className="relative group">
                <button className="hover:underline-offset-5 hover:underline font-semibold py-7 px-4 inline-flex items-center">
                  Pages
                  <svg
                    className="w-4 h-4 ml-1 mt-[1px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute -left-3 top-full w-64 bg-white shadow-xl z-50 py-7 px-7 hidden group-hover:flex flex-col gap-3 text-sm text-gray-800">
                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Our Stores
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Store location
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Career
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Sales
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Brands
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Compare
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Timeline
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    FAQ
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Recently viewed products
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    404 error
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    My account
                  </Link>

                  <Link
                    href="/"
                    className="hover:translate-x-3 hover:transition-transform duration-500"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>

              <Link
                href="/"
                className="hover:underline hover:underline-offset-5 font-semibold py-7 px-4"
              >
                Blogs
              </Link>
              <Link
                href="/"
                className="hover:underline hover:underline-offset-5 font-semibold py-7 px-4"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <Search className="w-6 h-6" />
              <User className="w-6 h-6 hidden lg:inline" />
              <Heart className="w-6 h-6  hidden lg:inline" />
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
