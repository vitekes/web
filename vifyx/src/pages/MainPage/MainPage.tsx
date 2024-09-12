import React, { useState } from "react";
import plus from "../../images/icons/plus.svg";
import { Link, NavLink } from "react-router-dom";
import avatar2 from "../../images/icons/avatar2.jpg";
import NewsFeedList from "../../components/newsFeed/NewsFeedList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openModal } from "../../redux/features/modal_status/modalStatusSlice";

export default function MainPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.auth?.token);
  const [isTracked, setIsTracked] = useState<boolean>(
    Boolean(window.location.search.includes("tracked=true"))
  );

  const buttonHandler = (tracked: boolean) => {
    if (tracked && !isAuth) {
      dispatch(openModal('login'));
    } else {
      setIsTracked(tracked);
    }
  }

  return (
    <div className="container md:px-0 px-1 md:w-[1120px] mx-auto">
      <div className="flex gap-[30px] flex-wrap xl:flex-nowrap">
        <div className="flex-initial md:min-w-[748px] space-y-[30px]">
          <div className="text-[#B6B6B6] flex items-center gap-[30px] border-b">
            <div>
              <Link to="/">
                <img src={plus} alt="plus" />
              </Link>
            </div>
            <div>
              <button
                onClick={() => buttonHandler(false)}
                className={!isTracked ? "active block" : "block"}
              >
                <span>Всё подряд</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => buttonHandler(true)}
                className={isTracked ? "active block" : "block"}
              >
                <span>Отслеживаемое</span>
              </button>
            </div>
          </div>
          {<NewsFeedList tracked={isTracked} />}
        </div>
        <div className="flex-initial xl:pl-[15px] flex flex-wrap xl:flex-nowrap xl:flex-col w-full xl:gap-[30px] xl:border-l">
          <div className="space-y-[20px] basis-[40%] pl-[15px] xl:pl-0">
            <div className="font-bold text-base lg:text-2xl ">
              Подбор блогов
            </div>
            <div className="space-y-[20px]">
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full mr-[10px] mb-[10px]">
                    <img
                      className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full object-cover"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <span className="text-[10px] lg:text-2xl">Имя</span>
                </div>
                <div className="font-bold text-[10px] lg:text-2xl">
                  Название
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full mr-[10px] mb-[10px]">
                    <img
                      className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full object-cover"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <span className="text-[10px] lg:text-2xl">Имя</span>
                </div>
                <div className="font-bold text-[10px] lg:text-2xl">
                  Название
                </div>
              </div>
            </div>
            <div>
              <Link to="#">Показать больше....</Link>
            </div>
          </div>
          <div className="space-y-[20px] -order-1 basis-full pb-[30px] xl:pb-0">
            <div className="font-bold text-base lg:text-2xl">
              Рекомендуемые направления
            </div>
            <ul className="flex flex-wrap gap-[10px] xl:gap-[15px]">
              <li>
                <Link
                  to="#"
                  className="inline-block py-[10px] px-[15px] lg:py-[15px] lg:px-[25px] rounded-full border border-black font-medium"
                >
                  Психология
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="inline-block py-[10px] px-[15px] lg:py-[15px] lg:px-[25px] rounded-full border border-black font-medium"
                >
                  Космос
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="inline-block py-[10px] px-[15px] lg:py-[15px] lg:px-[25px] rounded-full border border-black font-medium"
                >
                  Комиксы
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-[20px] -order-1 basis-[60%] border-r xl:border-0 pr-[15px] xl:pr-0">
            <div className="font-bold text-base lg:text-2xl">Кого смотрят</div>
            <div className="flex gap-[20px] flex-col">
              <div className="space-y-[20px]">
                <div className="flex gap-[10px]">
                  <div className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full">
                    <img
                      className="min-w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full object-cover"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] sm:text-base">
                      Имя
                    </div>
                    <div className="text-[10px] sm:text-base">
                      Описание Описание Описание Описание Описание Описание
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-block text-[10px] sm:text-base text-center font-bold  rounded-md lg:rounded-xl bg-black text-white py-[10px] sm:py-[15px] min-w-full"
                    to="#"
                  >
                    Смотреть
                  </Link>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="flex gap-[10px]">
                  <div className="w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full">
                    <img
                      className="min-w-[42px] h-[42px] lg:min-w-[76px] lg:h-[76px] rounded-full object-cover"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] sm:text-base">
                      Имя
                    </div>
                    <div className="text-[10px] sm:text-base">
                      Описание Описание Описание Описание Описание Описание
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-block text-[10px] sm:text-base text-center font-bold rounded-md lg:rounded-xl bg-black text-white py-[10px] sm:py-[15px] min-w-full"
                    to="#"
                  >
                    Смотреть
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
