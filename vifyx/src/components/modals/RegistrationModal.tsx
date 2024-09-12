import React, { useState } from "react";
import Modal from "react-modal";
import close_icon from "../../images/icons/close.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  closeModal,
  openModal,
} from "../../redux/features/modal_status/modalStatusSlice";
import { useRegistrationMutation } from "../../redux/api/userApi";
import BaseModal from "./BaseModal";

Modal.setAppElement("#root");

export default function RegistrationModal() {
  const dispatch = useDispatch();
  const registerModalStatus = useSelector(
    (state: RootState) => state.modalStatuses.modals.register.isOpen
  );

  const [registrationFunc, { isError }] = useRegistrationMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const closeRegistrationModal = () => dispatch(closeModal("register"));

  const openLoginModal = () => {
    dispatch(closeModal("register"));
    dispatch(openModal("login"));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    const { token } = await registrationFunc(formData).unwrap();
    console.log(token);

    closeRegistrationModal();
  };

  return (
    <BaseModal
      title="Регистрация"
      isOpen={registerModalStatus}
      onRequestClose={closeRegistrationModal}
      contentLabel="Registration Modal"
    >
      <>
        <form onSubmit={handleSubmit} className="space-y-[30px]">
          <div className="space-y-[15px]">
            <div className="text-lg space-y-[15px]">
              <label htmlFor="register_first_name">Имя</label>
              <input
                type="text"
                id="register_first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
                className="w-full h-11 border rounded-md p-1"
              />
            </div>
            <div className="text-lg space-y-[15px]">
              <label htmlFor="register_email">Email</label>
              <input
                type="email"
                id="register_email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                className="w-full h-11 border rounded-md p-1"
              />
            </div>
            <div className="text-lg space-y-[15px]">
              <label htmlFor="register_username">Имя пользователя</label>
              <input
                type="text"
                id="register_username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full h-11 border rounded-md p-1"
              />
            </div>
            <div className="text-lg space-y-[15px]">
              <label htmlFor="register_password">Пароль</label>
              <input
                type="password"
                id="register_password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                className="w-full h-11 border rounded-md p-1"
              />
            </div>
            <div className="text-lg space-y-[15px]">
              <label htmlFor="register_password2">Повторите пaроль</label>
              <input
                type="password"
                id="register_password2"
                name="password2"
                value={formData.password2}
                onChange={handleInputChange}
                required
                autoComplete="new-password"
                className="w-full h-11 border rounded-md p-1"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="font-bold text-white px-[26px] py-[12px] bg-black rounded-md"
            >
              Зaрегистрировaться
            </button>
            <button onClick={openLoginModal} className="text-[#84A65A] text-lg">
              Есть aккayнт?
            </button>
          </div>
        </form>

        <div className="">
          <p className="text-base">
            <Link to="#" className="text-[#A0A0A0]">
              Авторизуясь на сайте,{" "}
            </Link>
            вы принимаете условия оказания услуг, условия платежей, политику
            конфиденциальности и файлов cookie
          </p>
        </div>
      </>
    </BaseModal>
  );
}
