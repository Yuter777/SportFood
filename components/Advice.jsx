"use client";

import { useLang } from "./LangProvider";
import { ADVICE } from "@/lib/content";
import Reveal from "./Reveal";

export default function Advice() {
  const { lang } = useLang();

  return (
    <section
      id="advice"
      className="carbon-texture relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-flame/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Chap: sarlavha */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-600 uppercase tracking-ultra text-flame">
                {lang === "uz" ? "Bizning yondashuv" : "Наш подход"}
              </span>
              <h2 className="mt-3 font-display text-4xl font-700 leading-tight text-white md:text-5xl">
                {ADVICE.heading[lang]}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
                {ADVICE.sub[lang]}
              </p>
            </div>
          </Reveal>

          {/* O'ng: qadamlar */}
          <div className="space-y-4">
            {ADVICE.steps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-5 rounded-2xl border border-white/5 bg-ink-700/60 p-6 backdrop-blur-sm transition-colors hover:border-flame/30">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flame-grad font-display text-xl font-700 text-white shadow-flame">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-600 text-white">
                      {step[lang].title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-light md:text-base">
                      {step[lang].desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
