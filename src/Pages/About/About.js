import React from "react";
import Style from "./About.module.css";
import Perfil from "../../Img/Imagem.png";

export default function About() {
  return (
    <>
      <div className={Style.wrapper} id="about">
        <div className={Style.infos}>
          <h2>Sobre mim</h2>
          <p>
            Sempre estive ligado a tecnologia, trabalhei por 9 anos em uma
            software house, já tive minha empresa e resolvi seguir meu sonho de
            programar. <br /> Fiz diversos cursos na área, como o bootcamp de
            Web Developer Full Stack da IronHack - São Paulo, FreeCodeCamp entre
            outros.
            <br />
            Tenho experiência com React.js, Redux, JavaScript, HTML 5, CSS 3,
            MongoDb, SQL e consumo de API REST.
          </p>
          <a href="../../Img/Pedro-Lima.pdf" download>
            Baixar CV
          </a>
        </div>

        <div className={Style.ImgPerfil}>
          <img src={Perfil} alt="" />
        </div>
      </div>
    </>
  );
}
