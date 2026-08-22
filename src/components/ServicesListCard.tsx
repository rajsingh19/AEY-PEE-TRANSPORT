"use client";

import { Truck, CheckCircle } from "lucide-react";

export default function ServicesListCard() {
  const services = [
    {
      name: "On-Demand Delivery",
      desc: "The ability to call in your delivery order at anytime."
    },
    {
      name: "Scheduled Delivery",
      desc: "Arrange a day & time for us to deliver & Bi-day scheduled Delivery."
    },
    {
      name: "Holiday's Delivery",
      desc: "Yes, We deliver on Holidays."
    },
    {
      name: "Rush",
      desc: "Rush Service provides for rapid delivery of your time sensitive package."
    },
    {
      name: "Normal & Economy",
      desc: "For your less sensitive packages we offer Economy Service."
    },
    {
      name: "Value Added Service",
      desc: "For situations that your package is too important to deliver immediately."
    }
  ];

  return (
    <div className="w-full bg-white rounded-[24px] border border-black/[0.03] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(215,25,32,0.10)] hover:border-[#D71920]/25 flex flex-col justify-start animate-fade-in">
      
      {/* HEADER SECTION */}
      <div className="flex items-center gap-3.5 mb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff0f0] text-primary shrink-0">
          <Truck className="w-[22px] h-[22px]" strokeWidth={2} />
        </div>
        <h3 className="font-outfit text-base font-bold text-primary tracking-wide uppercase">
          OUR SERVICES INCLUDE
        </h3>
      </div>
      <div className="w-16 h-[2px] bg-primary mb-5 ml-[62px]"></div>

      {/* CHECKLIST - TIGHT SPACING */}
      <ul className="flex flex-col gap-[11px] list-none">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-dark-light">
              <span className="font-bold text-dark">{service.name}:</span> {service.desc}
            </p>
          </li>
        ))}
      </ul>

    </div>
  );
}
