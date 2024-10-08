import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LoginModal from "../modals/LoginModal";
import RegistrationModal from "../modals/RegistrationModal";

export default function Layout() {
  return (
    <div className="flex flex-col w-full h-[100vh] gap-[30px]">
      <Header />
      <main className="flex-auto" id="main">
        <Outlet />
      </main>
      <Footer />
      <RegistrationModal />
      <LoginModal />
    </div>
  );
}
