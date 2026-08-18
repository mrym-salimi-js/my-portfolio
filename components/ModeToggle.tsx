"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="w-10 h-10 rounded-xl  hover:opacity-[0.7] flex items-center justify-center bg-primary/10">
      <Moon
        onClick={() => setTheme("dark")}
        className="h-[1.2rem] w-[1.2rem] fill-primary stroke-0 cursor-pointer  scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Sun
        onClick={() => setTheme("light")}
        className="absolute h-[1.2rem] w-[1.2rem] text-primary  cursor-pointer  scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
    </div>
  );
}
