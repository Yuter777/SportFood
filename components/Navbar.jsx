"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "./LangProvider";
import { NAV, STORE } from "@/lib/content";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button onClick={() => go("top")} aria-label="SportFood — bosh sahifa">
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-sm font-500 text-steel-light transition-colors hover:text-white"
            >
              {item[lang]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Til almashtirgich */}
          <div className="flex overflow-hidden rounded-full border border-white/10 text-xs font-600">
            {["uz", "ru"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l
                    ? "bg-flame text-white"
                    : "text-steel-light hover:text-white"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={STORE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-flame px-5 py-2 text-sm font-600 text-white shadow-flame transition-transform hover:scale-105 sm:block"
          >
            {lang === "uz" ? "Yozish" : "Написать"}
          </a>

          {/* Mobil menyu tugmasi */}
          <button
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menyu"
            aria-expanded={open}
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-all ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      {open && (
        <nav className="border-t border-white/5 bg-ink/95 px-5 py-4 backdrop-blur-md lg:hidden">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="block w-full py-3 text-left text-base font-500 text-steel-light transition-colors hover:text-white"
            >
              {item[lang]}
            </button>
          ))}
          <a
            href={STORE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-flame px-5 py-3 text-center text-base font-600 text-white"
          >
            {lang === "uz" ? "Telegramda yozish" : "Написать в Телеграм"}
          </a>
        </nav>
      )}
    </header>
  );
}
