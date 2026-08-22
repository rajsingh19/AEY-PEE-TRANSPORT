"use client";

import Navbar from "@/components/Navbar";
import ExperienceCard from "@/components/ExperienceCard";
import ServicesListCard from "@/components/ServicesListCard";
import FleetCard from "@/components/FleetCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F8FA]">
      {/* Navbar */}
      <div className="relative z-50 bg-white border-b border-black/[0.03]">
        <Navbar activePage="home" />
      </div>

      {/* Hero with truck video background and glass card */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fallback_truck.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/TRUCK-VIDEO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />
        {/* Glassmorphism content card */}
        <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-12">
          <div className="max-w-lg w-full bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl p-8 sm:p-10 shadow-lg">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#151A24] mb-2">
              DELIVERING TRUST. MOVING INDIA.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D00018] mb-4">
              Delivering Goods. Delivering Trust.
            </h2>
            <p className="text-base text-[#151A24] mb-6">
              Aey-Pee Transport Company Pvt. Ltd. is a specialty transport company dedicated to providing the best transportation service all over India. With experienced drivers and well cared for, we deliver your consignments safely and on time.
            </p>
            <div className="flex gap-4">
              <a
                href="/services"
                className="bg-[#D00018] text-white px-6 py-3 rounded-full hover:bg-[#b7151a] transition"
              >
                OUR SERVICES
              </a>
              <a
                href="/contact"
                className="bg-white/30 backdrop-blur-md border border-[#D00018] text-[#D00018] px-6 py-3 rounded-full hover:bg-white/50 transition flex items-center"
              >
                <span role="img" aria-label="phone">📞</span>
                <span className="ml-2">CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
