import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import PortfolioSidebarMenu from "@/components/PortfolioSidebarMenu";
import { ModeToggle } from "@/components/ModeToggle";
import LangToggle from "@/components/LangToggle";
import { LanguageProvider } from "@/components/LanguageProvider";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Code2 } from "lucide-react";
import MainLayout from "@/layout/main";

// const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "maryam salimi",
  icons: { icon: "/logo.svg" },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const iranSans = localFont({
  src: "../public/fonts/IRANSansWeb.ttf",
  variable: "--font-iran-sans",
  display: "swap",
});
export const lalezar = localFont({
  src: "../public/fonts/Lalezar-Regular.ttf",
  variable: "--font-lalezar",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        iranSans.variable,
        lalezar.variable,
      )}
    >
      <body className="min-h-full flex flex-col ">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MainLayout>{children}</MainLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
