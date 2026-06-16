"use client";

import { useEffect, useState } from "react";
import { STORE } from "@/lib/content";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://t.me/suxrob5222"
 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegramda yozish"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-flame shadow-flame transition-all duration-300 hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-7 h-7">
        <path d="M21.5 4.5 2.5 12l6 2 2 6 3-4 5 4 3-15.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="absolute inset-0 rounded-full animate-ping -z-10 bg-flame/40" />
    </a>
  );
}
