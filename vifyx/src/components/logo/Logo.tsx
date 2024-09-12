import React from "react";
import main_logo from "../../images/logos/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <div className="w-[116px] lg:w-full">
        <Link to="/">
          <img src={main_logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}
