import React from "react";
import "./ImageModal.css";

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  // Evita o fechamento se o clique for dentro do conteúdo
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Função para abrir o WhatsApp
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/6lj64j", "_blank");
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <img src={imageSrc} alt={altText} className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          📱 Falar no WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
