import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout(){
  
    
    const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
      <>
      <nav className="dashboard-nav">
        <NavLink
          to="Profile"
          end
          style={({ isActive }) => isActive ? activeStyles : null}
      >
      Welcome
      </NavLink>

      <NavLink
      to="PastOrders"
      style={({ isActive }) => isActive ? activeStyles : null}
        >  
      Chef Surprise
      </NavLink>

      <NavLink
      to="EasyOrder"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Group Order (Easy Order/ Need To Change Names)
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

