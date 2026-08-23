"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section 
      className="relative w-full grid grid-cols-1 lg:grid-cols-[32%_68%] bg-[#FFF7F7] overflow-hidden z-10 lg:h-[24vw]" 
      id="services-hero"
    >
      
      {/* LEFT 32% COLUMN - Clean white background for the text */}
      <div className="bg-[#FFF7F7] flex items-center p-8 sm:p-12 lg:pl-[12%] lg:pr-4 z-20">
        <div className="w-full flex flex-col justify-center animate-slide-up">
          
          {/* Label and red underline */}
          <div className="flex flex-col items-start mb-3">
            <span className="text-primary text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] font-sans">
              SERVICES
            </span>
            <div className="w-12 h-[2.5px] bg-primary mt-1.5"></div>
          </div>

          {/* Heading - Enforced 2 lines using whitespace-nowrap on desktop */}
          <h2 className="font-outfit text-[30px] sm:text-[32px] lg:text-[30px] xl:text-[36px] font-extrabold leading-[1.1] mb-3 tracking-tight">
            <span className="text-[#111827] block lg:whitespace-nowrap">Smart Logistics.</span>
            <span className="text-primary block lg:whitespace-nowrap">Delivered With Care.</span>
          </h2>

          {/* Description */}
          <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-dark-light font-normal max-w-[400px]">
            We provide reliable and efficient transport solutions tailored to your needs. Whether on-demand or scheduled, we ensure your goods reach safely, on time, every time.
          </p>

        </div>
      </div>

      {/* RIGHT 68% COLUMN - Services fleet image matching original aspect ratio */}
      <div className="relative w-full aspect-video lg:aspect-auto bg-white overflow-hidden z-10">
        <Image 
          src="/services_hero.png" 
          alt="Aey-Pee Transport fleet" 
          fill
          unoptimized
          sizes="100vw"
          className="object-cover"
          style={{ 
            objectPosition: "center center"
          }}
          priority
        />
        
        {/* Irregular left blend overlay extending almost 20% across the image column */}
        <div className="about-video-blend-overlay hidden lg:block"></div>
      </div>

    </section>
  );
}
