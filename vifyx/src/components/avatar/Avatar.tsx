import React, { useState } from "react";
import avatar from "../../images/icons/avatar.jpg";
import SidebarModal from "../modals/SidebarModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closeModal, openModal } from "../../redux/features/modal_status/modalStatusSlice";

export default function Avatar() {
  const dispatch = useDispatch();
  const menuSidebarModal = useSelector((state: RootState) => state.modalStatuses.modals.menu_sidebar.isOpen);

  const handleClick = () => {
    if (menuSidebarModal){
      dispatch(closeModal("menu_sidebar"))
    } else {
      dispatch(openModal("menu_sidebar"))
    }
  };

  return (
    <div className="w-[35px] lg:w-full relative">
      <button onClick={handleClick}>
        <img src={avatar} alt="avatar" />
      </button>
      {menuSidebarModal && <SidebarModal />}
    </div>
  );
}
