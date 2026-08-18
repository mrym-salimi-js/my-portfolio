"use client";

import { useLanguage } from "./LanguageProvider";

export default function LangToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm text-primary transition-opacity hover:opacity-70"
    >
      {lang === "en" ? "FA" : "EN"}
    </button>
  );
}
