import React from 'react'
import { Link } from "react-router-dom";
import icon1 from "../../images/icons/Icons_1.svg";
import icon2 from "../../images/icons/Icons_2.svg";
import icon3 from "../../images/icons/Icons_3.svg";
import icon4 from "../../images/icons/Icons_4.svg";
import Logo from "../../components/logo/Logo";
import MenuList from "../../components/menu_list/MenuList";
import Avatar from '../avatar/Avatar';


export default function Header() {
  return (
    <header className="pt-[30px]">
        <div className="container md:px-0 px-1 md:w-[1120px] mx-auto flex justify-between items-center border-b pb-[25px]">
          <Logo />
          <MenuList />
          <div className="inline-flex gap-[28px] items-center">
            <div className="inline-flex space-x-[9px] lg:space-x-[20px]">
              {/* icons group */}
              <div className="w-[22px] lg:w-[30px]">
                <Link to="/">
                  <img src={icon3} alt="icon3" />
                </Link>
              </div>
              <div className="w-[22px] lg:w-[30px]">
                <Link to="/">
                  <img src={icon2} alt="icon2" />
                </Link>
              </div>
              <div className="w-[22px] lg:w-[30px]">
                <Link to="/">
                  <img src={icon1} alt="icon1" />
                </Link>
              </div>
              <div className="w-[22px] lg:w-[30px]">
                <Link to="/">
                  <img src={icon4} alt="icon4" />
                </Link>
              </div>
            </div>
            <Avatar/>
          </div>
        </div>
      </header>
  )
}
