"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/data/contact";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <div className="w-full sm:w-[90%] min-h-130 m-auto mt-30 flex flex-col gap-10">
      <div className="w-full h-auto mt-10 flex flex-col items-center gap-10 relative">
        {/* Section title */}
        <div className="w-auto h-auto flex items-center p-2">
          <div className="w-auto h-auto flex flex-col items-center gap-4">
            <h1 className="text-primary text-4xl font-lalezar">
              {contact.title[lang]}
            </h1>

            <p
              dir={lang === "fa" ? "rtl" : "ltr"}
              className="text-amber-300 text-md text-center"
            >
              {contact.description[lang]}
            </p>
          </div>
        </div>

        {/* Contact Links */}
        <div className="w-auto flex flex-wrap justify-center items-center gap-4">
          {contact.links.map((link) => {
            const isEmail = link.type === "email";

            return isEmail ? (
              <a
                key={link.id}
                href={link.url}
                className="w-20 h-20 p-3 rounded-2xl font-lalezar text-lg flex items-center justify-center text-primary bg-primary/10 hover:opacity-70 transition-opacity"
              >
                {link.title[lang]}
              </a>
            ) : (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 p-3 rounded-2xl font-lalezar text-lg flex items-center justify-center text-primary bg-primary/10 hover:opacity-70 transition-opacity"
              >
                {link.title[lang]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
