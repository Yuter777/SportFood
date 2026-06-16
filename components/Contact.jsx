"use client";

import { useLang } from "./LangProvider";
import { CONTACT, STORE } from "@/lib/content";
import Reveal from "./Reveal";

function Icon({ type, className = "h-6 w-6" }) {
  const paths = {
    phone: (
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    telegram: (
      <path
        d="M21.5 4.5 2.5 12l6 2 2 6 3-4 5 4 3-15.5z M8.5 14l9-7-7 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function Contact() {
  const { lang } = useLang();

  const cards = [
    {
      type: "phone",
      label: CONTACT.phoneLabel[lang],
      value: STORE.phone,
      href: `tel:${STORE.phoneHref}`,
    },
    {
      type: "telegram",
      label: CONTACT.tgLabel[lang],
      value: "@sportfooduz",
      href: STORE.telegram,
      external: true,
    },
    {
      type: "instagram",
      label: CONTACT.igLabel[lang],
      value: "@sportfood.uz",
      href: STORE.instagram,
      external: true,
    },
    {
      type: "clock",
      label: CONTACT.hoursLabel[lang],
      value: STORE.hours[lang],
    },
  ];

  return (
    <section id="contact" className="relative bg-ink-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-600 uppercase tracking-ultra text-flame">
              {lang === "uz" ? "Aloqa" : "Контакты"}
            </span>
            <h2 className="mt-3 font-display text-4xl font-700 text-white md:text-5xl">
              {CONTACT.heading[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-steel-light md:text-lg">
              {CONTACT.sub[lang]}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            const linkProps = c.href
              ? {
                  href: c.href,
                  ...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {};
            return (
              <Reveal key={c.type} delay={i * 60}>
                <Wrapper
                  {...linkProps}
                  className={`group flex h-full flex-col items-center rounded-2xl border border-white/5 bg-ink-700 p-7 text-center transition-all duration-300 ${
                    c.href
                      ? "hover:-translate-y-1 hover:border-flame/40 hover:shadow-card"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-flame/10 text-flame transition-colors group-hover:bg-flame group-hover:text-white">
                    <Icon type={c.type} />
                  </div>
                  <div className="text-xs font-600 uppercase tracking-wider text-steel">
                    {c.label}
                  </div>
                  <div className="mt-1.5 font-display text-base font-600 text-white">
                    {c.value}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        {/* Katta CTA */}
        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-flame-grad p-1">
            <div className="carbon-texture rounded-[22px] px-8 py-12 text-center md:px-16">
              <h3 className="font-display text-3xl font-700 text-white md:text-4xl">
                {lang === "uz"
                  ? "Maslahat bepul — savol bering"
                  : "Консультация бесплатна — задайте вопрос"}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-steel-light">
                {lang === "uz"
                  ? "Sizga nima kerakligini birga aniqlaymiz"
                  : "Вместе определим, что вам нужно"}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={STORE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-flame px-8 py-4 font-700 text-white shadow-flame transition-transform hover:scale-105 sm:w-auto"
                >
                  Telegram
                </a>
                <a
                  href={`tel:${STORE.phoneHref}`}
                  className="w-full rounded-full border border-white/20 px-8 py-4 font-600 text-white transition-colors hover:bg-white/5 sm:w-auto"
                >
                  {lang === "uz" ? "Qo'ng'iroq qilish" : "Позвонить"}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
