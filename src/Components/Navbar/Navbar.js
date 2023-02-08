import * as React from "react";
import Style from "./Navbar.module.css";

import { ThemeState } from "../../Context/Theme";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = ThemeState();

  return (
    <>
      <header className={Style.header}>
        <div>
          <h1>Pedro Lima</h1>
        </div>
        <div className={Style.headerMenu}>
          <a href="/"> Home</a>
          <a href="#about">Sobre </a>
          <a href="#projetos">Projetos</a>

          <div
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {theme === "light" ? (
              <span
                onClick={() => {
                  setTheme("dark");
                }}
              >
                🌘
              </span>
            ) : (
              <span
                onClick={() => {
                  setTheme("light");
                }}
              >
                {" "}
                🌕{" "}
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
