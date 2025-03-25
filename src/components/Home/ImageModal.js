// components/ImageModal.jsx
import React from "react";
import "./ImageModal.css";

const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
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
