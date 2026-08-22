"use client";

import { Truck } from "lucide-react";

export default function FleetCard() {
  return (
    <div className="w-full bg-white rounded-[24px] border border-black/[0.03] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(215,25,32,0.10)] hover:border-[#D71920]/25 flex flex-col justify-start animate-fade-in">
      
      {/* HEADER SECTION */}
      <div className="flex items-center gap-3.5 mb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff0f0] text-primary shrink-0">
          <Truck className="w-[22px] h-[22px]" strokeWidth={2} />
        </div>
        <h3 className="font-outfit text-base font-bold text-primary tracking-wide uppercase">
          FLEET STRENGTH
        </h3>
      </div>
      <div className="w-16 h-[2px] bg-primary mb-5 ml-[62px]"></div>

      {/* BODY CONTENT - Elegant Spacing & Typography */}
      <div className="flex flex-col gap-5">
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-dark-light font-normal">
          Having fleet strength of 20 trucks own. We have also arrangement for over 100 trucks and trailers. And we can arrange required number of trucks/trailers to ensure smooth execution of work instructed to us.
        </p>
        
        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-dark-light font-normal">
          We undertake work of transportation full truckload (FTL) and LCV (Light commercial vehicle) having capacity to carry 9&3 MT. Container of 20’ & 40’ Capacity of 20 to 25.
        </p>
      </div>

    </div>
  );
}
