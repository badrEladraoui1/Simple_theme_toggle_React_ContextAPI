/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Todo: Create & manage context in this file
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const ctxValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
