import React from "react";
import Card from "./Card";
import { api } from "../utils/api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, card]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(card);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Картинка аватар"
        />
        <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            type="button"
            className="profile__edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
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
          <Card card={card} onCardClick={onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
