"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Minus,
  X,
  CheckCheck,
  Truck,
  Package,
  Clock,
  Headphones,
  MessageCircle,
  Paperclip,
  Send,
  ExternalLink
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  htmlText?: React.ReactNode;
  time: string;
  isInitial?: boolean;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initial welcome message
  const initialWelcomeMessage: Message = {
    id: "welcome",
    sender: "bot",
    text: "Hello! 👋\n\nWelcome to Aey-Pee Transport.\nHow can I assist you today?",
    htmlText: (
      <span>
        Hello! 👋
        <br />
        <br />
        Welcome to <strong className="text-[#D71920] font-semibold">Aey-Pee Transport.</strong>
        <br />
        How can I assist you today?
      </span>
    ),
    time: "09:30 AM",
    isInitial: true,
  };

  // State starts cleanly with ONLY the welcome message
  const [messages, setMessages] = useState<Message[]>([initialWelcomeMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Listen for open events (e.g. from navbar button)
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-aey-pee-chat", handleOpenChat);
    return () => window.removeEventListener("open-aey-pee-chat", handleOpenChat);
  }, []);

  const formatCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text && !attachedFile) return;

    const time = formatCurrentTime();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: attachedFile ? `${text ? text + " " : ""}[Attached: ${attachedFile}]` : text,
      time: time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setAttachedFile(null);
    setIsTyping(true);

    // Dynamic responses based on conversational context
    setTimeout(() => {
      let botResponseText = "";
      let botResponseHtml: React.ReactNode = null;
      const lower = text.toLowerCase().trim();

      // Check if user is asking to track vs providing an invoice number
      const hasInvoiceNumber = /ap-?\d+/i.test(lower) || /\b\d{4,10}\b/.test(lower) || (lower.startsWith("ap") && lower.length >= 4);

      if (lower === "i want to track my shipment" || lower === "track shipment" || lower === "track my shipment" || (lower.includes("track") && !hasInvoiceNumber && !lower.includes("portal"))) {
        botResponseText = "Sure! Please share your invoice number to track your consignment.";
        botResponseHtml = (
          <span>
            Sure! Please share your invoice number
            <br />
            to track your consignment.
          </span>
        );
      } else if (hasInvoiceNumber) {
        const foundNumber = text.match(/ap-?\d+/i)?.[0] || text.match(/\b\d{4,10}\b/)?.[0] || text.toUpperCase();
        const displayNum = foundNumber.toUpperCase().startsWith("AP") ? foundNumber.toUpperCase() : `AP-${foundNumber}`;
        botResponseText = `Consignment Status for ${displayNum}:\n📍 Current Location: Jaipur Transit Hub\n🚚 Status: In Transit (On Schedule)\n⏱️ Estimated Arrival: Tomorrow by 4:00 PM\nNeed live GPS updates? Visit our Tracking Portal.`;
        botResponseHtml = (
          <div className="space-y-2">
            <p className="font-medium text-[#111827]">
              Consignment Status for <span className="text-[#D71920] font-bold">{displayNum}</span>:
            </p>
            <div className="bg-[#FFF1F1] rounded-lg p-2.5 text-xs text-[#111827] border border-[#D71920]/15 space-y-1">
              <div>📍 <strong>Current Location:</strong> Jaipur Transit Hub</div>
              <div>🚚 <strong>Status:</strong> In Transit (On Schedule)</div>
              <div>⏱️ <strong>Estimated Arrival:</strong> Tomorrow by 4:00 PM</div>
            </div>
            <p className="text-xs text-[#4B5563]">
              Need live GPS updates? Visit our{" "}
              <a href="/track" className="text-[#D71920] font-semibold underline inline-flex items-center gap-0.5">
                Tracking Portal <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        );
      } else if (lower.includes("service") || lower.includes("ftl") || lower.includes("ptl") || lower.includes("warehous")) {
        botResponseText = "We provide comprehensive transport solutions across India:\n• Full Truck Load (FTL)\n• Part Truck Load (PTL)\n• Express Cargo\n• Safe Warehousing & Distribution";
        botResponseHtml = (
          <div className="space-y-1.5">
            <p className="font-semibold text-[#111827]">Our Transport & Logistics Services:</p>
            <ul className="text-xs space-y-1 text-[#374151]">
              <li>📦 <strong>FTL (Full Truckload):</strong> Dedicated fleet across nationwide corridors.</li>
              <li>🚚 <strong>PTL (Part Truckload):</strong> Cost-effective consolidated consignments.</li>
              <li>⚡ <strong>Express Cargo:</strong> Priority time-bound delivery.</li>
              <li>🏢 <strong>Warehousing:</strong> Safe 24/7 monitored storage.</li>
            </ul>
            <p className="text-xs text-[#4B5563] pt-1">
              Explore more on our{" "}
              <a href="/services" className="text-[#D71920] font-semibold underline inline-flex items-center gap-0.5">
                Services page <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        );
      } else if (lower.includes("delivery time") || lower.includes("how long") || lower.includes("duration") || lower.includes("transit time") || lower === "i want to know the delivery time") {
        botResponseText = "Standard transit times across major corridors are 24-48 hours. Please share your pickup and destination cities or consignment number for an exact estimate.";
        botResponseHtml = (
          <div className="space-y-1">
            <p className="font-medium text-[#111827]">Standard Delivery Timelines:</p>
            <p className="text-xs text-[#4B5563]">
              • Intra-state & Metro Corridors: <strong>24 – 36 Hours</strong>
              <br />
              • Inter-state Express: <strong>48 – 72 Hours</strong>
            </p>
            <p className="text-xs text-[#111827] mt-1">
              Please share your <strong>Pickup City</strong> and <strong>Destination</strong> for an instant route estimate!
            </p>
          </div>
        );
      } else if (lower.includes("contact") || lower.includes("support") || lower.includes("phone") || lower.includes("email") || lower.includes("help") || lower.includes("number") || lower === "i want to contact support") {
        botResponseText = "You can reach Aey-Pee Customer Support 24/7:\n📞 Phone: +91 98765 43210\n✉️ Email: support@aeypee.com\n🏢 Head Office: Transport Nagar, Delhi NCR";
        botResponseHtml = (
          <div className="space-y-1.5">
            <p className="font-semibold text-[#111827]">Aey-Pee Customer Support:</p>
            <div className="text-xs space-y-1 text-[#374151] bg-[#FFF1F1] p-2.5 rounded-lg border border-[#D71920]/15">
              <div>📞 <strong>Phone:</strong> +91 98765 43210 (24x7 Helpline)</div>
              <div>✉️ <strong>Email:</strong> support@aeypee.com</div>
              <div>🏢 <strong>Head Office:</strong> Aey-Pee House, Transport Nagar</div>
            </div>
            <p className="text-xs text-[#4B5563]">
              You can also request a callback on our{" "}
              <a href="/contact" className="text-[#D71920] font-semibold underline inline-flex items-center gap-0.5">
                Contact page <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        );
      } else if (lower.includes("other") || lower.includes("quer") || lower === "i have another query") {
        botResponseText = "Sure! Please type your question and I'll help you.";
        botResponseHtml = (
          <div>
            <p className="text-xs text-[#111827]">
              Sure! Please type your question regarding rates, routes, billing, or fleet bookings, and I&apos;ll help you right away.
            </p>
          </div>
        );
      } else {
        botResponseText = "Thank you for reaching out! Our dispatch executive will assist you. Feel free to choose an option below or share your invoice number.";
        botResponseHtml = (
          <div>
            <p className="text-xs text-[#111827]">
              Thank you for reaching out to <span className="text-[#D71920] font-semibold">Aey-Pee Transport</span>.
              <br />
              <br />
              How else can I assist you with your logistics requirements today?
            </p>
          </div>
        );
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponseText,
        htmlText: botResponseHtml,
        time: formatCurrentTime(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickAction = (action: string) => {
    if (action === "Track Shipment") {
      handleSendMessage("I want to track my shipment");
    } else if (action === "Our Services") {
      handleSendMessage("I want to know about your services");
    } else if (action === "Delivery Time") {
      handleSendMessage("I want to know the delivery time");
    } else if (action === "Contact Support") {
      handleSendMessage("I want to contact support");
    } else if (action === "Other Queries") {
      handleSendMessage("I have another query");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file.name);
      inputRef.current?.focus();
    }
  };

  // Do not display chatbot on the home page
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {/* ─── FLOATING TRIGGER BUTTON (When widget is minimized / closed) ─── */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="floating-chat-trigger"
          aria-label="Open Aey-Pee Assistant"
          className="fixed right-5 bottom-5 sm:right-8 sm:bottom-7 z-50 w-[72px] h-[72px] sm:w-[76px] sm:h-[76px] rounded-full bg-white border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_36px_rgba(215,25,32,0.28)] flex items-center justify-center transition-all duration-300 hover:scale-106 active:scale-95 cursor-pointer group"
        >
          <Image
            src="/chatbot.gif"
            alt="Chatbot"
            width={54}
            height={54}
            unoptimized
            className="w-[50px] h-[50px] sm:w-[54px] sm:h-[54px] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      )}

      {/* ─── MAIN CHATBOT FLOATING CONTAINER ─── */}
      {isOpen && (
        <div
          id="aey-pee-chat-widget"
          className="fixed right-3 bottom-3 sm:right-6 sm:bottom-6 z-50 w-[calc(100vw-24px)] sm:w-[620px] h-[610px] sm:h-[630px] max-h-[calc(100vh-24px)] bg-[#FFF7F7] rounded-[20px] shadow-[0_15px_50px_rgba(0,0,0,0.14)] border border-red-100/60 overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95"
          style={{
            boxShadow: "0 15px 50px rgba(0,0,0,0.12), 0 0 0 1px rgba(215,25,32,0.06)",
          }}
        >
          {/* ─── 1. HEADER (Red gradient matching brand) ─── */}
          <header className="h-[85px] bg-[#D71920] px-5 sm:px-6 flex items-center justify-between text-white shrink-0 relative select-none rounded-t-[20px]">
            {/* LEFT: Circular Logo & Titles */}
            <div className="flex items-center gap-3.5">
              <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full bg-white flex items-center justify-center p-1 shadow-sm shrink-0 border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Aey-Pee Logo"
                  width={46}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[17px] sm:text-[18px] font-semibold text-white tracking-tight leading-tight">
                  Aey-Pee Assistant
                </h2>
                <p className="text-[13px] sm:text-[14px] text-white/95 font-normal tracking-wide mt-0.5">
                  How can we help you today?
                </p>
              </div>
            </div>

            {/* RIGHT: Header Controls (Minimize, Close) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Minimize chat"
              >
                <Minus className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close"
                className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </header>

          {/* ─── 2. CHAT BODY WITH LOGISTICS WATERMARK ─── */}
          <div className="relative flex-1 bg-[#FFF7F7] overflow-hidden flex flex-col justify-between">
            
            {/* ── Decorative Logistics Background Watermark ── */}
            <div
              className="absolute top-2 right-2 sm:top-3 sm:right-5 pointer-events-none z-0 select-none"
              style={{ opacity: 0.055 }}
              aria-hidden="true"
            >
              <svg
                width="320"
                height="150"
                viewBox="0 0 340 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#D71920]"
              >
                {/* Truck Cabin & Cargo Outline */}
                <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Motion Trails behind truck */}
                  <line x1="8" y1="52" x2="35" y2="52" strokeDasharray="4 4" strokeWidth="2" />
                  <line x1="16" y1="64" x2="42" y2="64" strokeDasharray="3 3" strokeWidth="2" />
                  <line x1="4" y1="76" x2="30" y2="76" strokeDasharray="5 5" strokeWidth="2" />

                  {/* Main Cargo Box */}
                  <rect x="48" y="24" width="112" height="74" rx="4" fill="none" />
                  <line x1="84" y1="24" x2="84" y2="98" strokeDasharray="3 3" strokeWidth="1.5" />
                  <line x1="120" y1="24" x2="120" y2="98" strokeDasharray="3 3" strokeWidth="1.5" />

                  {/* Cabin */}
                  <path d="M160 46 H188 L206 68 V98 H160 V46 Z" fill="none" />
                  {/* Cabin Window */}
                  <path d="M168 52 H184 L196 68 H168 V52 Z" fill="none" />
                  {/* Headlight */}
                  <circle cx="203" cy="85" r="3" fill="currentColor" />

                  {/* Wheels */}
                  <circle cx="78" cy="98" r="14" fill="#FFF7F7" />
                  <circle cx="78" cy="98" r="6" fill="currentColor" />
                  
                  <circle cx="178" cy="98" r="14" fill="#FFF7F7" />
                  <circle cx="178" cy="98" r="6" fill="currentColor" />

                  {/* Ground line */}
                  <line x1="40" y1="112" x2="216" y2="112" strokeWidth="2" />
                </g>

                {/* Curved Dotted Route to Location Pin */}
                <path
                  d="M206 72 C 240 72, 255 105, 290 85 C 305 76, 315 62, 318 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeDasharray="5 5"
                  strokeLinecap="round"
                />

                {/* Destination Location Pin */}
                <g transform="translate(306, 20)">
                  <path
                    d="M12 0 C 5.37 0, 0 5.37, 0 12 C 0 21, 12 34, 12 34 C 12 34, 24 21, 24 12 C 24 5.37, 18.63 0, 12 0 Z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="11" r="4.5" fill="#FFF7F7" />
                </g>
              </svg>
            </div>

            {/* ── Scrollable Chat Messages Container ── */}
            <div className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-6 py-3.5 space-y-3.5 text-sm font-sans custom-chat-scrollbar">
              
              {messages.map((msg) => {
                if (msg.sender === "bot") {
                  return (
                    <div key={msg.id} className="flex items-start gap-3 max-w-[92%] sm:max-w-[84%] animate-in fade-in slide-in-from-left-2 duration-300">
                      {/* Bot Avatar */}
                      <div className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-red-50 overflow-hidden">
                        <Image src="/chatbot.gif" alt="Chatbot" width={32} height={32} unoptimized className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                      </div>

                      {/* Bot Message Bubble */}
                      <div className="flex flex-col items-start">
                        <div className="bg-white text-[#111827] text-[13.5px] sm:text-[14px] leading-relaxed rounded-[16px] rounded-tl-sm px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/60 max-w-full break-words">
                          {msg.htmlText || (
                            <span className="whitespace-pre-line">{msg.text}</span>
                          )}
                        </div>
                        <span className="text-[11.5px] text-[#9CA3AF] font-normal mt-1 ml-1 select-none">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={msg.id} className="flex flex-col items-end self-end max-w-[85%] sm:max-w-[78%] ml-auto animate-in fade-in slide-in-from-right-2 duration-300">
                      {/* User Message Bubble */}
                      <div className="bg-[#F05A5F] text-white text-[13.5px] sm:text-[14px] font-medium leading-relaxed rounded-[16px] rounded-tr-sm px-4 py-2 shadow-[0_2px_8px_rgba(240,90,95,0.22)] break-words">
                        {msg.text}
                      </div>

                      {/* Timestamp & Double Checkmark */}
                      <div className="flex items-center gap-1.5 mt-1 mr-1 select-none">
                        <span className="text-[11.5px] text-[#9CA3AF] font-normal">
                          {msg.time}
                        </span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#D71920]" strokeWidth={2.5} />
                      </div>
                    </div>
                  );
                }
              })}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3 max-w-[80%] animate-in fade-in duration-200">
                  <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-red-50 overflow-hidden">
                    <Image src="/chatbot.gif" alt="Chatbot" width={32} height={32} unoptimized className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <div className="bg-white rounded-[16px] rounded-tl-sm px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D71920] animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#D71920] animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#D71920] animate-bounce"></span>
                  </div>
                </div>
              )}

              {/* ─── QUICK ACTION BUTTONS ─── */}
              <div className="pt-1.5 pb-0.5 space-y-2 select-none">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleQuickAction("Track Shipment")}
                    className="h-[36px] sm:h-[38px] px-3.5 rounded-[10px] bg-[#FFF1F1] hover:bg-[#FDE5E5] border border-[#D71920]/15 hover:border-[#D71920]/30 text-[#111827] text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-97 cursor-pointer"
                  >
                    <Truck className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span>Track Shipment</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction("Our Services")}
                    className="h-[36px] sm:h-[38px] px-3.5 rounded-[10px] bg-[#FFF1F1] hover:bg-[#FDE5E5] border border-[#D71920]/15 hover:border-[#D71920]/30 text-[#111827] text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-97 cursor-pointer"
                  >
                    <Package className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span>Our Services</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction("Delivery Time")}
                    className="h-[36px] sm:h-[38px] px-3.5 rounded-[10px] bg-[#FFF1F1] hover:bg-[#FDE5E5] border border-[#D71920]/15 hover:border-[#D71920]/30 text-[#111827] text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-97 cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span>Delivery Time</span>
                  </button>
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleQuickAction("Contact Support")}
                    className="h-[36px] sm:h-[38px] px-3.5 rounded-[10px] bg-[#FFF1F1] hover:bg-[#FDE5E5] border border-[#D71920]/15 hover:border-[#D71920]/30 text-[#111827] text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-97 cursor-pointer"
                  >
                    <Headphones className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span>Contact Support</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction("Other Queries")}
                    className="h-[36px] sm:h-[38px] px-3.5 rounded-[10px] bg-[#FFF1F1] hover:bg-[#FDE5E5] border border-[#D71920]/15 hover:border-[#D71920]/30 text-[#111827] text-[13px] font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-97 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                    <span>Other Queries</span>
                  </button>
                </div>
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* ── Attached File Indicator (if any) ── */}
            {attachedFile && (
              <div className="mx-5 sm:mx-6 mb-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between text-xs text-[#111827]">
                <div className="flex items-center gap-2 truncate">
                  <Paperclip className="w-3.5 h-3.5 text-[#D71920]" />
                  <span className="truncate font-medium">{attachedFile}</span>
                </div>
                <button
                  onClick={() => setAttachedFile(null)}
                  className="text-gray-400 hover:text-red-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ─── 3. MESSAGE INPUT & FOOTER ─── */}
          <div className="bg-[#FFF7F7] px-4 sm:px-6 pt-1 pb-3 shrink-0">
            {/* Input Capsule */}
            <div className="w-full bg-white border border-[#E5E7EB] focus-within:border-[#D71920]/40 rounded-full h-[58px] sm:h-[60px] pl-5 pr-2 flex items-center justify-between gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="w-full bg-transparent text-[#111827] placeholder-[#9CA3AF] text-[13.5px] sm:text-[14px] outline-none font-normal"
                id="chat-input"
              />

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />

              {/* Attachment Icon */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Attach Document / LR Copy"
                className="w-9 h-9 flex items-center justify-center text-[#9CA3AF] hover:text-[#4B5563] transition-colors rounded-full hover:bg-gray-100 cursor-pointer shrink-0"
              >
                <Paperclip className="w-5 h-5 stroke-[1.8] -rotate-45" />
              </button>

              {/* Circular Red Send Button */}
              <button
                type="button"
                onClick={() => handleSendMessage()}
                aria-label="Send message"
                id="chat-send-btn"
                className="w-[44px] h-[44px] rounded-full bg-[#D71920] hover:bg-[#C0151B] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(215,25,32,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4 text-white -translate-x-[1px] translate-y-[1px]" />
              </button>
            </div>

            {/* Powered By Footer */}
            <div className="text-center mt-2.5 text-[12.5px] sm:text-[13px] text-[#6B7280] font-normal select-none">
              Powered by{" "}
              <span className="text-[#D71920] font-semibold hover:underline cursor-pointer">
                Aey-Pee Transport
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
