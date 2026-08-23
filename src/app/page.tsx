"use client";

import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F7F8FA]">
      {/* Navbar */}
      <div className="relative z-50 bg-white border-b border-black/[0.03]">
        <Navbar activePage="home" />
      </div>

      {/* Hero with truck video background and glass card */}
      <section className="relative w-full flex-1 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/fallback_home.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/TRUCK-VIDEO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/0" />
        {/* Glassmorphism content card */}
        <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-12">
            <div
              className="relative w-full flex flex-col"
style={{
  maxWidth: '480px',
  //height:'500px',

  // Subtle transparent white glass
  background: `
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.02) 100%
    )
  `,

  // Moderate blur — keeps the video visible
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',

  // Thin glossy glass border
  border: '1px solid rgba(255, 255, 255, 0.38)',
  borderRadius: '20px',

  padding: '50px 40px',

  // Soft shadow + subtle top glossy highlight
  boxShadow: `
    0 8px 30px rgba(0, 0, 0, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    inset 0 -1px 0 rgba(255, 255, 255, 0.08)
  `,
}}
            >
              <div style={{ position: 'relative', zIndex: 2, textShadow: '0 1px 2px rgba(255,255,255,0.25)' }}>
              {/* Eyebrow */}
              <p className="text-[#D71920] text-[13px] font-bold uppercase tracking-[2px] mt-2">
                DELIVERING TRUST. MOVING INDIA.
              </p>

              {/* Heading */}
              <h2 className="mb-4" style={{ lineHeight: 1.08 }}>
                <span className="block text-[#111827] text-[40px] sm:text-[36px] font-extrabold">Delivering Goods.</span>
                <span className="block text-[#D71920] text-[40px] sm:text-[36px] font-extrabold">Delivering Trust.</span>
              </h2>

              {/* Description */}
              <p className="mb-5 text-[20px] sm:text-[16.5px] text-[#111827] leading-[1.55]">
                Aey-Pee Transport Company Pvt. Ltd. is a specialty transport company dedicated to providing the best transportation service all over India. With experienced drivers and well cared for, we deliver your consignments safely and on time.
              </p>

              {/* CTA Buttons */}
              <div className="mt-5 flex gap-3.5 pt-1">
                <a
                  href="/services"
                  className="bg-[#D71920] text-white text-[13px] font-bold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ height: '44px', padding: '0 24px', borderRadius: '10px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  OUR SERVICES
                </a>
                <a
                  href="/contact"
                  className="text-[#111827] text-[14px] sm:text-[13px] font-bold tracking-wide hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    height: '44px',
                    padding: '0 24px',
                    borderRadius: '10px',
                    background: 'rgb(255, 255, 255)',
                    border: '1px solid #D71920',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D71920" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  CONTACT US
                </a>
              </div>
              </div>
            </div>
        </div>

        {/* 20 Years of Trust Badge */}
        <img
          src="/badge.png"
          alt="20 Years of Trust"
          className="absolute bottom-[39px] right-[102px] z-40 w-[112px] h-auto drop-shadow-lg pointer-events-none select-none"
        />
      </section>


    </div>
  );
}
