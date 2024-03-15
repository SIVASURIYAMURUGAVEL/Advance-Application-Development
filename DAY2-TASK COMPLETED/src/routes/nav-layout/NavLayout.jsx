import React from "react";
import { Outlet } from "react-router-dom";

import "../pages/custom.css";

import "./navLayout.css";

import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";

const NavLayout = () => {
  return (
    <main>
      <NavBar />
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          {/* outlet placeholder for child routes  being rendered in  */}
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default NavLayout;
