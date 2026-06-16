"use client";

import { useLang } from "./LangProvider";
import { INFLUENCERS } from "@/lib/content";
import Reveal from "./Reveal";

// Bosh harflardan avatar (rasm bo'lmasa fallback sifatida)
function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.43 8.5 3.42 8.85 3.42 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06zm0 8.15A3.21 3.21 0 1 0 12 8.79a3.21 3.21 0 0 0 0 6.42zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}

export default function Influencers() {
  const { lang } = useLang();

  return (
    <section id="trusted" className="relative bg-ink-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-600 uppercase tracking-ultra text-flame">
              {lang === "uz" ? "Ishonch" : "Доверие"}
            </span>
            <h2 className="mt-3 font-display text-4xl font-700 text-white md:text-5xl">
              {INFLUENCERS.heading[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-steel-light md:text-lg">
              {INFLUENCERS.sub[lang]}
            </p>
          </div>
        </Reveal>

        {/* Avtomatik gorizontal scroll (sichqoncha ustida to'xtaydi) */}
        <Reveal>
          <div className="marquee-pause marquee-mask overflow-hidden">
            <div className="animate-marquee flex gap-6 py-2">
              {[...INFLUENCERS.people, ...INFLUENCERS.people].map((p, i) => (
                <a
                  key={`${p.handle}-${i}`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={i >= INFLUENCERS.people.length}
                  className="group block w-64 shrink-0 rounded-3xl border border-white/5 bg-ink-700 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/40 hover:shadow-card"
                >
                  {/* Avatar — rasm bo'lsa ko'rsatiladi, bo'lmasa bosh harflar */}
                  <div className="relative mx-auto mb-5 h-32 w-32">
                    <div className="ig-gradient absolute inset-0 rounded-full p-[3px]">
                      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-ink-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/${p.img}`}
                          alt={p.name}
                          className="h-full w-full rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling.style.display =
                              "flex";
                          }}
                        />
                        <span
                          className="hidden h-full w-full items-center justify-center font-display text-4xl font-700 text-flame-light"
                          style={{ display: "none" }}
                        >
                          {initials(p.name)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-600 leading-tight text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-steel-light">
                    {p.role[lang]}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-steel-light transition-colors group-hover:text-white">
                    <InstagramIcon className="h-4 w-4" />
                    <span className="truncate">@{p.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-center text-sm text-steel">
            {lang === "uz"
              ? "Va yana ko'plab sportchi va bloggerlar"
              : "И многие другие спортсмены и блогеры"}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
