import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css"; // Importe seu arquivo CSS
// Importando imagens
import cardsImg from "../../assets/br4bet.jpg";
import minesImg from "../../assets/zord.jpg";
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

import { FaDice, FaChess, FaBurn } from "react-icons/fa";
import { CgGames } from "react-icons/cg";

function Games() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [payouts, setPayouts] = useState({});
  const [webViewContent, setWebViewContent] = useState(null);

  const initializePayouts = () => {
    const seed = generateSeed();
    const initialPayouts = {};
    gamesList.forEach((game) => {
      initialPayouts[game.name] = (
        generatePayout(seed + game.name.hashCode()) * 100
      ).toFixed(2);
    });
    setPayouts(initialPayouts);
  };

  const generateSeed = () => {
    // Pega o timestamp atual e divide por 180000 (3 minutos em milissegundos)
    return Math.floor(Date.now() / 180000);
  };

  const generatePayout = (seed) => {
    // Gera um pseudo-aleatório baseado no seed
    const random = Math.sin(seed) * 10000;
    return random - Math.floor(random);
  };

  const updatePayouts = () => {
    const seed = generateSeed();
    setPayouts((prevPayouts) => {
      const updatedPayouts = { ...prevPayouts };
      Object.keys(updatedPayouts).forEach((game) => {
        // Usa o seed para gerar um novo payout
        updatedPayouts[game] = (
          generatePayout(seed + game.hashCode()) * 100
        ).toFixed(2);
      });
      return updatedPayouts;
    });
  };
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
  // Atualiza os payouts na montagem do componente e a cada 3 minutos
  useEffect(() => {
    initializePayouts();
    const interval = setInterval(() => {
      updatePayouts();
    }, 180000); // 3 minutos

    // Limpa o intervalo ao desmontar
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClick = (gameName) => {
    switch (gameName) {
      case "Football-studio":
        navigate("/games/football-studio");
        break;
      case "Mines":
        navigate("/games/mines");
        break;
      case "Tiger":
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
      // Adicione outros jogos aqui conforme necessário...
      default:
        console.warn("No route found for:", gameName);
    }
  };

  const gamesList = [
    {
      name: "Fortune Dragon",
      img: fortunedragon,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Tiger",
      img: fortuneImg,
      category: "Slots",
      payout: "95.75%",
      available: true,
    },
    {
      name: "Mouse",
      img: mouseimg,
      category: "Slots",
      payout: "94.60%",
      available: true,
    },
    {
      name: "FortuneOx",
      img: fortuneoximg,
      category: "Slots",
      payout: "93.80%",
      available: true,
    },
    {
      name: "Rabbit",
      img: rabbitimg,
      category: "Slots",
      payout: "92.50%",
      available: true,
    },

    { name: "Dragon Hatch", img: pgs_dragonhatch, available: true },
    { name: "Ganesha Fortune", img: pgs_ganeshafortune, available: true },
    { name: "Piggy Gold", img: pgs_piggygold, available: true },
    { name: "Bikini Paradise", img: pgsbikini, available: true },
    {
      name: "Santa's Gift Rush",
      img: santasgiftrush,
      available: true,
    },
    { name: "The Great Icescape", img: Icescape, available: true },
    { name: "Lucky Neko", img: LuckyNeko_sq, available: true },
    { name: "Jungle Delight", img: pgs_jungledelight, available: true },
    {
      name: "Wild Bounty Showdown",
      img: pgsoftwildbountyshowdown,
      available: true,
    },
    { name: "Speed Winner", img: pgsoftspeedwinner, available: true },
    { name: "Dragon Tiger", img: dragontiger, available: true },
    //{ name: "Mines", img: minesImg, available: true },
    // { name: "Tiger", img: fortuneImg, available: true },
    // { name: "Mouse", img: mouseimg, available: true },
    // { name: "FortuneOx", img: fortuneoximg, available: true },
    // { name: "Rabbit", img: rabbitimg, available: false },
    // { name: "DragonTiger", img: dragontigerimg, available: false },
    //{ name: "Aviator", img: aviatorImg, available: true },
    //{ name: "Spaceman", img: spacemanImg, available: true },
  ];
  const categories = [
    { name: "Todos", icon: <CgGames /> },
    { name: "Crash", icon: <FaDice /> },
    { name: "Cassino", icon: <FaChess /> },
    { name: "Slots", icon: <FaBurn /> },
  ];

  const handleNewCardClick = (url) => {
    // Aqui você pode definir o conteúdo HTML que será exibido na WebView simulada com base na URL.
    // Por exemplo, você pode usar um iframe para exibir uma página externa ou renderizar seu próprio conteúdo HTML personalizado.
    const htmlContent = `
      <iframe src="${url}" width="89%" height="900px"></iframe>
    `;

    setWebViewContent(htmlContent);
  };

  const getProgressBarClass = (payout) => {
    if (payout <= 45) return "progress-bar red";
    if (payout <= 75) return "progress-bar yellow";
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
          onClick={() =>
            handleNewCardClick(
              "https://go.aff.br4-partners.com/CASANOVA_MATEUS"
            )
          }
        >
          <img src={cardsImg} alt="Card 1" />
        </div>
        {/* Segundo Card */}
        <div
          className="game-card-casa"
          onClick={() =>
            handleNewCardClick(
              "https://hudsbet.cxclick.com/visit/?bta=35455&brand=hudsbet"
            )
          }
        >
          <img src={minesImg} alt="Card 2" />
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
          {/* ícone de exemplo, pode ser substituído por um ícone de sua escolha */}
        </div>
        <div className="update-alert-text">
          Atualize a página pelo menos uma vez a cada 3 minutos para ver as
          atualizações.
        </div>
        <button className="update-alert-close">
          <i className="fas fa-times"></i>{" "}
          {/* ícone de exemplo, pode ser substituído por um ícone de sua escolha */}
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
            >
              <div className="game-header">
                <div className="game-payout">{payouts[game.name]}%</div>
                <div className="progress-bar-container">
                  <div
                    className={getProgressBarClass(payouts[game.name])}
                    style={{ width: `${payouts[game.name]}%` }}
                  ></div>
                </div>
              </div>
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
