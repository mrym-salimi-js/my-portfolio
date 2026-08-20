"use client";

import { ImagesSlider } from "@/components/ImagesSlider";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";
import {
  CheckCircle,
  LibraryBig,
  Link as LinkIcon,
  Loader,
  TvMinimal,
} from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const { lang } = useLanguage();

  const data = projects;

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className="w-full rounded-2xl border bg-foreground/50 p-2 md:p-8"
    >
      <div className="flex flex-col gap-4 p-2">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="w-auto h-auto flex gap-3 items-center text-amber-300">
            <LibraryBig className="size-4.5 shrink-0 " />
            <h1 className="font-lalezar text-3xl ">{data.title[lang]}</h1>
          </div>
          <p className="text-[0.95rem] text-amber-300 mr-8">
            {data.intro[lang]}
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col p-2">
          {data.projects.map((item) => (
            <div key={item.id} className="w-full h-auto flex- flex-col ">
              <div
                className={`w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-7 items-center relative border-amber-300 ${lang === "en" ? "border-l" : "border-r"}  p-6`}
              >
                <div
                  className={` w-full lg:w-[60%] leading-8 text-justify  text-zinc-700  dark:text-amber-50  `}
                >
                  {/* Timeline Dot */}
                  <span
                    className={` absolute top-8  h-5 w-5 animate-pulse rounded-full border-4 border-background/70  bg-primary ${lang === "en" ? "-left-2.5" : "-right-2.5"} `}
                  />

                  {/* Timeline Title */}
                  <span className="mb-2 block text-lg font-semibold text-amber-300">
                    {item.id}. {item.title[lang]} . {item.duration[lang]}
                  </span>
                  {/* Timeline Status*/}
                  <div
                    className={`flex items-center gap-3  ${item.status["en"] === "Completed" ? `text-green-400` : `text-red-400`}`}
                  >
                    {item.status["en"] === "Completed" ? (
                      <CheckCircle className="size-4 text-green-400" />
                    ) : (
                      <Loader className="size-4 text-red-400" />
                    )}

                    <p className="text-[0.7rem] ">{item.status[lang]}</p>
                  </div>
                  {/* Timeline Type*/}
                  <div className="flex items-center gap-3 py-2">
                    <TvMinimal className="size-4 text-amber-300" />
                    <p className="text-sm ">{item.role[lang]}</p>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <span className="min-w-3 h-1 rounded-full bg-amber-300"></span>
                    <p className="text-sm ">{item.type[lang]}</p>
                  </div>

                  {/* Description */}
                  {item.description[lang]}
                </div>
                {/*Image */}
                <ImagesSlider images={item.images} />
              </div>
              <div
                className={` w-full lg:w-[60%]  relative  border-amber-300  p-6  leading-8 text-justify  text-zinc-700  dark:text-amber-50  ${lang === "en" ? "border-l" : "border-r"} bottom-1`}
              >
                {/* Timeline Dot */}
                <span
                  className={` absolute top-8  h-5 w-5 animate-pulse rounded-full border-4 border-background/70  bg-primary ${lang === "en" ? "-left-2.5" : "-right-2.5"} `}
                />
                {/*Timeline responsibilities */}
                {item.responsibilities[lang].map((res, index) => {
                  return (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <span className="min-w-3 h-1 rounded-full bg-amber-300"></span>
                      <p className="text-sm ">{res}</p>
                    </div>
                  );
                })}
              </div>
              <div
                className={` w-full lg:w-[60%]  relative  border-amber-300  p-6  leading-8 text-justify  text-zinc-700  dark:text-amber-50  ${lang === "en" ? "border-l" : "border-r"} bottom-1`}
              >
                {/* Timeline Dot */}
                <span
                  className={` absolute top-8  h-5 w-5 animate-pulse rounded-full border-4 border-background/70  bg-primary ${lang === "en" ? "-left-2.5" : "-right-2.5"} `}
                />
                {/*Timeline technologies */}
                <div className="w-auto h-auto flex gap-2  flex-wrap text-[#695936] dark:text-primary">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[0.7rem] rounded-md bg-primary  dark:bg-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/*Links */}
                <div className="flex flex-col gap-3 mt-4 ">
                  {item.links.map((link) => {
                    return (
                      <Link
                        href={link.url}
                        key={link.id}
                        className="flex gap-3 items-center text-amber-300"
                      >
                        <LinkIcon className="size-4 text-amber-300 -rotate-12" />
                        <p className="text-sm">{link.title[lang]}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
