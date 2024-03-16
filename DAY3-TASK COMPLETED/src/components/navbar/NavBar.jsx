import React from "react";
import "./navbar.css";
import LOGO from "../../assets/logo-main.png";
import { CiUser } from "react-icons/ci";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="logo-container">
        <img src={LOGO} className="logo" alt="logo" />
        <p>QuickCharge</p>
      </div>

      <div className="login-container">
        <CiUser className="profile-logo" />

        <p className="login-text">Login / Register</p>
      </div>
    </header>
  );
};

export default NavBar;
