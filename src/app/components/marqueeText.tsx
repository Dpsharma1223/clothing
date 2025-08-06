"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  const texts = ["Chic Styles Await!", "Elevate Your Wardrobe!", "Style Redefined.", "Shop The Trends!"];

  return (
    <div className="border-b bg-white py-5">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {texts.map((text, index) => (
          <div key={index} className="flex items-center mx-7">
          
            <span className="w-2 h-2 border rounded-full mr-10"></span>
            <span
              className={`text-3xl font-semibold ${
                index % 2 === 0 ? "font-outline" : "text-black"
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
