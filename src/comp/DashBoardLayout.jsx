import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashBoard from "../Pages/Dashboard";

export default function DashBoardLayout() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  return (
    <>
      <nav className="dashboard-nav">
        <NavLink
          style={({ isActive }) => isActive ? activeStyles : null}
          to="."
          end>
          DashBoard
        </NavLink>

        <NavLink
          to="ChefSurprise"
          onMouseEnter={() => handleHover("ChefSurprise")}
          onMouseLeave={() => handleHover(null)}
          style={({ isActive }) => isActive ? activeStyles : null}
        >  
          Chef Surprise
        </NavLink>

        <NavLink
          to="EasyOrder"
          onMouseEnter={() => handleHover("EasyOrder")}
          onMouseLeave={() => handleHover(null)}
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Easy Order
        </NavLink>

        <NavLink
          to="AdvancedOrder"
          onMouseEnter={() => handleHover("AdvancedOrder")}
          onMouseLeave={() => handleHover(null)}
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Advanced Order
        </NavLink>
      </nav>
      <Outlet />
      <DashBoard tabName={hoveredItem} />
    </>
  );
}
