"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TvMinimal,
  UserRound,
  LibraryBig,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      id: "home",
      title: {
        fa: "خانه",
        en: "Home",
      },
      icon: TvMinimal,
      href: "/",
    },
    {
      id: "about",
      title: {
        fa: "درباره",
        en: "About",
      },
      icon: UserRound,
      href: "/about",
    },
    {
      id: "projects",
      title: {
        fa: "پروژه‌ها",
        en: "Projects",
      },
      icon: LibraryBig,
      href: "/projects",
    },
    {
      id: "experience",
      title: {
        fa: "تجربه",
        en: "Experience",
      },
      icon: BriefcaseBusiness,
      href: "/experience",
    },
    {
      id: "contact",
      title: {
        fa: "ارتباط",
        en: "Contact",
      },
      icon: Mail,
      href: "/contact",
    },
  ];

  const { lang } = useLanguage();

  return (
    <nav className=" fixed bottom-3 left-1/2 z-50 w-[calc(100%-24px)] max-w-md -translate-x-1/2 md:hidden rounded-2xl border bg-background/80 p-2 shadow-2xl backdrop-blur-xl block ">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
                relative
                flex
                min-w-14
                flex-col
                items-center
                justify-center
                gap-1
                rounded-xl
                px-2
                py-2
                transition-all
                duration-200
                active:scale-90
                ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              <Icon
                className={`size-5 transition-all duration-200 ${
                  isActive ? "stroke-[2.5]" : "stroke-[1.8]"
                }`}
              />

              <span className="text-[10px] font-medium">
                {item.title[lang]}
              </span>

              {isActive && (
                <span className="absolute -top-1 size-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
