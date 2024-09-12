import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import RegistrationModal from "../modals/RegistrationModal";
import LoginModal from "../modals/LoginModal";


export default function Layout() {
  return (
    <div className="flex flex-col w-full h-[100vh] gap-[30px]">
      <Header />
      <main className="flex-auto" id="main">
        <Outlet />
      </main>
      <Footer />
      <RegistrationModal/>
      <LoginModal/>
    </div>
  );
}
