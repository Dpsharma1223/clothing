"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const SalesMarquee = () => {
  return (
    <div className="bg-black text-white py-5 border-t border-gray-700">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex items-center gap-6 text-xs uppercase tracking-wide justify-around font-medium">
          <span>ROKAN EDITORIAL - SUMMER SALE FOR ALL SWIMSUITS - 10% OFF</span>&nbsp;
          <span className="w-2 h-2 rounded-full border border-white"></span>&nbsp;
          <span>ROKAN EDITORIAL - FREE DELIVERY AND RETURNS FROM $120</span>&nbsp;
          <span className="w-2 h-2 rounded-full border border-white"></span>&nbsp;
          <span>ROKAN EDITORIAL - MID-SEASON SALE UP TO 20% OFF</span>&nbsp;
          <span className="w-2 h-2 rounded-full border border-white"></span>&nbsp;&nbsp;
        </div>
      </Marquee>
    </div>
  );
};

export default SalesMarquee;
