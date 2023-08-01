import React from "react";
import cls from "./modal.module.scss";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose }) => {
  return createPortal(
    <div className={`${cls.modal} ${open ? cls.active : ""}`}>
      <div className={`${cls.window} ${open ? cls.active : ""}`}>
        <div className={cls.close} onClick={onClose}>
          &times;
        </div>

        <div className={cls.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
