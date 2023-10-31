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
      <nav className="dashboard-nav">
      <NavLink
      to="AccountHome"
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
      to="PastChefSurprise"
      style={({ isActive }) => isActive ? activeStyles : null}
        >  
       Past Chef Surprise
      </NavLink>

      <NavLink
      to="PastEasyOrder"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
      Group Order (Easy Order/ Need To Change Names)
      </NavLink>

      <NavLink
      to="PastAdvancedOrder"
      style={({ isActive }) => isActive ? activeStyles : null}
        >
       Past Advanced Order
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

