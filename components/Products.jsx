"use client";

import { useLang } from "./LangProvider";
import { PRODUCTS } from "@/lib/content";
import ProductIcon from "./ProductIcon";
import Reveal from "./Reveal";

export default function Products() {
  const { lang } = useLang();

  return (
    <section id="products" className="relative bg-ink-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="text-xs font-600 uppercase tracking-ultra text-flame">
              {PRODUCTS.sub[lang]}
            </span>
            <h2 className="mt-3 font-display text-4xl font-700 text-white md:text-5xl">
              {PRODUCTS.heading[lang]}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.items.map((item, i) => (
            <Reveal key={item.icon} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-white/5 bg-ink-700 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:bg-ink-600 hover:shadow-card">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-flame/10 text-flame transition-colors group-hover:bg-flame group-hover:text-white">
                  <ProductIcon name={item.icon} />
                </div>
                <h3 className="font-display text-lg font-600 text-white">
                  {item[lang].name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-light">
                  {item[lang].desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
