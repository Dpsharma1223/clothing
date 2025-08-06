"use client";

import Image from "next/image";
import Link from "next/link";

export default function CollectionHighlightSection() {
  return (
    <section className="pb-6 xs:pb-9 md:pb-16 bg-white px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <Link
            href="/"
            className="relative rounded-xl overflow-hidden flex-1 group"
          >
            <Image
              src="/images/collect3.jpeg"
              alt="Radiate Timeless Charm"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="md:absolute bottom-6 left-6 right-6 flex justify-center">
              <div className="inline-flex flex-col border border-gray-100 mt-5 mb-2 md:border-none items-center w-fit bg-white/90 rounded-lg p-8 md:shadow-md text-center">
                <p className="text-sm tracking-widest text-gray-600 mb-2">
                  GRACE IN STYLE.
                </p>
                <h3 className="text-3xl font-semibold mb-4">
                  Radiate Timeless Charm
                </h3>
                <span className="inline-block border border-black text-black px-8 py-3 text-sm font-medium rounded-full hover:bg-black hover:text-white transition">
                  DISCOVER COLLECTION
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/"
            className="relative rounded-xl overflow-hidden flex-1 group"
          >
            <Image
              src="/images/collect4.jpeg"
              alt="Embrace Bold Fashion"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="md:absolute bottom-6 left-6 right-6 flex justify-center">
            <div className="inline-flex flex-col border border-gray-100 mt-5 mb-2 md:border-none items-center w-fit bg-white/90 rounded-lg p-8 md:shadow-md text-center">
                <p className="text-sm tracking-widest text-gray-600 mb-2">
                  BOLD & MODERN.
                </p>
                <h3 className="text-3xl font-semibold mb-4">
                  Embrace Bold Fashion
                </h3>
                <span className="inline-block border border-black text-black px-8 py-3 text-sm font-medium rounded-full hover:bg-black hover:text-white transition">
                  DISCOVER COLLECTION
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
