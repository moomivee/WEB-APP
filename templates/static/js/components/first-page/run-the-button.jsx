import React from "react";
import "./button-for-email.css";
import Email from "./email";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
   

    return (
      <div className={showHideClassName}>

        <section className="modal-main">

          {children}
          <button className = "click" onClick={handleClose}>Закрыть</button>
          <Email></Email>
        </section>
      </div>
    );
};

export default Modal;