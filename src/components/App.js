import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    //setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null);
  }

  return (
    <div className="page">
    <Header />
    <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onClose={closeAllPopups}
      onCardClick={handleCardClick}
    />
    <Footer />

    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    >
      <input
        id="input-name"
        className="popup__item popup__item_type_name"
        minLength="2"
        maxLength="40"
        required
        placeholder="Ваше имя"
        name="name"
      />
      <span className="input-name-error popup__item-error"></span>

      <input
        id="input-description"
        className="popup__item popup__item_type_sign"
        minLength="2"
        maxLength="200"
        required
        placeholder="Вид деятельности"
        name="description"
      />
      <span className="input-description-error popup__item-error"></span>
    </PopupWithForm>


    <PopupWithForm
      title="Новое место"
      name="add_card"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <input
        id="input-place"
        className="popup__item popup__item_palce_name"
        minLength="2"
        maxLength="30"
        required
        placeholder="Название"
        name="place"
      />
      <span className="input-place-error popup__item-error"></span>
      <input
        id="input-link"
        className="popup__item popup__item_place_link"
        type="url"
        required
        placeholder="Ссылка на картинку"
        name="link"
      />
      <span className="input-link-error popup__item-error"></span>
    </PopupWithForm>


    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <input
        id="input-avatar"
        className="popup__item popup__item_avatar"
        minLength="2"
        required
        placeholder="Введите ссылку на изображение"
        type="url"
        name="avatar"
      />
      <span className="input-avatar-error popup__item-error"></span>
    </PopupWithForm>

    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
    />
  </div>
  );
  
}

export default App;