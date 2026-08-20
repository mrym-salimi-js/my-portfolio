"use client";

import { heroData } from "@/data/hero";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { lang } = useLanguage();

  const data = heroData[lang];

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={`w-full lg:w-[95%] min-h-[80vh]!  flex flex-col xl:flex-row items-center gap-12 p-4 md:p-4 ${lang === "en" ? "lg:mr-20" : "lg:ml-20"}  `}
    >
      <Image
        alt="maryam-salimi"
        src="/maryam-salimi.png"
        width={350}
        height={350}
        priority
        className="animate-soft-blob rounded-[48%_52%_55%_45%_/_45%_50%_50%_55%] dark:brightness-80 border-8 border-amber-200/15 shadow-xl z-100"
      />

      <div className="flex flex-col gap-4 items-center md:items-start">
        <h1 className="text-3xl text-amber-300 font-lalezar ">
          {data.greeting}
        </h1>
        <h1 className="text-primary text-2xl font-lalezar ">{data.role}</h1>

        <p className="text-ms text-(--third) leading-8 text-justify">
          {data.description}
        </p>

        <div className="w-auto h-auto flex gap-2 flex-wrap items-center md:items-start text-[#695936] dark:text-primary">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="p-3 text-[0.7rem] rounded-md bg-primary  dark:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="w-auto border-t  pt-3 border-primary/10 h-auto flex gap-2 flex-wrap text-[#695936] items-center md:items-start dark:text-primary">
          {data.usefulLinks.map((link) => (
            <Link
              target="_blank"
              href={link.url}
              className="w-30 p-3 bg-primary rounded-xl  hover:opacity-[0.7]  text-yellow-900 flex items-center gap-3 cursor-pointer "
              key={link.id}
            >
              <LinkIcon className="size-4 " />
              <span className="w-auto  text-sm ">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
