import NewsFeedList from "components/newsFeed/NewsFeedList";
import avatar2 from "images/icons/avatar2.jpg";
import plus from "images/icons/plus.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "src/redux/features/modal_status/modalStatusSlice";
import { RootState } from "src/redux/store";

export default function MainPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.auth?.token);
  const [isTracked, setIsTracked] = useState<boolean>(Boolean(window.location.search.includes("tracked=true")));

  const buttonHandler = (tracked: boolean) => {
    if (tracked && !isAuth) {
      dispatch(openModal("login"));
    } else {
      setIsTracked(tracked);
    }
  };

  return (
    <div className="container mx-auto px-1 md:w-[1120px] md:px-0">
      <div className="flex flex-wrap gap-[30px] xl:flex-nowrap">
        <div className="flex-initial space-y-[30px] md:min-w-[748px]">
          <div className="flex items-center gap-[30px] border-b text-[#B6B6B6]">
            <div>
              <Link to="/">
                <img src={plus} alt="plus" />
              </Link>
            </div>
            <div>
              <button onClick={() => buttonHandler(false)} className={!isTracked ? "active block" : "block"}>
                <span>Всё подряд</span>
              </button>
            </div>
            <div>
              <button onClick={() => buttonHandler(true)} className={isTracked ? "active block" : "block"}>
                <span>Отслеживаемое</span>
              </button>
            </div>
          </div>
          {<NewsFeedList tracked={isTracked} />}
        </div>
        <div className="flex w-full flex-initial flex-wrap xl:flex-col xl:flex-nowrap xl:gap-[30px] xl:border-l xl:pl-[15px]">
          <div className="basis-[40%] space-y-[20px] pl-[15px] xl:pl-0">
            <div className="text-base font-bold lg:text-2xl">Подбор блогов</div>
            <div className="space-y-[20px]">
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="mb-[10px] mr-[10px] h-[42px] w-[42px] rounded-full lg:h-[76px] lg:min-w-[76px]">
                    <img
                      className="h-[42px] w-[42px] rounded-full object-cover lg:h-[76px] lg:min-w-[76px]"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <span className="text-[10px] lg:text-2xl">Имя</span>
                </div>
                <div className="text-[10px] font-bold lg:text-2xl">Название</div>
              </div>
              <div>
                <div className="flex items-center gap-[5px]">
                  <div className="mb-[10px] mr-[10px] h-[42px] w-[42px] rounded-full lg:h-[76px] lg:min-w-[76px]">
                    <img
                      className="h-[42px] w-[42px] rounded-full object-cover lg:h-[76px] lg:min-w-[76px]"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <span className="text-[10px] lg:text-2xl">Имя</span>
                </div>
                <div className="text-[10px] font-bold lg:text-2xl">Название</div>
              </div>
            </div>
            <div>
              <Link to="#">Показать больше....</Link>
            </div>
          </div>
          <div className="-order-1 basis-full space-y-[20px] pb-[30px] xl:pb-0">
            <div className="text-base font-bold lg:text-2xl">Рекомендуемые направления</div>
            <ul className="flex flex-wrap gap-[10px] xl:gap-[15px]">
              <li>
                <Link
                  to="#"
                  className="inline-block rounded-full border border-black px-[15px] py-[10px] font-medium lg:px-[25px] lg:py-[15px]"
                >
                  Психология
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="inline-block rounded-full border border-black px-[15px] py-[10px] font-medium lg:px-[25px] lg:py-[15px]"
                >
                  Космос
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="inline-block rounded-full border border-black px-[15px] py-[10px] font-medium lg:px-[25px] lg:py-[15px]"
                >
                  Комиксы
                </Link>
              </li>
            </ul>
          </div>
          <div className="-order-1 basis-[60%] space-y-[20px] border-r pr-[15px] xl:border-0 xl:pr-0">
            <div className="text-base font-bold lg:text-2xl">Кого смотрят</div>
            <div className="flex flex-col gap-[20px]">
              <div className="space-y-[20px]">
                <div className="flex gap-[10px]">
                  <div className="h-[42px] w-[42px] rounded-full lg:h-[76px] lg:min-w-[76px]">
                    <img
                      className="h-[42px] min-w-[42px] rounded-full object-cover lg:h-[76px] lg:min-w-[76px]"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold sm:text-base">Имя</div>
                    <div className="text-[10px] sm:text-base">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. At fames cubilia lobortis rhoncus parturient.
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-block min-w-full rounded-md bg-black py-[10px] text-center text-[10px] font-bold text-white sm:py-[15px] sm:text-base lg:rounded-xl"
                    to="#"
                  >
                    Смотреть
                  </Link>
                </div>
              </div>
              <div className="space-y-[20px]">
                <div className="flex gap-[10px]">
                  <div className="h-[42px] w-[42px] rounded-full lg:h-[76px] lg:min-w-[76px]">
                    <img
                      className="h-[42px] min-w-[42px] rounded-full object-cover lg:h-[76px] lg:min-w-[76px]"
                      src={avatar2}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold sm:text-base">Имя</div>
                    <div className="text-[10px] sm:text-base">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. At fames cubilia lobortis rhoncus parturient.
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="inline-block min-w-full rounded-md bg-black py-[10px] text-center text-[10px] font-bold text-white sm:py-[15px] sm:text-base lg:rounded-xl"
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
