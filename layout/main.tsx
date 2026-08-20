"use client";

import LangToggle from "@/components/LangToggle";
import { useLanguage } from "@/components/LanguageProvider";
import MobileBottomNav from "@/components/MobileBottomNav";
import { ModeToggle } from "@/components/ModeToggle";
import PortfolioSidebarMenu from "@/components/PortfolioSidebarMenu";
import { Code2 } from "lucide-react";

interface LanguageLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LanguageLayoutProps) {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full flex flex-col ${lang === "en" ? "md:flex-row" : "md:flex-row-reverse"}    md:p-3 bg-background`}
    >
      <PortfolioSidebarMenu />
      <MobileBottomNav />

      <div className="w-full mb-20 md:mb-0  h-auto px-6 py-4 flex flex-col gap-5 ">
        <header className="w-full h-12   flex flex-row-reverse items-center justify-between ">
          <div
            className={`w-full h-full flex gap-2 items-center ${lang === "en" ? "justify-end" : "justify-start"}`}
          >
            <ModeToggle />
            <LangToggle />
          </div>
          {/*Logo */}
          <div className="flex gap-3 items-center md:hidden ">
            <Code2 className="size-6 shrink-0 text-amber-400" />

            <p className="whitespace-nowrap font-mono text-amber-400 group-data-[collapsible=icon]:hidden">
              Maryam Salimi
            </p>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
