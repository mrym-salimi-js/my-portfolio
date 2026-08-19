"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { about } from "@/data/about";
import { UserRound } from "lucide-react";

export default function About() {
  const { lang } = useLanguage();

  const data = about;

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className="w-full  rounded-2xl border bg-foreground/50 p-2 md:p-8"
    >
      <div className="flex flex-col gap-4 p-2">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="w-auto h-auto flex gap-3 items-center text-amber-300">
            <UserRound className="size-4.5 shrink-0 " />
            <h1 className="font-lalezar text-3xl ">{data.title[lang]}</h1>
          </div>
          <p className="text-[0.95rem] text-amber-300 mr-8">
            {data.intro[lang]}
          </p>
        </div>
        {/* Timeline */}
        <div className="flex flex-col p-2">
          {data.timeline.map((item) => (
            <div key={item.id} className="relative">
              <p
                className={`
                  relative
                  border-amber-300
                  p-6
                  leading-8
                  text-justify
                  text-ms
                  text-zinc-700
                  dark:text-amber-50
                  ${lang === "en" ? "border-l" : "border-r"}
                `}
              >
                {/* Timeline Dot */}
                <span
                  className={`
                    absolute
                    top-8
                    h-5
                    w-5
                    animate-pulse
                    rounded-full
                    border-4
                    border-background/70
                    bg-primary
                    ${lang === "en" ? "-left-2.5" : "-right-2.5"}
                  `}
                />

                {/* Timeline Title */}
                <span className="mb-2 block text-lg font-semibold text-amber-300">
                  {item.title[lang]}
                </span>

                {/* Description */}
                {item.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
