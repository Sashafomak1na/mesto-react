import React from "react";

function PopupWithForm({ title, name, isOpen, onClose, children }) {
    
    return (
        <div className= {`popup popup_${name} ${isOpen ? "popup_opened" : ""}` } >
            <div className="popup__container">
                <form
                    className="popup__container-input"
                    autoComplete="off"
                    name={`form-${name}`}>
                    <button type="button" className="popup__close" onClick={onClose}></button>
                    <h2 className="popup__title">{title}</h2>
                    <span className={`input-${name}-error input-error`}></span>
                    {children}
                    <button className="popup__save">Сохранить</button>
                </form>
            </div>
        </div>
)
}



export default PopupWithForm;