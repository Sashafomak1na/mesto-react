import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Картинка аватар"
        />
        <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add" type="button" onClick={onAddPlace}>
          {/* <img
              className="profile__plus"
              alt="Картинка плюс"
            /> */}
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
          key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
