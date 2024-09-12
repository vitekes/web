import React, { ReactElement, useState } from "react";
import Modal, { Styles } from "react-modal";
import close_icon from "../../images/icons/close.svg";

// Устанавливаем элемент для модального окна
Modal.setAppElement("#root");

interface IBaseModal {
  title: string;
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  style?: Styles | object;
  children: ReactElement;
}

export default function BaseModal({
  title,
  isOpen,
  onRequestClose,
  contentLabel,
  style,
  children,
}: IBaseModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={style}
      overlayClassName="fixed bg-[#0000008c] inset-0" // классы для контента
      className="absolute sm:top-2/4 sm:left-2/4 sm:-translate-x-1/2 sm:-translate-y-1/2 rounded-xl bg-white p-[30px] sm:p-[45px] sm:max-w-[555px] h-full sm:h-auto" // классы для контента
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex">
          <h2 className="flex-auto text-center text-xl">{title}</h2>
          <button type="button" onClick={onRequestClose}>
            <img src={close_icon} alt="close_icon" />
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
}
