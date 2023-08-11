import React from "react";

export default function Card({ card, onCardClick }) {
    const handleCardClick = () => onCardClick(card);

    return (
        <div className="element">
              <img className="element__image"  
              src={card.link}
              alt={card.name} onClick={handleCardClick}/>
              <div className="element__content">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                  <button
                  className="element__like"
                  title="Лайк"
                  type="button"
                ></button>
                <span className="element__likes-quantity">{card.likes.length}</span>
                </div> 
              </div>
              <button type="button" className="element__delete">Удалить</button>
        </div>
    )
}