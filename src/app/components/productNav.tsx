"use client";

import Link from "next/link";

export default function ProductNav() {
  return (
    <div className="relative group">
      <Link href="/" className="hover:underline font-semibold py-6">
        Product
      </Link>

      {/* Mega Menu */}
      <div className="absolute left-9/10 -translate-x-1/2 top-full mt-6 hidden group-hover:flex bg-white text-black shadow-lg px-10 py-10 z-50 w-screen justify-self-center justify-between">
        {/* All Columns */}
        <div className="grid grid-cols-8 gap-8 text-sm">

          {/* Column 1 - Product layout */}
          <div className="col-span-1 ">
            <h4 className="font-semibold mb-3">Product layout</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Default layout</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Full width</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Full container</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Default tab</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Tab accordion inner</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Tab accordions</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Open all tab</Link></li>
            </ul>
          </div>

          {/* Column 2 - Product features */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3">Product features</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Compare color</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Ask a question</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Pickup available</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Share products</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Products pre-orders</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Term and conditions</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Left sidebar</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Right sidebar</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Drawer sidebar</Link></li>
            </ul>
          </div>

          {/* Column 3 - Product details */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3">Products details</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Real time visitor</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Buy now button</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Swatch images</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Color swatch</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Text swatch</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Swatch radio</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Swatch dropdown</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Trust badge</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Sticky add to cart</Link></li>
            </ul>
          </div>

          {/* Column 4 - Thumbnail positions */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3">Thumbnail positions</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Thumbnail left</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Thumbnail right</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Thumbnail bottom</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">No Thumbnail</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Grid 1 column <span className="text-xs bg-light-grey text-white px-1 rounded">HOT</span></Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Grid 2 column</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Inner zoom 1</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Inner zoom 2</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">External zoom</Link></li>
            </ul>
          </div>

          {/* Column 5 - Boot sale */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3">Boot sale</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Count down timer <span className="text-xs bg-light-grey text-white px-1 rounded">HOT</span></Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Stock countdown</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Variant image group</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Vendor logo</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Product sticky</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Frequently bought together</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Custom option</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Size guide</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Dynamic checkout button</Link></li>
            </ul>
          </div>

          {/* Column 6 - Product type with image */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3">Product type</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">360° product <span className="text-xs bg-light-grey text-white px-1 rounded">HOT</span></Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Product AR/3D</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Simple product</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Variable product</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Subscription product</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Product grouped</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">External/Affiliate</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Out of stock product</Link></li>
              <li><Link href="/" className="hover:text-black hover:-translate-x-1 text-dark-grey transition duration-150 ">Product video</Link></li>
            </ul>
          </div>

          <div className="col-span-2 flex justify-center items-start">
              <img
                src="/images/dress.jpeg"
                alt="Product type"
                className="rounded-lg w-70 aspect-1/1 object-cover"
              />
          </div>

        </div>
      </div>
    </div>
  );
}
