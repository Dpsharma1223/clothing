"use client";

import Link from "next/link";
import { X, Heart } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-opacity-30"
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div className="relative w-99 max-w-full h-full bg-white shadow-lg overflow-y-auto">
        {/* Header */}
        <div className="bg-menu text-white flex justify-between items-center px-7 py-3">
          <span className="text-sm font-semibold tracking-wide">MENU</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-5 h-5 text-light-grey" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="">
          <div className="flex justify-between items-center mx-7 py-4 text-sm font-medium border-b border-light-grey">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-dark-grey" />
          </div>
          <div className="flex justify-between items-center mx-7 py-4 text-sm font-medium border-b border-light-grey">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-dark-grey" />
          </div>
          <div className="flex justify-between items-center mx-7 py-4 text-sm font-medium border-b border-light-grey">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Product
            </Link>
            <ChevronRight className="w-4 h-4 text-dark-grey" />
          </div>
          <div className="flex justify-between items-center mx-7 py-4 text-sm font-medium border-b border-light-grey">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Pages
            </Link>
            <ChevronRight className="w-4 h-4 text-dark-grey" />
          </div>
          <div className="flex justify-between items-center mx-7 py-4 text-sm font-medium border-b border-light-grey">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Blogs
            </Link>
            <ChevronRight className="w-4 h-4 text-dark-grey" />
          </div>
        </div>

        {/* Wishlist */}
        <div className="mx-5 py-4 flex items-center space-x-2 border-b border-light-grey">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Wishlist</span>
        </div>

        
    
      </div>
    </div>
  );
}
