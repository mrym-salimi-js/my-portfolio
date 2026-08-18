"use client";

import { useEffect, useState } from "react";

type Language = "fa" | "en";

export function useLanguage() {
  const [lang, setLang] = useState<Language>("fa");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "fa" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  return lang;
}
