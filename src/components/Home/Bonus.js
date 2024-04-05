import React from "react";
import "./Bonus.css"; // Este é o arquivo CSS onde você vai definir todos os seus estilos
import imgbonus from "../../assets/cadastro.jpeg";
import HeaderLogo from "../Home/headerLogo";
import {
  FaTelegramPlane,
  FaRegListAlt,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa"; // Importando ícones específicos

const Bonus = () => {
  return (
    <div className="bonus-page">
      <div className="bonus-content">
        <HeaderLogo />

        <div className="bonus-image">
          <img src={imgbonus} alt="Bônus" />
        </div>

        <div className="bonus-buttons">
          <button
            onClick={() =>
              window.open("http://t.me/footballStudiosLIVE", "_blank")
            }
          >
            <FaTelegramPlane /> Salas de Sinais Football Studio
          </button>
          <button
            onClick={() =>
              window.open("https://go.perfectpay.com.br/PPU38CO116E", "_blank")
            }
          >
            <FaRegListAlt /> Lucre com Internet Hoje
          </button>
          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/EUcy9j28CND1tQ2dw5YWup",
                "_blank"
              )
            }
          >
            <FaWhatsapp /> Entrar Na Comunidade WhatsApp
          </button>
          <button
            onClick={() =>
              window.open(
                "https://go.aff.br4-partners.com/CASANOVA_MATEUS",
                "_blank"
              )
            }
          >
            <FaRegListAlt /> Cadastre-se na Plataforma Indicada
          </button>
          <button
            onClick={() =>
              window.open(
                "https://zordbeet.com?action=register&affiliate=b6JnfGF7fXMjOjB79zVoLCJoeWFweCIyICJuYXRofXMteWF68W3nNTBAZ12g8WptY1auIjpj8WQjOjAjNDEpIjpjfGouZSIyICIvNnA3MTUqOT91Iz7",
                "_blank"
              )
            }
          >
            <FaRegListAlt /> Cadastre-se na Plataforma Indicada
          </button>
          <button
            onClick={() =>
              window.open(`${process.env.PUBLIC_URL}/gerenciamento.pdf`)
            }
          >
            <FaDownload /> Baixar PDF de Bônus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
