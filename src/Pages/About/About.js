import React from "react";
import Style from "./About.module.css";
import Terminal from "./Terminal";
import { Box } from "@mui/material";

export default function About() {
  function aboutMeText() {
    return (
      <>
        <p className={Style.white}>
          <span className={Style.green}>Pedro Lima $</span> cat about Pedro
        </p>
        <p>
          <span className={Style.green}>
            about Pedro <span className={Style.green}> main </span>
          </span>
          <span className={Style.white}>
            Olá, sou um administrador que sempre trabalhou com tecnologia. Tive
            minha empresa, fora da área, mas percebi que tecnologia era o que
            queria. <br />
            Responsabilidade, inquietude e paixão são três palavras que podem de
            definir.
            <br />- Responsabilidade por sempre me colocar no papel da outra
            pessoa. <br />
            - Inquietude do marasmo, sempre almejando pelo novo, seja tecnologia
            ou conhecimento. <br />- Paixão por tudo que faço, sem isso nada faz
            sentido.{" "}
          </span>
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p className={Style.white}>
          <span className={Style.green}>Pedro Lima $</span> cd skills/tools
        </p>
        <p className={Style.white}>
          <span className={Style.green}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>
          ls
        </p>
        <p className={Style.green}> Proficient With</p>
        <ul className={Style.white}>
          <li>javascript</li>
          <li>react</li>
          <li>git</li>
          <li>github</li>
          <li>css</li>
          <li>html</li>
          <li>sql</li>
        </ul>
        <p className={Style.green}> Exposed To</p>
        <ul className={Style.white}>
          <li>nodeJs</li>
          <li>restAPI</li>
          <li>mongodb</li>
          <li>express</li>
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p className={Style.white}>
          <span className={Style.green}>Pedro $</span> cd hobbies/interests
        </p>
        <p className={Style.white}>
          <span className={Style.green}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul className={Style.white}>
          <li>leitura</li>
          <li>esportes</li>
          <li>natureza</li>
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
