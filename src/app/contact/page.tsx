"use client";

import Navbar from "@/components/Navbar";
import { Phone, Building2, MapPin, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF7F7]">
      {/* 1. STICKY NAVBAR */}
      <Navbar activePage="contact" />

      {/* 2. HERO / CONTACT INTRODUCTION */}
      <section className="relative w-full bg-[#FFF7F7] border-b border-black/[0.03] overflow-hidden py-8 sm:py-10 z-10">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[32%_68%] gap-8 items-center">

          {/* Left Text details */}
          <div className="flex flex-col items-start animate-slide-up">
            <span className="text-[#D71920] text-[12px] font-extrabold uppercase tracking-[2px] font-sans">
              CONTACT US
            </span>
            {/* Double small red underlines */}
            <div className="flex gap-1 mt-1.5 mb-4">
              <div className="w-6 h-[3px] bg-[#D71920]"></div>
              <div className="w-4 h-[3px] bg-[#D71920]/60"></div>
            </div>

            <h2 className="font-outfit text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold leading-[1.1] mb-4 tracking-tight">
              <span className="text-[#111827]">We're Here To </span><span className="text-[#D71920]">Help You</span>
            </h2>

            <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-dark-light max-w-[800px]">
              Get in touch with us for any queries, support<br/>
              or transport related assistance.
            </p>
          </div>

          {/* Right graphics */}
          <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[310px] flex items-center justify-end overflow-hidden z-10 select-none pointer-events-none">
            <img 
              src="/contact_hero_visual.png" 
              alt="Aey-Pee Transport routes" 
              className="w-auto h-auto max-w-full max-h-full object-contain z-0"
              style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,1) 10%)", maskImage: "linear-gradient(to right, transparent 0%, rgba(255,255,255,1) 10%)" }}
            />
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTENT - TWO COLUMN CARDS */}
      <main className="flex-1 w-full max-w-[1450px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT CARD - OUR OFFICES */}
          <div className="bg-white rounded-[24px] border border-black/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-8 sm:p-10 flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(215,25,32,0.06)]">
            
            {/* Header */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D71920]" strokeWidth={2.5} />
                </div>
                <h3 className="font-outfit text-[17px] font-extrabold tracking-wider text-[#111827]">
                  OUR OFFICES
                </h3>
              </div>
              <div className="flex gap-1 mt-2.5 mb-2 pl-[52px]">
                <div className="w-6 h-[2.5px] bg-[#D71920]"></div>
                <div className="w-4 h-[2.5px] bg-[#D71920]/60"></div>
              </div>
            </div>

            {/* 2-Column Office List */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 items-stretch pt-2">
              
              {/* Col 1 (With Timeline Vertical Line Connector) */}
              <div className="relative pl-6 flex flex-col gap-8">
                
                {/* Timeline connector line passing exactly through the center of circles */}
                <div className="absolute left-[42px] top-6 bottom-6 w-[1.5px] bg-[#D71920]/15 z-0"></div>

                {/* HEAD OFFICE */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">HEAD OFFICE</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      301, Sterling Chamber, Poona Street, Dara Bunder, Mumbai - 400 009.
                    </p>
                    <div className="text-[12px] text-dark-light mt-1.5 leading-relaxed font-medium">
                      <div>Email: <a href="mailto:contact@aeypeetransport.com" className="text-[#D71920] hover:underline">contact@aeypeetransport.com</a></div>
                      <div>Landline: 022-23707008</div>
                      <div>Mobile: 09324414168</div>
                    </div>
                  </div>
                </div>

                {/* BHIWANDI BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">BHIWANDI BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      Godown No.3, Metro Complex, D'Souza Compound, Near - Annapurna Hotel, Purna Village, Bhiwandi
                    </p>
                  </div>
                </div>

                {/* ULHASNAGAR BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">ULHASNAGAR BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      A/3-New Priya Darshani CHS, C-Block, Shahad Station Road, Ulhasnagar - 421003
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block w-[1px] bg-black/[0.06] self-stretch"></div>

              {/* Col 2 (With Timeline Vertical Line Connector) */}
              <div className="relative pl-6 flex flex-col gap-8">
                
                {/* Timeline connector line passing exactly through the center of circles */}
                <div className="absolute left-[42px] top-6 bottom-6 w-[1.5px] bg-[#D71920]/15 z-0"></div>

                {/* ANKLESHWAR BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">ANKLESHWAR BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      PLOT No: B-65, Sunder Residency, Gadholi Ankleshwar
                    </p>
                  </div>
                </div>

                {/* AHMEDABAD BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">AHMEDABAD BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      House No.23, Krishna Villa Society, Lamba Turning - Narol - Aslali Road, Gujarat
                    </p>
                  </div>
                </div>

                {/* VAPI BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">VAPI BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      Room No-104, Hiral Jyoti HIRAL PARK, Nutan Nagar, Vapi, Dist - Valsad
                    </p>
                  </div>
                </div>

                {/* RAJKOT BRANCH */}
                <div className="relative flex gap-4 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#FFF5F5] border border-[#D71920]/10 flex items-center justify-center shrink-0 mt-0.5 bg-white z-10 shadow-[0_2px_4px_rgba(215,25,32,0.04)]">
                    <Building2 className="w-4.5 h-4.5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[13.5px] font-extrabold text-[#111827] tracking-tight">RAJKOT BRANCH</h4>
                    <p className="text-[12.5px] text-dark-light leading-relaxed mt-1 font-normal">
                      Mani Deep Chamber, Office No-01, 1st floor, Opposite BOI, Kunrvada Road, Rajkot-360003
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT CARD - FIND US MAP */}
          <div className="bg-white rounded-[24px] border border-black/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.03)] p-8 sm:p-10 flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(215,25,32,0.06)]">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D71920]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-outfit text-[17px] font-extrabold tracking-wider text-[#111827]">
                    FIND US
                  </h3>
                </div>
                <div className="flex gap-1 mt-2.5 mb-2 pl-[52px]">
                  <div className="w-6 h-[2.5px] bg-[#D71920]"></div>
                  <div className="w-4 h-[2.5px] bg-[#D71920]/60"></div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=22.2136,73.0768"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-bold text-[#D71920] hover:bg-[#D71920] hover:text-white flex items-center gap-1.5 bg-[#FFF5F5] px-3.5 py-1.5 rounded-full border border-[#D71920]/15 transition-all duration-200 shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Maps
              </a>
            </div>

            {/* Interactive Google Maps Iframe */}
            <div className="w-full h-[380px] rounded-[18px] overflow-hidden border border-black/[0.06] relative z-10 bg-slate-100">
              <iframe
                src="https://maps.google.com/maps?q=22.2136,73.0768+(AEY-PEE+TRANSPORT+COMPANY+PVT.+LTD.)&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="AEY-PEE TRANSPORT COMPANY PVT. LTD. Location"
              />
            </div>

            {/* Location Address Bar under Map */}
            <div className="bg-[#FFF5F5] rounded-[16px] p-4 border border-[#D71920]/05 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(215,25,32,0.06)]">
                <MapPin className="w-5 h-5 text-[#D71920]" strokeWidth={2.5} />
              </div>
              <p className="text-[12.5px] text-[#111827] font-medium leading-relaxed">
                Padli, Near Parhil-Monti Yadav Road, Taluka Padra, District Vadodara, Gujarat - 391440
              </p>
            </div>

          </div>

        </div>


      {/* 4. BOTTOM CONTACT INFORMATION STRIP */}
      <div className="bg-[#FFF7F7] rounded-[20px] border border-black/[0.03] shadow-[0_8px_30px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-6 p-8 items-center" id="contact-info-strip">
        
        {/* EMAIL US */}
        <div className="flex items-center gap-4 pl-4">
          <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(215,25,32,0.04)]">
            <Mail className="w-5 h-5 text-[#D71920]" strokeWidth={2} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-dark-light uppercase tracking-wider leading-none">EMAIL US</div>
            <a href="mailto:contact@aeypeetransport.com" className="text-[13.5px] font-extrabold text-[#D71920] hover:underline leading-tight mt-1.5 block">
              contact@aeypeetransport.com
            </a>
          </div>
        </div>

        {/* Separator 1 */}
        <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

        {/* CALL US */}
        <div className="flex items-center gap-4 pl-4 md:pl-0">
          <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(215,25,32,0.04)]">
            <Phone className="w-5 h-5 text-[#D71920]" strokeWidth={2} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-dark-light uppercase tracking-wider leading-none">CALL US</div>
            <div className="text-[13.5px] font-extrabold text-[#111827] leading-tight mt-1.5">
              022-23707008 / 09324414168
            </div>
          </div>
        </div>

        {/* Separator 2 */}
        <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

        {/* WORKING HOURS */}
        <div className="flex items-center gap-4 pl-4 md:pl-0">
          <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(215,25,32,0.04)]">
            <Clock className="w-5 h-5 text-[#D71920]" strokeWidth={2} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-dark-light uppercase tracking-wider leading-none">WORKING HOURS</div>
            <div className="text-[13.5px] font-extrabold text-[#111827] leading-tight mt-1.5">
              Mon - Sat: 9:00 AM - 6:00 PM
            </div>
          </div>
        </div>

        {/* Separator 3 */}
        <div className="hidden md:block w-[1px] h-10 bg-black/[0.06]"></div>

        {/* WE ARE READY */}
        <div className="flex items-center gap-4 pl-4 md:pl-0">
          <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(215,25,32,0.04)]">
            <ShieldCheck className="w-5 h-5 text-[#D71920]" strokeWidth={2} />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#D71920] uppercase tracking-wider leading-none">WE ARE READY</div>
            <div className="text-[13px] font-medium text-dark-light leading-tight mt-1">
              Our team is ready to assist you with best support.
            </div>
          </div>
        </div>

      </div>

    </main>
    </div>
  );
}
