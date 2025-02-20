import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css"; // Importe seu arquivo CSS
// Importando imagens
import cardsImg from "../../assets/metgol.jpeg";
import minesImg from "../../assets/br4bet.jpg";
import lendarias from "../../assets/lendarias.jpg";
import uxbet from "../../assets/uxbet.jpg";
import minesImg2 from "../../assets/realsbet-logo_646_380_HOME_BOX.webp";
import fortuneImg from "../../imgs/fortune.jpg";
import bacImg from "../../imgs/bacbo.jpg";
import aviatorImg from "../../imgs/aviator.jpeg";
import mouseimg from "../../imgs/mouse.jpg";
import fortuneoximg from "../../imgs/fortune-ox.jpg";
import fortunedragon from "../../imgs/pgsoft-fortune-dragon.webp";
import rabbitimg from "../../imgs/fortunerabbit.jpeg";
import dragontigerimg from "../../imgs/dragontiger.jpeg";
import backgroundImg from "../../assets/img03.png";
import HeaderLogo from "../Home/headerLogo";
import rouletImg from "../../imgs/MegaRoulet.jpg";
import pgs_dragonhatch from "../../imgs/pgs_dragonhatch.jpg";
import pgs_ganeshafortune from "../../imgs/pgs_ganeshafortune.jpg";
import pgs_piggygold from "../../imgs/pgs_piggygold.jpg";
import santasgiftrush from "../../imgs/1704706075-santas-gift-rush.png";
import LuckyNeko_sq from "../../imgs/Lucky-Neko-1_sq.jpg";
import pgs_jungledelight from "../../imgs/pgs_jungledelight.jpg";
import pgsoftwildbountyshowdown from "../../imgs/pgsoft-wild-bounty-showdown.png";
import pgsoftspeedwinner from "../../imgs/pgsoft-speed-winner.png";
import pgsbikini from "../../imgs/50004.png";
import Icescape from "../../imgs/50011.png";
import dragontiger from "../../imgs/dragon-tiger.png";
import mania from "../../imgs/MANIA.jpg";
import wild from "../../imgs/WILD.jpg";
import Futebolfever from "../../imgs/futebol.jpeg";
import smartgold from "../../imgs/gold.jpeg";
import novosortudo from "../../assets/novosortudo.jpeg";
import snake from "../../assets/snake.jpeg";

import { FaDice, FaChess, FaBurn } from "react-icons/fa";
import { CgGames } from "react-icons/cg";

function Games() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [payouts, setPayouts] = useState({});
  const [selectedBets, setSelectedBets] = useState({});
  const [webViewContent, setWebViewContent] = useState(null);

  // Mapeamento das bets por jogo
  const betMappings = {
    "Wild Cashout": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Fortune Tiger": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Fortune Dragon": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Gem Stones Gold": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Ganesha Fortune": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Lucky Neko": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Jungle Delight": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Speed Winner": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],

    "Tigre Sortudo": [0.50, 1.00, 2.00, 3.00, 4.00],

    "Futebol Fever": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "Mouse": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],    // Fortune Mouse
    "FortuneOx": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00], // Fortune Ox
    "Rabbit": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],    // Fortune Rabbit
    "Dragon Hatch": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "Piggy Gold": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "Bikini Paradise": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "The Great Icescape": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "Dragon Tiger": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],

    // Jogos não listados explicitamente: definindo arrays padrão
    "Fortune Snake": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Cash Mania": [0.80, 1.20, 2.00, 2.40, 3.20, 4.00],
    "Santa's Gift Rush": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
    "Wild Bounty Showdown": [0.50, 1.00, 1.50, 2.50, 3.00, 5.00],
  };

  // Lista de jogos
  const gamesList = [
    {
      name: "Tigre Sortudo",
      img: novosortudo,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Fortune Snake",
      img: snake,
      category: "Slots",
      payout: "92.75%",
      available: true,
    },
    {
      name: "Cash Mania",
      img: mania,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Wild Cashout",
      img: wild,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Fortune Dragon",
      img: fortunedragon,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Gem Stones Gold",
      img: Futebolfever,
      category: "Slots",
      available: true,
    },
    {
      name: "Futebol Fever",
      img: smartgold,
      category: "Slots",
      available: true,
    },
    {
      name: "Fortune Tiger", // ex-"Tiger" para mapear certo no betMappings
      img: fortuneImg,
      category: "Slots",
      available: true,
    },
    {
      name: "Mouse", // Fortune Mouse
      img: mouseimg,
      category: "Slots",
      available: true,
    },
    {
      name: "FortuneOx", // Fortune Ox
      img: fortuneoximg,
      category: "Slots",
      available: true,
    },
    {
      name: "Rabbit", // Fortune Rabbit
      img: rabbitimg,
      category: "Slots",
      available: true,
    },
    {
      name: "Dragon Hatch",
      img: pgs_dragonhatch,
      category: "Slots",
      available: true,
    },
    {
      name: "Ganesha Fortune", // Fortune Ganesha
      img: pgs_ganeshafortune,
      category: "Slots",
      available: true,
    },
    {
      name: "Piggy Gold",
      img: pgs_piggygold,
      category: "Slots",
      available: true,
    },
    {
      name: "Bikini Paradise",
      img: pgsbikini,
      category: "Slots",
      available: true,
    },
    {
      name: "Santa's Gift Rush",
      img: santasgiftrush,
      category: "Slots",
      available: true,
    },
    {
      name: "The Great Icescape",
      img: Icescape,
      category: "Slots",
      available: true,
    },
    {
      name: "Lucky Neko",
      img: LuckyNeko_sq,
      category: "Slots",
      available: true,
    },
    {
      name: "Jungle Delight",
      img: pgs_jungledelight,
      category: "Slots",
      available: true,
    },
    {
      name: "Wild Bounty Showdown",
      img: pgsoftwildbountyshowdown,
      category: "Slots",
      available: true,
    },
    {
      name: "Speed Winner",
      img: pgsoftspeedwinner,
      category: "Slots",
      available: true,
    },
    {
      name: "Dragon Tiger",
      img: dragontiger,
      category: "Slots",
      available: true,
    },
  ];

  const categories = [
    { name: "Todos", icon: <CgGames /> },
    { name: "Crash", icon: <FaDice /> },
    { name: "Cassino", icon: <FaChess /> },
    { name: "Slots", icon: <FaBurn /> },
  ];

  // Função que gera seed baseada em intervalos de 3 minutos
  const generateSeed = () => {
    return Math.floor(Date.now() / 180000); // 3 minutos = 180000 ms
  };

  // Função que gera um "random" pseudo-aleatório com base em seed
  const pseudoRandom = (seedValue) => {
    const x = Math.sin(seedValue) * 10000;
    return x - Math.floor(x);
  };

  // Pega o payout (0 a 1) a partir do seed + hash do nome do jogo
  const generatePayout = (seed, gameName) => {
    const value = pseudoRandom(seed + gameName.hashCode());
    return value;
  };

  // Pega o índice do array de bets baseado no mesmo seed (ou outro critério) para cada jogo
  const pickBet = (seed, gameName) => {
    const array = betMappings[gameName] || [1.0]; // caso não encontre, usa valor default
    if (array.length === 1) return array[0];

    const value = pseudoRandom(seed + gameName.hashCode());
    const index = Math.floor(value * array.length);
    return array[index];
  };

  // Inicializa payouts e bets
  const initializeData = () => {
    const seed = generateSeed();
    const initialPayouts = {};
    const initialBets = {};

    gamesList.forEach((game) => {
      const p = generatePayout(seed, game.name);
      initialPayouts[game.name] = (p * 100).toFixed(2);

      initialBets[game.name] = pickBet(seed, game.name);
    });
    setPayouts(initialPayouts);
    setSelectedBets(initialBets);
  };

  // Atualiza payouts e bets a cada 3 minutos
  const updateData = () => {
    const seed = generateSeed();
    setPayouts((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((gameName) => {
        const p = generatePayout(seed, gameName);
        updated[gameName] = (p * 100).toFixed(2);
      });
      return updated;
    });

    setSelectedBets((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((gameName) => {
        updated[gameName] = pickBet(seed, gameName);
      });
      return updated;
    });
  };

  // Hashcode para strings (já utilizado no código original)
  String.prototype.hashCode = function () {
    var hash = 0,
      i,
      chr;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  // Ao montar o componente, inicializa dados e faz interval de 3 em 3 minutos
  useEffect(() => {
    initializeData();
    const interval = setInterval(() => {
      updateData();
    }, 180000); // 3 minutos

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Exemplo de rotas para alguns jogos (ajuste conforme sua necessidade)
  const handleClick = (gameName) => {
    switch (gameName) {
      case "Football-studio":
        navigate("/games/football-studio");
        break;
      case "Mines":
        navigate("/games/mines");
        break;
      case "Fortune Tiger":
        navigate("/games/tiger");
        break;
      case "Mouse":
        navigate("/games/mouse");
        break;
      case "FortuneOx":
        navigate("/games/fortuneox");
        break;
      case "MegaRoulet":
        navigate("/games/megaroulet");
        break;
      case "Rabbit":
        navigate("/games/rabbit");
        break;
      case "Aviator":
        navigate("/games/aviator");
        break;
      case "Spaceman":
        navigate("/games/spaceman");
        break;
      // ...
      default:
        console.warn("No route found for:", gameName);
    }
  };

  const handleNewCardClick = (url) => {
    const htmlContent = `
      <iframe src="${url}" width="89%" height="900px"></iframe>
    `;
    setWebViewContent(htmlContent);
  };

  const getProgressBarClass = (payout) => {
    const val = Number(payout);
    if (val <= 45) return "progress-bar red";
    if (val <= 75) return "progress-bar yellow";
    return "progress-bar green";
  };

  return (
    <div className="games-background">
      <HeaderLogo />

      {/* Novos Cards acima do título */}
      <div className="games-grid-casa">
        {/* Primeiro Card */}
        <div
          className="game-card-casa"
          onClick={() => handleNewCardClick("https://go.aff.br4-partners.com/chhi65y1")}
        >
          <img src={minesImg} alt="Card 1" />
        </div>
        {/* Segundo Card */}
        <div
          className="game-card-casa"
          onClick={() => handleNewCardClick("https://lendarias.com/?r=cunqxvdx")}
        >
          <img src={lendarias} alt="Card 2" />
        </div>
        <div
          className="game-card-casa"
          onClick={() => handleNewCardClick("https://aff.uxbet.com.br/guest?btag=36476&brand=uxbet")}
        >
          <img src={uxbet} alt="Card 3" />
        </div>
      </div>
      <div
        className="webview-container"
        dangerouslySetInnerHTML={{ __html: webViewContent }}
      ></div>
      {/* Título */}
      <div className="update-alert">
        <div className="update-alert-icon">
          <i className="fas fa-sync-alt"></i>{" "}
        </div>
        <div className="update-alert-text">
          Atualize a página pelo menos uma vez a cada 3 minutos para ver as
          atualizações.
        </div>
        <button className="update-alert-close">
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Grid de Jogos */}
      <div className="games-grid">
        {gamesList
          .filter(
            (game) =>
              selectedCategory === "Todos" || game.category === selectedCategory
          )
          .map((game, index) => (
            <div
              key={index}
              className={`game-card ${!game.available && "disabled"}`}
              onClick={() => (game.available ? handleClick(game.name) : null)}
            >
              {/* Progresso + payout */}
              <div className="game-header">
                <div className="game-payout">{payouts[game.name]}%</div>
                <div className="progress-bar-container">
                  <div
                    className={getProgressBarClass(payouts[game.name])}
                    style={{ width: `${payouts[game.name]}%` }}
                  ></div>
                </div>
              </div>

              {/* Barra de Bet */}
              <div className="bet-bar">
                JOGAR BET:{" "}
                {selectedBets[game.name] !== undefined
                  ? `R$ ${selectedBets[game.name]
                      .toFixed(2)
                      .replace(".", ",")}`
                  : "R$ 0,00"}
              </div>

              {/* Imagem do jogo */}
              <div className="game-card-content">
                <img src={game.img} className="game-img" alt={game.name} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Games;
