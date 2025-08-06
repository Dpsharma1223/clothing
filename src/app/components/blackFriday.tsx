"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BlackFriday() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-11-28T00:00:00") - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-29 lg:py-37 px-4 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-xl px-4 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">BLACK FRIDAY SALE</h2>
        <p className="text-sm mb-8">Discounts of up to 50% on select styles.</p>

        {/* Timer */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-13">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOUR", value: timeLeft.hours },
            { label: "MINS", value: timeLeft.minutes },
            { label: "SECS", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white border-opacity-30 px-4 py-3 md:px-9 md:py-4 rounded-md flex flex-col items-center min-w-[60px]"
            >
              <span className="text-2xl font-bold">{item.value}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="border border-white px-12 py-4 text-xs font-semibold rounded-full hover:bg-white hover:text-black transition">
          GET AT ONLY $158.00
        </button>
      </div>
    </section>
  );
}
