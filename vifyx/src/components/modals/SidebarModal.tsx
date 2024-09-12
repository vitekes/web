import React from "react";
import view_black from "../../images/icons/view_black.svg";
import rr from "../../images/icons/rr.svg";
import expor from "../../images/icons/export.svg";
import inpor from "../../images/icons/inpor.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
} from "../../redux/features/modal_status/modalStatusSlice";
import { RootState } from "../../redux/store";
import { clearAuthData, clearCurrentUser } from "../../redux/features/auth/authSlice";

export default function SidebarModal() {
  const dispatch = useDispatch();
  const authData = useSelector((state: RootState) => state.user.auth);

  const openLoginWindow = () => {
    dispatch(openModal("login"));
    dispatch(closeModal("menu_sidebar"));
  };

  const logoutHandler = () => {
    dispatch(clearAuthData());
    dispatch(clearCurrentUser());
    dispatch(closeModal("menu_sidebar"));
    console.log(authData);
    
  }

  const openRegistrationWindow = () => {
    dispatch(openModal("register"));
    dispatch(closeModal("menu_sidebar"));
  };

  return (
    <div className="absolute bottom-0 right-0 translate-y-full shadow-md w-[290px] bg-white rounded-xl space-y-[30px]">
      {authData?.username && (
        <div className="flex flex-col gap-[11px] px-[24px] px-[12px]">
          <div className="flex gap-[5px]">
            <span className="text-xl">Обзор активов</span>
            <img src={view_black} alt="view" />
          </div>
          <div className="text-[26px] font-medium">
            <span>270</span>
            <span> USD</span>
          </div>
          <div className="text-xl text-[#737373] flex gap-[5px]">
            <img src={rr} alt="rr" />
            <span>0.00045658</span>
            <span> ВТС</span>
          </div>
          <div className="text-[9px]">
            *Обновления дaнных может зaдерживaться
          </div>
          <div className="flex justify-between gap-[5px]">
            <div className="basis-1/2">
              <Link
                to="#"
                className="flex gap-[5px] justify-center border py-[9px] border-black rounded-lg"
              >
                <img src={expor} alt="expor" className="" />
                <span>Внести</span>
              </Link>
            </div>
            <div className="basis-1/2">
              <Link
                to="#"
                className="flex gap-[5px] justify-center border py-[9px] border-black rounded-lg"
              >
                <img src={inpor} alt="inpor" />
                <span>Вывести</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <ul className="text-lg text-black">
        {authData?.username ? (
          <>
            <li className="border-t border-[#A0A0A0]">
              <Link to="#" className="block py-[15px] pl-[40px]">
                Мой блог
              </Link>
            </li>
            <li className="border-t border-[#A0A0A0]">
              <Link to="#" className="block py-[15px] pl-[40px]">
                Коллекция
              </Link>
            </li>
            <li className="border-t border-[#A0A0A0]">
              <Link to="#" className="block py-[15px] pl-[40px]">
                Правила сайта
              </Link>
            </li>
            <li className="border-t border-[#A0A0A0]">
              <Link to="#" className="block py-[15px] pl-[40px]">
                Настройки профиля
              </Link>
            </li>
            <li className="border-t border-[#A0A0A0]">
              <button
                onClick={logoutHandler}
                className="block py-[15px] pl-[40px] w-full text-left"
              >
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="border-t border-[#A0A0A0]">
              <button
                onClick={openLoginWindow}
                className="block py-[15px] pl-[40px] w-full text-left"
              >
                Войти
              </button>
            </li>
            <li className="border-t border-[#A0A0A0]">
              <button
                onClick={openRegistrationWindow}
                className="block py-[15px] pl-[40px] w-full text-left"
              >
                Регистрация
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
