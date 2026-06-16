"use client";

import { useEffect, useRef } from "react";
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
  const scrollerRef = useRef(null);

  // Auto-scroll shu vaqtdan keyin tiklanadi (foydalanuvchi aralashganda kechiktiriladi)
  const resumeAtRef = useRef(0);
  const rafRef = useRef(0);
  const jumpingRef = useRef(false);

  // Mouse drag holati
  const dragRef = useRef({ down: false, moved: false, startX: 0, startScroll: 0 });

  const people = INFLUENCERS.people;
  // Infinite loop uchun ro'yxatni 3 marta takrorlaymiz (o'rtadan boshlaymiz)
  const loop = [...people, ...people, ...people];

  const pauseAuto = (ms = 4000) => {
    resumeAtRef.current = Date.now() + ms;
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = () => el.querySelectorAll("[data-card]");
    const setWidth = () => el.scrollWidth / 3;
    const stepWidth = () => {
      const c = el.querySelector("[data-card]");
      return c ? c.offsetWidth + 24 /* gap-6 */ : 300;
    };

    // O'rtadagi nusxaning boshiga o'tamiz (infinite illuziyasi uchun)
    const center = () => {
      el.scrollLeft = setWidth();
      paint();
    };

    // Markaz-fokus effekti: markazga yaqin karta kattalashadi, chekkalar so'nadi
    const paint = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = null;
      let bestDist = Infinity;
      cards().forEach((c) => {
        const cc = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cc - mid);
        const norm = Math.min(d / (el.clientWidth / 2), 1);
        const scale = 1 - norm * 0.22; // 1.0 → 0.78
        const op = 1 - norm * 0.6; // 1.0 → 0.4
        c.style.transform = `scale(${scale.toFixed(4)})`;
        c.style.opacity = op.toFixed(3);
        c.style.zIndex = String(Math.round((1 - norm) * 10));
        if (d < bestDist) {
          bestDist = d;
          best = c;
        }
      });
      cards().forEach((c) => c.toggleAttribute("data-active", c === best));
    };

    // Infinite jump: chekka nusxaga yetganda bilinmasdan o'rtaga qaytaramiz
    const wrap = () => {
      if (jumpingRef.current) return;
      const w = setWidth();
      if (el.scrollLeft < w * 0.5) {
        jumpingRef.current = true;
        el.scrollLeft += w;
        jumpingRef.current = false;
      } else if (el.scrollLeft > w * 1.5) {
        jumpingRef.current = true;
        el.scrollLeft -= w;
        jumpingRef.current = false;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        wrap();
        paint();
      });
    };

    // Sichqoncha g'ildiragini (vertikal) gorizontal scrollga aylantiramiz
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
      pauseAuto();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", center);

    // Boshlang'ich joylashuv (layout tayyor bo'lgach)
    const t = setTimeout(center, 60);

    // Qadamli avtomatik harakat: bir karta → markazda 1.5-2s pauza → keyingisi
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const auto = reduce
      ? null
      : setInterval(() => {
          if (Date.now() < resumeAtRef.current) return;
          if (dragRef.current.down) return;
          el.scrollBy({ left: stepWidth(), behavior: "smooth" });
        }, 2600);

    return () => {
      clearTimeout(t);
      if (auto) clearInterval(auto);
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", center);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ——— Sichqoncha bilan drag (touch native scroll bilan ishlaydi) ———
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    dragRef.current = {
      down: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.style.scrollSnapType = "none"; // drag paytida snapni o'chiramiz
    el.style.cursor = "grabbing";
    pauseAuto();
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.down) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4) d.moved = true;
    scrollerRef.current.scrollLeft = d.startScroll - dx;
  };

  const endDrag = () => {
    const d = dragRef.current;
    if (!d.down) return;
    d.down = false;
    const el = scrollerRef.current;
    el.style.scrollSnapType = ""; // snap qайта yoqiladi → eng yaqin kartaga yopishadi
    el.style.cursor = "";
    pauseAuto();
  };

  return (
    <section id="trusted" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
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
      </div>

      {/* Premium markaz-fokusli carousel */}
      <Reveal>
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onTouchStart={() => pauseAuto()}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%_-_140px)] py-8 sm:px-[calc(50%_-_160px)]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {loop.map((p, i) => (
            <a
              key={`${p.handle}-${i}`}
              data-card
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i < people.length || i >= people.length * 2}
              tabIndex={i < people.length || i >= people.length * 2 ? -1 : 0}
              onClick={(e) => {
                if (dragRef.current.moved) e.preventDefault();
              }}
              className="group block w-[280px] shrink-0 snap-center rounded-3xl border border-white/5 bg-ink-700 p-8 text-center shadow-card transition-[border-color] duration-300 will-change-transform data-[active]:border-flame/50 sm:w-[320px]"
            >
              {/* Avatar — rasm bo'lsa ko'rsatiladi, bo'lmasa bosh harflar */}
              <div className="relative mx-auto mb-5 h-32 w-32">
                <div className="ig-gradient absolute inset-0 rounded-full p-[3px]">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-ink-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/${p.img}`}
                      alt={p.name}
                      draggable="false"
                      className="h-full w-full select-none rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
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
              <p className="mt-1.5 text-sm text-steel-light">{p.role[lang]}</p>

              <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-steel-light transition-colors group-hover:text-white">
                <InstagramIcon className="h-4 w-4" />
                <span className="truncate">@{p.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
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
