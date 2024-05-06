import React from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ setToggleModal }) {
  return (
    <div>
      <div className="ModalBg">
        <div className="ModalContainer">
          <FontAwesomeIcon icon={faXmark} onClick={setToggleModal} />
          <div className="ModalSucess">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <h2>Payment Sucessful</h2>
          <p>Your order is on th way</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
