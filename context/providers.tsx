"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeEnhancer />
      {children}
    </NextThemesProvider>
  );
}

function ThemeEnhancer() {
  useEffect(() => {
    // Enhanced theme detection on first load
    const initializeTheme = () => {
      // Check for existing theme in localStorage
      const savedTheme = localStorage.getItem('theme');
      
      if (!savedTheme || savedTheme === 'system') {
        // No manual theme set or system preference selected, detect system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        
        // Apply the system theme
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(systemTheme);
        
        // Save system preference if no theme was set
        if (!savedTheme) {
          localStorage.setItem('theme', systemTheme);
        }
        
        console.log(`🎨 Theme initialized: ${systemTheme} (system preference)`);
      } else {
        // Apply the saved manual theme
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(savedTheme);
        console.log(`🎨 Theme loaded: ${savedTheme} (user preference)`);
      }
    };

    // Run on mount
    initializeTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('theme');
      
      // Only update if user hasn't set a manual preference (theme is 'system' or not set)
      if (!savedTheme || savedTheme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
        console.log(`🎨 System theme changed: ${newTheme}`);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return null;
}
