import Style from "./Portfolio.module.css";
import calc from "../../Img/calculadora.png";
import chat from "../../Img/chat.png";
import dogs from "../../Img/dogs.png";
import invetario from "../../Img/inventario.png";
import login from "../../Img/login.png";

function Portfolio(props) {
  let projetos = [
    {
      img: calc,
      name: "Calculadora",
      live: "https://prclcalculator.netlify.app/",
      source: "https://github.com/prclima/calculator",
      sobre:
        "Projeto criado com React.js e CSS puro, totalmente responsivo e funcional. A ideia era criar o cálculo em tempo real com a possibilidade do usuário apagar os último número digitados, sem perder toda a conta anterior.",
    },

    {
      img: invetario,
      name: "Controle de Inventário",
      live: "https://prc-inventario.netlify.app/",
      source: "https://github.com/prclima/MPV-Inventario",
      sobre:
        "Projeto criado com React.js, consumindo API e com CRUD completo. O usuário pode cadastrar, alterar, incluir e excluir um produto. Há uma tela onde são exibidos todos os produtos, com preço, quantidade e valor total de estoque.",
    },

    {
      img: chat,
      name: "Chat em tempo real",
      live: "https://bestappchat.netlify.app/",
      source_back: "https://github.com/prclima/ChatApp",
      source: "https://github.com/prclima/ChatApp-Front",
      sobre:
        "Projeto criado com React.js, MongoDb, express e Node.js. A idéia principal era criar um chat em tempo real, onde a mensagem recebida deveria ser exibida sem a interação do usuário. Para a parte de comunicação utilizei o socket.io, as mensagens são salvas no banco de dados e também há o cadastro de usuário, a senha é criptografada. Utilizei o JWT-token para o processo de autenticação. O back-end foi feito por mim com express e node.js.",
    },
    {
      img: dogs,
      name: "InstaDog",
      source: "https://github.com/prclima/socialDog",
      sobre:
        "Projeto de rede social baseada no Instagra. Foi criado com React.js e PHP. O usuário pode inclur, excluir e comentar as fotos dos cachorros. Há uma seção de estatísticas dos posts, com gráfico de quantos acessos eles tiveram e número de comentários. Não foi usada nenhuma biblioteca de CSS. ",
    },
    {
      img: login,
      name: "LoginPage",
      source: "https://github.com/prclima/loginPage",
      sobre:
        "Projeto de uma página para login, responsiva. Foi usado React.JS e CSS puro. Para deixar o código clean e não ficar criando vários states, criei um hook useForm.",
    },
  ];

  return (
    <>
      <div className={Style.all} id="projetos">
        <div className={Style.h2}>
          <h2>Últimos Projetos</h2>
        </div>

        <div className={Style.wrapper}>
          {projetos.map((item) => {
            return (
              <div className={Style.projeto}>
                <div className={Style.projetoImg}>
                  <img src={item.img} />
                </div>
                <div>
                  <div className={Style.link}>
                    <a href={item.live}>Live demo</a>
                    <a href={item.source}>source Code</a>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.sobre}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
