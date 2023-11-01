import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AccountNavBar(){
  
    
    const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
      <>
      <nav className="account-nav">
      <NavLink
      to="/MembersArea/AccountHome"
      end
      style={({ isActive }) => isActive ? activeStyles : null}
      >
      Account Home  
      </NavLink>
      <NavLink
      to="Profile"
      end
      style={({ isActive }) => isActive ? activeStyles : null}
      >
      Profile 
      </NavLink>

      <NavLink
      to="EasyOrderPantry"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Easy Order Pantry
      </NavLink>

      <NavLink
      to="AdvancedOrderPantry"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Advanced Order Pantry
      </NavLink>
      </nav>
      <Outlet />
      </>
      );
}

