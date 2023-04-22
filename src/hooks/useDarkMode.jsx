import { useState, useEffect } from "react";

export const useDarkMode = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  //   Keep theme
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    document.documentElement.setAttribute("theme-mode", localTheme);
    localTheme && setTheme(localTheme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("theme-mode", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      document.documentElement.setAttribute("theme-mode", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return [theme, toggleTheme];
};
