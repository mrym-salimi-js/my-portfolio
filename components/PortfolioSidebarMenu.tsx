"use client";

import Link from "next/link";
import {
  Code2,
  Mail,
  LibraryBig,
  TvMinimal,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export default function PortfolioSidebarMenu() {
  const { lang } = useLanguage();

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
        fa: "درباره من",
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
        fa: "ارتباط با من",
        en: "Contact",
      },
      icon: Mail,
      href: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={`w-auto h-auto hidden md:block `}
    >
      <SidebarProvider>
        <Sidebar
          side={lang === "en" ? "left" : "right"}
          collapsible="icon"
          className={`${lang === "en" ? "ml-6" : "mr-6"}  h-[90%]   w-60 my-auto rounded-2xl border overflow-hidden`}
        >
          <SidebarHeader>
            <div className="flex w-full items-center gap-3 border-b p-1 py-4">
              <Code2 className="size-6 shrink-0 text-amber-400" />

              <p className="whitespace-nowrap font-mono text-amber-400 group-data-[collapsible=icon]:hidden">
                Maryam Salimi
              </p>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex w-[90%] m-auto h-full items-center gap-6 rounded-md p-3 outline-none transition-all duration-75 hover:text-primary! text-(--third)/80  dark:hover:bg-primary/10 ${pathname === item.href && `text-primary`}`}
                    >
                      <Icon className="size-4.5 shrink-0 " />

                      <p className="whitespace-nowrap text-sm  group-data-[collapsible=icon]:hidden">
                        {item.title[lang]}
                      </p>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter />
        </Sidebar>

        <main className="min-h-screen ">
          <div
            className={`w-10 h-10 rounded-xl mt-6 ${lang === "en" ? "ml-4" : "mr-4"} hover:opacity-[0.7] flex items-center justify-center bg-primary/10`}
          >
            <SidebarTrigger className="text-primary " />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
