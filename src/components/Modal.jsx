import React from "react";
import reactDom from "react-dom";

function Modal({ handleClose, actionBar, children }) {
  return reactDom.createPortal(
    <div>
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        i'm the modal
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".container-modal")
  );
}

export default Modal;
