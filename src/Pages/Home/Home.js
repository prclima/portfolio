import Style from "./Home.module.css";
import Init from "../../../src/Img/init.png";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import linkedin from "../../Img/linkedin.svg";
import github from "../../Img/git.svg";
import scroll from "../../Img/scroll.svg";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={Style.introducao}>
        <img src={Init} alt="perfil" />
        <div>
          <h1>
            Olá, me chamo Pedro. <br />
            Desenvolvedor Front-end.
          </h1>
          <p>
            Bem-vindo! <br />
            Sou um administrado que já foi funcionário, já empreendeu e com 30
            anos decidiu ir atrás do seu sonho.
          </p>
          <div>
            <a>
              <span>🌎</span> São Paulo.
            </a>{" "}
            <br />
            <a>
              <span>📧</span> pedrorclima2@gmail.com
            </a>
          </div>
          <a href="https://www.linkedin.com/in/pedrclima/">
            <img src={linkedin} />
          </a>
          <a href="https://www.linkedin.com/in/pedrclima/">
            <img src={github} />
          </a>
        </div>
        <div className={Style.maisInfos}>
          <a href="#about">Mais informações</a>
          <img src={scroll} />
        </div>
      </div>
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}
