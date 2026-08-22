"use client";

import { Building2, Target } from "lucide-react";

export default function ExperienceCard() {
  return (
    <div className="w-full bg-white rounded-[24px] border border-black/[0.03] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(215,25,32,0.10)] hover:border-[#D71920]/25 flex flex-col justify-start animate-fade-in">
      
      {/* OUR EXPERIENCE SECTION */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff0f0] text-primary shrink-0">
            <Building2 className="w-[22px] h-[22px]" strokeWidth={2} />
          </div>
          <h3 className="font-outfit text-base font-bold text-primary tracking-wide uppercase">
            OUR EXPERIENCE
          </h3>
        </div>
        <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-dark-light font-normal">
          With years of expertise and a dedicated team, we coordinate your cargo deliveries efficiently and ensure a smooth, hassle-free experience.
        </p>
      </div>

      {/* SUBTLE HORIZONTAL DIVIDER */}
      <div className="border-t border-gray-100 my-5"></div>

      {/* OUR COMMITMENT SECTION */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff0f0] text-primary shrink-0">
            <Target className="w-[22px] h-[22px]" strokeWidth={2} />
          </div>
          <h3 className="font-outfit text-base font-bold text-primary tracking-wide uppercase">
            OUR COMMITMENT
          </h3>
        </div>
        <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-dark-light font-normal">
          We are committed to delivering your consignments safely, on time, and with the highest level of professionalism every step of the way.
        </p>
      </div>

    </div>
  );
}
