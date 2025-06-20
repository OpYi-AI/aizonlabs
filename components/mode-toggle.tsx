"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH = () => {
    console.log(`🎨 Current theme: ${theme}`);
    let newTheme: string;
    
    switch (theme) {
      case "light":
        newTheme = "dark";
        setTheme("dark");
        break;
      case "dark":
        newTheme = "light";
        setTheme("light");
        break;
      case "system":
        newTheme = systemTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        break;
      default:
        newTheme = "light";
        setTheme("light");
        break;
    }
    
    // Ensure localStorage is updated with manual selection
    setTimeout(() => {
      localStorage.setItem('theme', newTheme);
      console.log(`🎨 Theme manually set to: ${newTheme}`);
    }, 100);
  };

  return (
    <button
      onClick={SWITCH}
      className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
    >
      <SunIcon
        size={16}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        size={16}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
