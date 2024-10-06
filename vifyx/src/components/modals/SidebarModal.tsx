import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import expor from "src/images/icons/export.svg";
import inpor from "src/images/icons/inpor.svg";
import rr from "src/images/icons/rr.svg";
import view_black from "src/images/icons/view_black.svg";
import { clearAuthData, clearCurrentUser } from "src/redux/features/auth/authSlice";
import { closeModal, openModal } from "src/redux/features/modal_status/modalStatusSlice";
import { RootState } from "src/redux/store";

export default function SidebarModal() {
  const dispatch = useDispatch();
  const authData = useSelector((state: RootState) => state.user.auth);
  const [isAuth, setIsAuth] = useState<boolean>(Boolean(authData?.token));

  const openLoginWindow = () => {
    dispatch(openModal("login"));
    dispatch(closeModal("menu_sidebar"));
  };

  const logoutHandler = () => {
    dispatch(clearAuthData());
    dispatch(clearCurrentUser());
    dispatch(closeModal("menu_sidebar"));
    setIsAuth(false);
  };

  const openRegistrationWindow = () => {
    dispatch(openModal("register"));
    dispatch(closeModal("menu_sidebar"));
  };

  const sitebar_data = [
    {
      id: 1,
      name: "Кошелек",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 2,
      name: "Мой блог",
      link: "/my-blog/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 3,
      name: "Коллекция",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 4,
      name: "Правила сайта",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 5,
      name: "Настройки профиля",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 6,
      name: "Достижения",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 7,
      name: "Реферальная программа",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 8,
      name: "Кошелек",
      link: "/",
      onClick: null,
      permissions: "authorized"
    },
    {
      id: 9,
      name: "Выйти",
      link: null,
      onClick: logoutHandler,
      permissions: "authorized"
    },
    {
      id: 10,
      name: "Войти",
      link: null,
      onClick: openLoginWindow,
      permissions: "allowed"
    },
    {
      id: 11,
      name: "Регистрация",
      link: null,
      onClick: openRegistrationWindow,
      permissions: "allowed"
    }
  ];

  function filterNavItems(isAuth: boolean) {
    if (isAuth) {
      return sitebar_data.filter(item => item.permissions === "authorized");
    } else {
      return sitebar_data.filter(item => item.permissions === "allowed");
    }
  }

  return (
    <div className="absolute z-10 bottom-0 right-0 w-[290px] translate-y-full space-y-[30px] rounded-xl bg-white shadow-md">
      {isAuth && (
        <div className="flex flex-col gap-[11px] px-[12px] px-[24px]">
          <div className="flex gap-[5px]">
            <span className="text-xl">Обзор активов</span>
            <img src={view_black} alt="view" />
          </div>
          <div className="text-[26px] font-medium">
            <span>270</span>
            <span> USD</span>
          </div>
          <div className="flex gap-[5px] text-xl text-[#737373]">
            <img src={rr} alt="rr" />
            <span>0.00045658</span>
            <span> ВТС</span>
          </div>
          <div className="text-[9px]">*Обновления дaнных может зaдерживaться</div>
          <div className="flex justify-between gap-[5px]">
            <div className="basis-1/2">
              <Link to="#" className="flex justify-center gap-[5px] rounded-lg border border-black py-[9px]">
                <img src={expor} alt="expor" className="" />
                <span>Внести</span>
              </Link>
            </div>
            <div className="basis-1/2">
              <Link to="#" className="flex justify-center gap-[5px] rounded-lg border border-black py-[9px]">
                <img src={inpor} alt="inpor" />
                <span>Вывести</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <ul className="text-lg text-black">
        {filterNavItems(isAuth)?.map(item => (
          <li className="border-t border-[#A0A0A0]" key={item.id}>
            {item.link !== null ? (
              <Link to={item.link} className="block py-[15px] pl-[40px]">
                {item.name}
              </Link>
            ) : (
              <button onClick={item.onClick} className="block w-full py-[15px] pl-[40px] text-left">
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
