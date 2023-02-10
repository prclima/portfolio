import Style from "./Navbar.module.css";
import { useState } from "react";
import { ThemeState } from "../../Context/Theme";
import hamburguer from "../../Img/hamburger-menu.svg";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = ThemeState();
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  return (
    <>
      <header>
        <div className={Style.header}>
          <h1>Pedro Lima</h1>
          <div className={active ? Style.menuMobile : Style.headerMenu}>
            <ul>
              <li>
                <a
                  onClick={() => {
                    setActive(false);
                  }}
                  href="/"
                >
                  {" "}
                  Home
                </a>{" "}
              </li>
              <li>
                <a
                  onClick={() => {
                    setActive(false);
                  }}
                  href="#about"
                >
                  Sobre
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  onClick={() => {
                    setActive(false);
                  }}
                  href="#projetos"
                >
                  {" "}
                  Projetos
                </a>
              </li>
            </ul>
          </div>
          <div className={Style.hamburguer}>
            <img
              src={hamburguer}
              alt="menu"
              onClick={() => {
                setActive(!active);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}

{
  /* <div
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
</div> */
}
