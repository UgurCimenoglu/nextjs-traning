"use client";

import React, { createContext, useState } from "react";

type ThemeType = "dark" | "light";

type themeContextProps = {
  mode: ThemeType;
  toggle: () => void;
};

export const ThemeContext = createContext<themeContextProps>({
  mode: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeType>("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
