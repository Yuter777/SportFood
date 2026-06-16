"use client";

import { useLang } from "./LangProvider";
import { STORE } from "@/lib/content";
import Reveal from "./Reveal";

export default function Location() {
  const { lang } = useLang();

  return (
    <section id="location" className="carbon-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-xs font-600 uppercase tracking-ultra text-flame">
              {lang === "uz" ? "Bizni toping" : "Найдите нас"}
            </span>
            <h2 className="mt-3 font-display text-4xl font-700 text-white md:text-5xl">
              {lang === "uz" ? "Manzilimiz" : "Наш адрес"}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
            {/* Yandex xarita iframe */}
            <iframe
              title="SportFood — Yandex Maps"
              src="https://yandex.uz/map-widget/v1/?ll=69.234659%2C41.304411&z=17&pt=69.234359,41.304152,pm2rdm"
              className="h-[420px] w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 flex justify-center">
            <a
              href={STORE.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 text-base font-600 text-white shadow-flame transition-transform hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {lang === "uz"
                ? "Yandex Xaritada ochish"
                : "Открыть в Яндекс Картах"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
