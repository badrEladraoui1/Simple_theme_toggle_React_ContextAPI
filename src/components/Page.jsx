import Header from "./Header";
/* eslint-disable no-unused-vars */
import { ThemeContext } from "./ThemeContextProvider";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";

export default function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="app" className={theme}>
      <Header />

      <article>
        <h2>React</h2>
        <p>
          React is a JavaScript library for building dynamic user interfaces
          through reusable components and efficient state management.
        </p>
      </article>
    </div>
  );
}
