import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Kitchen from "../Pages/SubPage/Kitchen.jsx";

export default function DashBoardLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="dashboard-nav">
        <NavLink
          style={({ isActive }) => isActive ? activeStyles : null}
          to="."
          end>
          Kitchen
        </NavLink>

        <NavLink
          to="ChefSurprise"
          style={({ isActive }) => isActive ? activeStyles : null}
        >  
          Chef Surprise
        </NavLink>

        <NavLink
          to="EasyOrder"

          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Easy Order
        </NavLink>

        <NavLink
          to="AdvancedOrder"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Advanced Order
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
