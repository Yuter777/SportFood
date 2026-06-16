"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "uz", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("uz");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? window.localStorage.getItem("sf_lang") : null;
    if (saved === "uz" || saved === "ru") setLang(saved);
  }, []);

  const update = (next) => {
    setLang(next);
    if (typeof window !== "undefined") window.localStorage.setItem("sf_lang", next);
    document.documentElement.lang = next;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: update }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
