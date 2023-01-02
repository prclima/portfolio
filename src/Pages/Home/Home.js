import Style from "./Home.module.css";
import { Box } from "@mui/material";
import PhotoProf from "../../../src/Img/Ped.png";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandInstagram,
} from "react-icons/tb";

import { ThemeState } from "../../Context/Theme";

export default function Home() {
  const { theme, setTheme } = ThemeState();
  return (
    <div className={Style.all}>
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh)"}
      >
        <Box
          className={Style.photo}
          component={"img"}
          src={PhotoProf}
          style={{ padding: "0.75rem" }}
          width={{ xs: "35vh", md: "40vh" }}
          height={{ xs: "35vh", md: "40vh" }}
          borderRadius={"50%"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "2rem" }}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <h1>
            Olá, meu nome é{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pedro{" "}
            </span>
            <span className={Style.hand}>🤚</span>
          </h1>
          <h2>Sou Desenvolvedor Front-End.</h2>
          <Box
            component={"ul"}
            p={"0.8rem"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              component={"li"}
              fontSize={"1rem"}
              lineHeight={1.5}
              style={{ cursor: "default" }}
              mr={{ xs: "0.5rem", md: "1rem" }}
              aria-label="cheese"
            >
              <ul>
                <span role="img" className={Style.icons}>
                  ☕{" "}
                </span>{" "}
                <span className={Style.span}> Movido a café </span>
              </ul>
              <ul>
                <span role="img" className={Style.icons}>
                  🌎{" "}
                </span>
                <span className={Style.span}> São Paulo, Brasil</span>
              </ul>
              <ul>
                <span role="img" className={Style.icons}>
                  📧{" "}
                </span>
                <span className={Style.span}> pedrorclima2@gmail.com</span>
              </ul>
            </Box>
          </Box>
          <Box diplay={"flex"} flexDirection={"row"}>
            <a className={Style.black} href="https://github.com/prclima">
              <TbBrandGithub />
            </a>
            <a
              className={Style.black}
              href="https://www.linkedin.com/in/pedro-rugai-cunha-lima-1bb271231/"
            >
              <TbBrandLinkedin />
            </a>

            <a
              className={Style.black}
              href="https://www.instagram.com/pedrugai/"
            >
              <TbBrandInstagram />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
