import * as React from "react";
import Button from "@mui/material/Button";
import style from "./Navbar.module.css";
import { fontSize } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
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
    </div>
  );
}
