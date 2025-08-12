"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">

      <div className="2xl:container 2xl:mx-auto px-4 flex flex-col md:flex-row items-center gap-7">

         <div className="rounded-xl overflow-hidden md:flex-1/3 order-1 md:order-2 w-full">
          <Image
            src="/aboutUs/about1.jpeg"
            alt="About Us"
            width={800}
            height={600}
            className="rounded-xl object-cover w-full h-full"
          />
        </div> 

        <div className="md:flex-2/3 order-2 md:order-1 ">
          <p className="uppercase text-sm tracking-widest font-medium text-dark-grey mb-2">
            About our online store
          </p>
          <h1 className="text-3xl md:text-4xl font-light leading-tight mb-4 text-black">
            Hello, We are Rokan. <br />
            <span className="text-black font-medium text-[2.5rem]">With 25+ Years of Experience</span>
          </h1>
          <p className="text-xl font-medium text-black mb-6">
            "Over 25 years Dukamarket helping companies reach their financial and branding goals."
          </p>
          <p className="text-dark-grey text-base leading-relaxed">
          The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography. The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
