"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Globe, Menu } from "lucide-react";

interface NavbarProps {
  activePage: "home" | "services" | "about" | "consignment" | "contact";
}

export default function Navbar({ activePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar w-full border-b border-black/[0.06] sticky top-0 left-0 bg-white z-50 h-[88px] flex items-center shadow-sm">
      <div className="w-full max-w-[1450px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO & BRANDING (LEFT) */}
        <Link href="/" className="brand-logo flex items-center gap-3.5 shrink-0" id="nav-brand">
          <img 
            src="/logo.png?v=3" 
            alt="Aey-Pee Logo" 
            className="h-[53px] w-[48px] object-contain shrink-0"
          />
          <div className="brand-text flex flex-col justify-center">
            <h1 className="company-title font-outfit text-[17px] sm:text-[18px] font-bold leading-[1.25] text-[#111827] tracking-tight">
             <span className="block">Aey-Pee Transport</span>  
            {/* <span className="block">Company Pvt. Ltd.</span>*/}
            </h1>
            <p className="company-tagline text-[10.5px] sm:text-[11px] font-bold text-[#D71920] uppercase tracking-[0.8px] mt-[2px]">
              Delivering Trust. Moving India.
            </p>
          </div>
        </Link>

        {/* MENU NAVIGATION (CENTERED) */}
        <nav className="hidden lg:flex items-center justify-center flex-1 px-4">
          <ul className="nav-links flex items-center gap-[20px] xl:gap-[28px] list-none mx-auto">
            <li>
              <Link 
                href="/" 
                className={`nav-item text-[13.5px] font-bold tracking-[0.3px] transition-colors py-2.5 px-3.5 rounded-[20px] ${
                  activePage === "home" 
                    ? "bg-[#D71920] text-white shadow-[0_3px_8px_rgba(215,25,32,0.15)] hover:bg-[#D71920]/90" 
                    : "text-dark-light hover:text-[#D71920]"
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`nav-item text-[13.5px] font-bold tracking-[0.3px] transition-colors py-2.5 px-3.5 rounded-[20px] ${
                  activePage === "about" 
                    ? "bg-[#D71920] text-white shadow-[0_3px_8px_rgba(215,25,32,0.15)] hover:bg-[#D71920]/90" 
                    : "text-dark-light hover:text-[#D71920]"
                }`}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`nav-item text-[13.5px] font-bold tracking-[0.3px] transition-colors py-2.5 px-3.5 rounded-[20px] ${
                  activePage === "services" 
                    ? "bg-[#D71920] text-white shadow-[0_3px_8px_rgba(215,25,32,0.15)] hover:bg-[#D71920]/90" 
                    : "text-dark-light hover:text-[#D71920]"
                }`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                href="/track" 
                className={`nav-item text-[13.5px] font-bold tracking-[0.3px] transition-colors py-2.5 px-3.5 rounded-[20px] ${
                  activePage === "consignment" 
                    ? "bg-[#D71920] text-white shadow-[0_3px_8px_rgba(215,25,32,0.15)] hover:bg-[#D71920]/90" 
                    : "text-dark-light hover:text-[#D71920]"
                }`}
              >
                TRACK CONSIGNMENT
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`nav-item text-[13.5px] font-bold tracking-[0.3px] transition-colors py-2.5 px-3.5 rounded-[20px] ${
                  activePage === "contact" 
                    ? "bg-[#D71920] text-white shadow-[0_3px_8px_rgba(215,25,32,0.15)] hover:bg-[#D71920]/90" 
                    : "text-dark-light hover:text-[#D71920]"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* NAVIGATION ACTIONS (RIGHT) */}
        <div className="nav-actions flex items-center gap-3 sm:gap-4 shrink-0">

          {/* Search Button - Light Bordered Rounded Square */}
          <button className="action-search hidden sm:flex items-center justify-center w-11 h-11 rounded-lg border border-black/[0.08] hover:bg-black/[0.04] text-[#111827] transition-all duration-300 hover:scale-105" aria-label="Search" id="btn-search">
            <Search className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </button>

          {/* Track Now Button - Large Red Rounded Button with Globe */}
          <Link href="/track" className="btn-track-now inline-flex items-center gap-2 bg-[#D71920] hover:bg-[#C90016] text-white py-3 px-6 rounded-lg text-[13.5px] font-bold tracking-[0.5px] shadow-[0_4px_12px_rgba(215,25,32,0.12)] hover:scale-102 hover:shadow-[0_6px_18px_rgba(215,25,32,0.22)] transition-all duration-300" id="btn-track-now">
            <Globe className="w-[18px] h-[18px]" strokeWidth={2.5} />
            <span>TRACK NOW</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle lg:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-gray-100 hover:bg-black/[0.08] text-dark transition-colors" 
            aria-label="Toggle Menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-toggle-btn"
          >
            <Menu className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* MOBILE NAVIGATION MENU PANEL */}
      {mobileMenuOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white border-b border-black/[0.08] p-6 flex flex-col gap-4 shadow-lg lg:hidden z-40 animate-fade-in">
          <ul className="flex flex-col gap-3 list-none">
            <li>
              <Link 
                href="/" 
                className={`block w-full py-2.5 px-4 font-bold rounded-lg text-sm transition-colors ${
                  activePage === "home"
                    ? "bg-[#D71920] text-white"
                    : "text-dark-light hover:text-[#D71920] hover:bg-gray-50"
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block w-full py-2.5 px-4 font-bold rounded-lg text-sm transition-colors ${
                  activePage === "about"
                    ? "bg-[#D71920] text-white"
                    : "text-dark-light hover:text-[#D71920] hover:bg-gray-50"
                }`}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`block w-full py-2.5 px-4 font-bold rounded-lg text-sm transition-colors ${
                  activePage === "services"
                    ? "bg-[#D71920] text-white"
                    : "text-dark-light hover:text-[#D71920] hover:bg-gray-50"
                }`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                href="/track" 
                className={`block w-full py-2.5 px-4 font-bold rounded-lg text-sm transition-colors ${
                  activePage === "consignment"
                    ? "bg-[#D71920] text-white"
                    : "text-dark-light hover:text-[#D71920] hover:bg-gray-50"
                }`}
              >
                TRACK CONSIGNMENT
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block w-full py-2.5 px-4 font-bold rounded-lg text-sm transition-colors ${
                  activePage === "contact"
                    ? "bg-[#D71920] text-white"
                    : "text-dark-light hover:text-[#D71920] hover:bg-gray-50"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
