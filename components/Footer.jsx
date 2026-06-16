"use client";

import Logo from "./Logo";
import { useLang } from "./LangProvider";
import { FOOTER, NAV, STORE } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-ink-900 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-steel-light">
              {FOOTER.madeWith[lang]}
            </p>
          </div>

          {/* Tezkor havolalar */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-sm text-steel-light transition-colors hover:text-white"
              >
                {item[lang]}
              </button>
            ))}
          </nav>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex gap-3">
            <a
              href={STORE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-steel-light transition-colors hover:border-flame hover:text-flame"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={STORE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-steel-light transition-colors hover:border-flame hover:text-flame"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path d="M21.5 4.5 2.5 12l6 2 2 6 3-4 5 4 3-15.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`tel:${STORE.phoneHref}`}
              aria-label={lang === "uz" ? "Telefon" : "Телефон"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-steel-light transition-colors hover:border-flame hover:text-flame"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-steel">
          © {year} SportFood. {FOOTER.rights[lang]}.
        </div>
      </div>
    </footer>
  );
}
