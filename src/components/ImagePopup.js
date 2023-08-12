import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-full-image ${card ? "popup_opened" : ""}`}>
      <figure className="popup__container-full-image">
        <img
          className="popup__pic"
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
        />
        <figcaption className="popup__pic-directory">
          {card ? card.name : ""}
        </figcaption>
        <button
          type="button"
          title="button"
          className="popup__close popup__close_photo"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
