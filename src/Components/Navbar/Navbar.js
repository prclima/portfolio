import * as React from "react";

import style from "./Navbar.module.css";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

import { ThemeState } from "../../Context/Theme";

export default function Navbar() {
  const { theme, setTheme } = ThemeState();

  const navigate = useNavigate();

  return (
    <>
      <div className={style.navbar}>
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Home
        </a>
        <a
          onClick={() => {
            navigate("/about");
          }}
        >
          About me
        </a>
        <a style={{ marginTop: "0.3rem", fontSize: "3rem" }}>PL</a>
        <a>Portfolio</a>
        <Box
          fontSize={"1.5rem"}
          sx={{
            cursor: "pointer",
            ":hover": { transform: "translateY(-3px)" },
          }}
        >
          {theme === "light" ? (
            <spam
              onClick={() => {
                setTheme("dark");
              }}
            >
              🌑
            </spam>
          ) : (
            <spam
              onClick={() => {
                setTheme("light");
              }}
            >
              {" "}
              🌕{" "}
            </spam>
          )}
        </Box>
      </div>
    </>
  );
}
