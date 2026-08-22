"use client";

import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ExperienceCard from "@/components/ExperienceCard";
import ServicesListCard from "@/components/ServicesListCard";
import FleetCard from "@/components/FleetCard";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8FA]">
      
      {/* 1. WHITE NAVBAR - Stacking priority z-50 */}
      <div className="relative z-50 bg-white border-b border-black/[0.03]">
        <Navbar activePage="services" />
      </div>

      {/* 2. FULL-WIDTH SERVICES HERO SECTION */}
      <ServicesHero />

      {/* 3. CENTERED LAYOUT CONTENT GRID CONTAINER */}
      <main className="flex-1 w-full max-w-[1450px] mx-auto px-6 md:px-12 pb-[48px] flex flex-col gap-8">
        
        {/* 3-Column Info Cards Section - Overlaps Hero slightly */}
        <div className="grid grid-cols-1 lg:grid-cols-[32%_36%_32%] gap-[24px] relative z-30 -mt-[40px] lg:-mt-[40px] items-start">
          <ExperienceCard />
          <ServicesListCard />
          <FleetCard />
        </div>

      </main>

    </div>
  );
}
