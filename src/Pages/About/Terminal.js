import React from "react";
import Style from "./Terminal.module.css";
import { VscCircleFilled } from "react-icons/vsc";
import { Box } from "@mui/material";

function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={"section"}
      className={Style.terminal}
      width={{ xs: "80%", md: "50%" }}
      borderRadius={"0.5rem"}
      mb={"4rem"}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.2rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1.5rem"}
      >
        <i className={Style.red}>
          <VscCircleFilled />
        </i>
        <i className={Style.amber}>
          <VscCircleFilled />
        </i>
        <i className={Style.green}>
          <VscCircleFilled />
        </i>
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
