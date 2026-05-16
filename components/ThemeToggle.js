"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const nextTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
