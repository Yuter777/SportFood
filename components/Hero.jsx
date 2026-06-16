"use client";

import { useLang } from "./LangProvider";
import { HERO, STORE } from "@/lib/content";

export default function Hero() {
  const { lang } = useLang();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="overflow-hidden relative pt-32 pb-20 carbon-texture md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-flame/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-steel/20 blur-[120px]" />

      <div className="relative px-5 mx-auto max-w-7xl md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full animate-pulse-glow bg-flame" />
            <span className="text-xs uppercase font-600 tracking-ultra text-flame-light">
              {HERO.eyebrow[lang]}
            </span>
          </div>

          <h1
            className="animate-fade-up font-display text-5xl font-700 leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.1s" }}
          >
            {HERO.title[lang][0]}
            <br />
            <span className="text-transparent bg-clip-text bg-flame-grad">
              {HERO.title[lang][1]}
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed animate-fade-up text-steel-light md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {HERO.subtitle[lang]}
          </p>

          <div
            className="flex flex-col gap-3 justify-center items-center mt-9 animate-fade-up sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href={STORE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full rounded-full bg-flame px-8 py-4 text-base font-700 text-white shadow-flame transition-all hover:scale-105 hover:shadow-[0_15px_50px_-10px_rgba(232,40,31,0.7)] sm:w-auto"
            >
              {HERO.ctaPrimary[lang]}
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              onClick={() => scrollTo("products")}
              className="px-8 py-4 w-full text-base text-white rounded-full border transition-colors border-white/15 font-600 hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              {HERO.ctaSecondary[lang]}
            </button>
          </div>

          {/* Statistikalar */}
          <div
            className="grid grid-cols-3 gap-4 pt-10 mx-auto mt-16 max-w-2xl border-t animate-fade-up border-white/10"
            style={{ animationDelay: "0.4s" }}
          >
            {HERO.stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-700 text-flame md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-steel-light md:text-sm">
                  {s[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
