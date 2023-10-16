import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

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
  to="/MembersArea/Welcome"
  end
  style={({ isActive }) => isActive ? activeStyles : null}
>
  Welcome
</NavLink>

<NavLink
  to="/MembersArea/ChefSurprise"
  style={({ isActive }) => isActive ? activeStyles : null}
>  
  Chef Surprise
</NavLink>

<NavLink
  to="/MembersArea/EasyOrder"
  style={({ isActive }) => isActive ? activeStyles : null}
>
  Easy Order
</NavLink>

<NavLink
  to="/MembersArea/AdvancedOrder"
  style={({ isActive }) => isActive ? activeStyles : null}
>
  Advanced Order
</NavLink>
<NavLink
  to="/MembersArea/Pantry"
  style={({ isActive }) => isActive ? activeStyles : null}
>
  Pantry
</NavLink>
<NavLink
  to="/MembersArea/Account"
  style={({ isActive }) => isActive ? activeStyles : null}
>
  Account
</NavLink>

      </nav>
      <Outlet />
    </>
  );
}
