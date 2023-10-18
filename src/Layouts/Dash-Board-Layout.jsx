import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashBoardLayout(){
  
    
    const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
      <>
      <nav className="dashboard-nav">
        <NavLink
          to="Welcome"
          end
          style={({ isActive }) => isActive ? activeStyles : null}
      >
      Welcome
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
      <NavLink
      to="Pantry"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Pantry
      </NavLink>
      <NavLink
      to="Account"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Account
      </NavLink>

      </nav>
      <Outlet />
      </>
      );
}

