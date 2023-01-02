// import IconLink from "./IconLink";
import { Box } from "@mui/material";
import calc from "../../Img/calc.png";
import chat from "../../Img/chat.png";
import invetario from "../../Img/invetario.png";

import { ThemeState } from "../../Context/Theme";

function Projetos() {
  const { theme } = ThemeState();
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          style={{ width: "25rem", height: "25rem" }}
          component={"img"}
          src={calc}
          alt={"mockup"}
        />
        <h1 style={{ fontSize: "2rem" }}>Calculadora</h1>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.2rem"}
          alignItems={"center"}
          fontSize={"1.5rem"}
        >
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://prclcalculator.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              Live demo
            </a>
          </Box>
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://github.com/prclima/calculator"}
              style={{ textDecoration: "none" }}
            >
              Source Code
            </a>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          style={{ width: "25rem", height: "25rem" }}
          component={"img"}
          alt={"mockup"}
          src={invetario}
        />
        <h1 style={{ fontSize: "2rem" }}>Controle de Invetário</h1>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems={"center"}
          fontSize={"1.5rem"}
          py={"2rem"}
        >
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://prc-inventario.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              Live demo
            </a>
          </Box>
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://github.com/prclima/MPV-Inventario"}
              style={{ textDecoration: "none" }}
            >
              Source Code
            </a>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          style={{ width: "25rem", height: "25rem", overflow: "hidden" }}
          component={"img"}
          alt={"mockup"}
          src={chat}
        />
        <h1 style={{ fontSize: "2rem" }}>Chat em tempo real</h1>
        <Box
          className={"portfolio"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems={"center"}
          fontSize={"1.5rem"}
          py={"2rem"}
        >
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://bestappchat.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              Live demo
            </a>
          </Box>
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <a
              href={"https://github.com/prclima/ChatApp"}
              style={{ textDecoration: "none" }}
            >
              Source Code
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Projetos;
