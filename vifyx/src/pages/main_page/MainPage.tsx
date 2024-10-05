import NewsFeedList from "components/newsFeed/NewsFeedList";
import avatar2 from "images/icons/avatar2.jpg";
import plus from "images/icons/plus.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryList from "src/components/popular_categories/PopularCategories";
import PopularNow from "src/components/popular_now/PopularNow";
import PopularUsers from "src/components/popular_users/PopularUsers";
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

  const Desktop = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      return (
        <div className="flex w-full flex-wrap xl:flex-col xl:flex-nowrap xl:gap-[30px] xl:border-l xl:pl-[15px]">
          <PopularNow />

          <CategoryList />

          <PopularUsers />
        </div>
      );
    }
  };

  return (
    <div className="container pt-[30px] mx-auto px-1 md:w-[1120px] md:px-0">
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
        {Desktop()}
      </div>
    </div>
  );
}
