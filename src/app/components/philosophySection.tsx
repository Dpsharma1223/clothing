"use client";

import Image from "next/image";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section className="pb-6 xs:pb-9 md:pb-22 bg-white px-4">
      <div className="container mx-auto">
        <div className="text-center mb-21">
          <h2 className="text-xl md:text-3xl font-semibold">
            We're on a mission to show the world that modern fashion can be both
            stylish and sustainable. <br />
            <span className="block mt-2">
              Looking good doesn't have to cost the earth.
            </span>
          </h2>
          <div className="mt-8">
            <Link href="/" className="border-b border-black pb-0.5">
              OUR PHILOSOPHY
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Card 1 */}
          <Link
            href="/"
            className="lg:flex-2/3 relative rounded-xl overflow-hidden group"
          >
            <Image
              src="/images/collect1.jpeg" //image size: 1200x450
              alt="High-Top Design"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-6">
              <p className="text-sm text-white mb-1">SAVE 30%—50% CLOTHING</p>
              <h3 className="text-4xl font-semibold text-white mb-4">
                High—Top Design
              </h3>
              <p className="text-white text-sm">
                In-store! Limited time offer.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/"
            className="lg:flex-1/3 relative rounded-xl overflow-hidden flex-1 group"
          >
            <Image
              src="/images/collect2.jpeg" //image size: 513x396
              alt="Colour Spotlight"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-6">
              <p className="text-sm text-white mb-1">SAVE 30—50% BLAZES</p>
              <h3 className="text-4xl font-semibold text-white mb-4">
                Colour Spotlight
              </h3>
              <p className="text-white text-sm">
                In-store! Limited time offer.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
