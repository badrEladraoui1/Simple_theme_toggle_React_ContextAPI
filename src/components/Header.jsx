/* eslint-disable no-unused-vars */
import { ThemeContext } from "./ThemeContextProvider";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
