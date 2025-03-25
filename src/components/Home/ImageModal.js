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

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <img src={imageSrc} alt={altText} className="modal-image" />
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
