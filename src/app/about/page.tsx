"use client";

import Navbar from "@/components/Navbar";
import { Award, Truck, Users, ShieldCheck, Building2, Target, Star, Check } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7F7]">
      {/* 1. WHITE NAVBAR - Stacking priority z-50 */}
      <div className="relative z-50 bg-white border-b border-black/[0.03]">
        <Navbar activePage="about" />
      </div>

      {/*
        2. HERO SECTION WITH 32% / 68% GRID LAYOUT ON DESKTOP
        LEFT 32% = Clean white panel.
        RIGHT 68% = Cinematic AP2.mp4 video background (expanded from the left side).
        The height is set to exactly 38.25vw on desktop so the right 68% column matches the video's original 16:9 ratio.
      */}
      <section 
        className="relative w-full grid grid-cols-1 lg:grid-cols-[32%_70%] bg-[#FFF7F7] overflow-hidden z-10 lg:h-[38.25vw]"
        id="about-hero"
      >
        
        {/* LEFT 32% COLUMN - Clean #FFF7F7 background for the text */}
        <div className="bg-[#FFF7F7] flex items-center p-8 sm:p-12 lg:pl-[8%] lg:pr-6 z-20">
          <div className="w-full flex flex-col justify-center animate-slide-up">
            
            {/* Label and red underline */}
            <div className="flex flex-col items-start mb-3">
              <span className="text-primary text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] font-sans">
                ABOUT US
              </span>
              <div className="w-12 h-[2.5px] bg-primary mt-1.5"></div>
            </div>

            {/* Main Header Heading - Enforced 2 lines using whitespace-nowrap */}
            <h2 className="font-outfit text-[32px] sm:text-[36px] lg:text-[32px] xl:text-[44px] font-extrabold leading-[1.1] mb-4 tracking-tight">
              <span className="text-[#111827] block lg:whitespace-nowrap">Delivering Excellence.</span>
              <span className="block mt-1 lg:mt-2 lg:whitespace-nowrap">
                <span className="text-[#111827] inline">Every Mile. </span>
                <span className="text-[#C90016] inline">Every Time.</span>
              </span>
            </h2>

            {/* Description Text */}
            <p className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.6] text-dark-light font-normal max-w-[460px]">
              Aey-Pee Transport Co. Pvt. Ltd. is a specialty transport company dedicated to providing the best transportation service all over India. With experienced drivers and well cared for, we deliver your consignments safely and on time.
            </p>

          </div>
        </div>

        {/* RIGHT 70% COLUMN - AP2.mp4 video matching original aspect ratio */}
        <div className="relative w-full aspect-video lg:aspect-auto bg-[#FFF7F7] overflow-hidden z-10">
          <video 
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            poster="/fallback_truck.webp"
            style={{
              objectPosition: "center center"
            }}
          >
            <source src="/AP2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Irregular Organic Left Fade Overlays - Tight Edge Spread */}
          
          {/* Layer 1: Compact Angled & Multi-Point Radial Feather */}
          <div 
            className="absolute inset-y-0 left-0 w-[40%] sm:w-[30%] lg:w-[20%] pointer-events-none z-10"
            style={{
              background: `
                linear-gradient(100deg, #FFF7F7 0%, #FFF7F7 8%, rgba(255,247,247,0.85) 20%, rgba(255,247,247,0.3) 45%, transparent 70%),
                radial-gradient(ellipse 90% 45% at 0% 10%, #FFF7F7 0%, rgba(255,247,247,0.8) 35%, transparent 80%),
                radial-gradient(ellipse 80% 55% at 0% 90%, #FFF7F7 0%, rgba(255,247,247,0.85) 30%, transparent 75%),
                radial-gradient(ellipse 70% 35% at 0% 50%, rgba(255,247,247,0.9) 0%, transparent 85%)
              `
            }}
          />

          {/* Layer 2: Feathered Soft Gaussian Blur Organic Edge */}
          <svg
            className="absolute inset-y-0 left-0 h-full w-[40px] sm:w-[70px] lg:w-[95px] text-[#FFF7F7] pointer-events-none z-10 opacity-70"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
            style={{ filter: "blur(6px)" }}
          >
            <path d="M0,0 L50,0 C20,25 70,45 30,70 C15,85 55,95 35,100 L0,100 Z" />
          </svg>

          {/* Layer 3: Tight Organic Curved Edge */}
          <svg
            className="absolute inset-y-0 left-0 h-full w-[30px] sm:w-[50px] lg:w-[70px] text-[#FFF7F7] pointer-events-none z-10 filter drop-shadow-[4px_0_8px_rgba(255,247,247,0.7)]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 L35,0 C15,25 55,45 22,70 C8,85 40,95 25,100 L0,100 Z" />
          </svg>
        </div>

      </section>

      {/*
        3. LIGHT/WHITE PAGE BACKGROUND (Below Hero Section)
        Stats Bar Card and Lower Content Cards are nested here with clear visual separation.
      */}
      <main className="flex-1 w-full max-w-[1450px] mx-auto px-6 md:px-12 pb-[48px] flex flex-col gap-8 relative z-20 bg-transparent">
        
        {/* WHITE FLOATING STATS BAR OVERLAPPING HERO BOTTOM */}
        <div className="bg-white rounded-[20px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 p-7 lg:py-6 lg:px-8 relative z-30 -mt-[40px] items-center" id="about-stats-bar">
          
          {/* STAT 1: Since 2005 */}
          <div className="flex items-center gap-4 pl-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-dark-light uppercase tracking-wider leading-none">Since</div>
              <div className="font-outfit text-[22px] font-extrabold text-primary leading-tight mt-0.5">2005</div>
              <div className="text-[12px] font-medium text-dark-light leading-tight">In Transportation</div>
            </div>
          </div>

          {/* Separator 1 */}
          <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

          {/* STAT 2: Pan India Network */}
          <div className="flex items-center gap-4 pl-4 md:pl-0">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-dark-light uppercase tracking-wider leading-none">Pan India</div>
              <div className="font-outfit text-[22px] font-extrabold text-primary leading-tight mt-0.5">Network</div>
              <div className="text-[12px] font-medium text-dark-light leading-tight">Strong Presence</div>
            </div>
          </div>

          {/* Separator 2 */}
          <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

          {/* STAT 3: 1000+ Happy Customers */}
          <div className="flex items-center gap-4 pl-4 md:pl-0">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="font-outfit text-[22px] font-extrabold text-primary leading-tight">1000+</div>
              <div className="text-[12px] font-medium text-dark-light leading-tight mt-0.5">Happy Customers</div>
            </div>
          </div>

          {/* Separator 3 */}
          <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

          {/* STAT 4: Safe & Secure */}
          <div className="flex items-center gap-4 pl-4 md:pl-0">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <div>
              <div className="font-outfit text-[22px] font-extrabold text-primary leading-tight">Safe & Secure</div>
              <div className="text-[12px] font-medium text-dark-light leading-tight mt-0.5">Delivery Guarantee</div>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: Two-column content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-stretch">
          
          {/* LEFT COLUMN: WHO WE ARE & OUR MOTTO */}
          <div className="lg:col-span-4 bg-white rounded-[24px] border border-black/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-8 sm:p-10 lg:p-11 flex flex-col justify-center gap-10 lg:gap-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(215,25,32,0.10)] hover:border-[#D71920]/25">
            
            {/* Section: Who We Are */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fff0f0] to-[#ffe4e4] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(215,25,32,0.08)]">
                  <Building2 className="w-6.5 h-6.5 text-[#D71920] drop-shadow-[0_2px_4px_rgba(215,25,32,0.25)]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-outfit text-[17px] lg:text-[19px] font-extrabold tracking-wider text-[#111827]">WHO WE ARE</h3>
                  <div className="w-8 h-[2px] bg-[#D71920]/60 mt-1"></div>
                </div>
              </div>
              <p className="text-[14px] lg:text-[14.5px] leading-relaxed text-dark-light font-normal border-l-2 border-[#D71920]/20 pl-4 ml-1">
                We have experience in handling transportation of various products with necessary infrastructure and expertise in handling all types of materials, including heavy metals, project goods, and more.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-black/[0.06]"></div>

            {/* Section: Our Motto */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fff0f0] to-[#ffe4e4] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(215,25,32,0.08)]">
                  <Target className="w-6.5 h-6.5 text-[#D71920] drop-shadow-[0_2px_4px_rgba(215,25,32,0.25)]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-outfit text-[17px] lg:text-[19px] font-extrabold tracking-wider text-[#111827]">OUR MOTTO</h3>
                  <div className="w-8 h-[2px] bg-[#D71920]/60 mt-1"></div>
                </div>
              </div>
              <p className="text-[14px] lg:text-[14.5px] leading-relaxed text-dark-light font-normal border-l-2 border-[#D71920]/20 pl-4 ml-1">
                To bring value for money for our customers by reducing transportation costs through continuous improvement and optimal resource utilization.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: OUR QUALITY POLICY & CORE IDEOLOGY */}
          <div className="lg:col-span-8 bg-white rounded-[24px] border border-black/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-8 sm:p-10 lg:p-11 grid grid-cols-1 md:grid-cols-[1fr_auto_1.25fr] gap-8 lg:gap-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(215,25,32,0.10)] hover:border-[#D71920]/25">
            
            {/* Left side: Our Quality Policy */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fff0f0] to-[#ffe4e4] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(215,25,32,0.08)]">
                  <ShieldCheck className="w-6.5 h-6.5 text-[#D71920] drop-shadow-[0_2px_4px_rgba(215,25,32,0.25)]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-outfit text-[17px] lg:text-[19px] font-extrabold tracking-wider text-[#111827]">OUR QUALITY POLICY</h3>
                  <div className="w-8 h-[2px] bg-[#D71920]/60 mt-1"></div>
                </div>
              </div>

              <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-1">
                <li className="flex items-center gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] lg:text-[14.5px] text-dark-light leading-relaxed font-normal group-hover/item:text-[#111827] transition-colors duration-200">Prompt & Positive response</span>
                </li>
                <li className="flex items-center gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] lg:text-[14.5px] text-dark-light leading-relaxed font-normal group-hover/item:text-[#111827] transition-colors duration-200">Team Performance</span>
                </li>
                <li className="flex items-center gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] lg:text-[14.5px] text-dark-light leading-relaxed font-normal group-hover/item:text-[#111827] transition-colors duration-200">On time delivery of goods</span>
                </li>
                <li className="flex items-center gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] lg:text-[14.5px] text-dark-light leading-relaxed font-normal group-hover/item:text-[#111827] transition-colors duration-200">To reduce customer complaints</span>
                </li>
                <li className="flex items-start gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <span className="text-[14px] lg:text-[14.5px] text-dark-light leading-relaxed font-normal group-hover/item:text-[#111827] transition-colors duration-200">With a mission to make continual improvement in all aspects</span>
                </li>
              </ul>
            </div>

            {/* Subtle Vertical Gradient Divider */}
            <div className="hidden md:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"></div>

            {/* Right side: Core Ideology */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fff0f0] to-[#ffe4e4] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(215,25,32,0.08)]">
                  <Star className="w-6.5 h-6.5 text-[#D71920] drop-shadow-[0_2px_4px_rgba(215,25,32,0.25)]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-outfit text-[17px] lg:text-[19px] font-extrabold tracking-wider text-[#111827]">CORE IDEOLOGY</h3>
                  <div className="w-8 h-[2px] bg-[#D71920]/60 mt-1"></div>
                </div>
              </div>

              <ul className="flex flex-col gap-5 list-none p-0 m-0 pl-1">
                <li className="flex items-start gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <div className="text-[14px] lg:text-[14.5px] leading-relaxed">
                    <strong className="text-[#111827] font-extrabold transition-colors duration-200 group-hover/item:text-[#D71920]">Integrity and Honesty</strong>
                    <span className="text-dark-light font-normal"> – We conduct business in a culture that required the highest code of ethics and honesty.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <div className="text-[14px] lg:text-[14.5px] leading-relaxed">
                    <strong className="text-[#111827] font-extrabold transition-colors duration-200 group-hover/item:text-[#D71920]">Continuous Improvement</strong>
                    <span className="text-dark-light font-normal"> – We are \"relentless coach for perfection\", we continuously strive for improvement.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <div className="text-[14px] lg:text-[14.5px] leading-relaxed">
                    <strong className="text-[#111827] font-extrabold transition-colors duration-200 group-hover/item:text-[#D71920]">Creativity</strong>
                    <span className="text-dark-light font-normal"> – We believe in dreaming, thinking unconventional, exploring the unbelievable, we are unique.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item transition-all duration-200 hover:translate-x-1">
                  <div className="w-6 h-6 rounded-full bg-[#fff0f0] flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(215,25,32,0.06)] group-hover/item:bg-[#D71920]/10 transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={3.5} />
                  </div>
                  <div className="text-[14px] lg:text-[14.5px] leading-relaxed">
                    <strong className="text-[#111827] font-extrabold transition-colors duration-200 group-hover/item:text-[#D71920]">Enjoyment</strong>
                    <span className="text-dark-light font-normal"> – We believe in enjoying our work and taking pride in the service that we provides for our customers, having fun is invaluable.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
