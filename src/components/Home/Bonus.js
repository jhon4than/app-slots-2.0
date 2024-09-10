import React from "react";
import "./Bonus.css"; // Este é o arquivo CSS onde você vai definir todos os seus estilos
import imgbonus from "../../assets/logodogrupovip.jpg";
import HeaderLogo from "../Home/headerLogo";
import { BiSupport } from "react-icons/bi";
import {
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
          {/* <button
            onClick={() =>
              window.open("http://t.me/footballStudiosLIVE", "_blank")
            }
          >
            <FaTelegramPlane /> Salas de Sinais Football Studio
          </button> */}
          {/* <button
            onClick={() =>
              window.open("https://go.perfectpay.com.br/PPU38CO116E", "_blank")
            }
          >
            <FaRegListAlt /> Lucre com Internet Hoje
          </button> */}
          <button
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/C2Mx9gRaRhTIppBmZC3IjJ",
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
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/mateus_marinss?igsh=MWdjZWo5Mm95enphag%3D%3D&utm_source=qr",
                "_blank"
              )
            }
          >
            <BiSupport /> Suporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
