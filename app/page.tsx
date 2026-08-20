"use client";

import { heroData } from "@/data/hero";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

export default function Home() {
  const { lang } = useLanguage();

  const data = heroData[lang];

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className="w-full lg:w-[95%] h-[80vh]! flex flex-col xl:flex-row items-center gap-12 p-8 md:p-4"
    >
      <Image
        alt="maryam-salimi"
        src="/maryam-salimi.png"
        width={350}
        height={350}
        priority
        className="animate-soft-blob rounded-[48%_52%_55%_45%_/_45%_50%_50%_55%] dark:brightness-80 border-8 border-amber-200/15 shadow-xl z-100"
      />

      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-3xl text-amber-300 font-lalezar ">
          {data.greeting}
        </h1>
        <h1 className="text-primary text-2xl font-lalezar ">{data.role}</h1>

        <p className="text-ms text-(--third) leading-8 text-justify">
          {data.description}
        </p>

        <div className="w-auto h-auto flex gap-2 flex-wrap text-[#695936] dark:text-primary">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="p-3 text-[0.7rem] rounded-md bg-primary  dark:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
