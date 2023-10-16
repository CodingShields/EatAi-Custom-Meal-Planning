import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const  DashBoardLayout = () => {
  
  const[test, setTest] = React.useState("")
    
    const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
console.log(test);
  return (
      <>
      <nav className="dashboard-nav">
        <NavLink
          to="/MembersArea/Welcome"
          end
          style={({ isActive }) => isActive ? activeStyles : null}
          onClick={(e) => setTest(e.target) }
      >
      Welcome
      </NavLink>

      <NavLink
      to="/MembersArea/ChefSurprise"
      style={({ isActive }) => isActive ? activeStyles : null}
      onClick={(e) => setTest(e.target) }
        >  
      Chef Surprise
      </NavLink>

      <NavLink
      to="/MembersArea/EasyOrder"
      style={({ isActive }) => isActive ? activeStyles : null}
      onClick={(e) => setTest(e.target) }
        >
      Easy Order
      </NavLink>

      <NavLink
      to="/MembersArea/AdvancedOrder"
      style={({ isActive }) => isActive ? activeStyles : null}
      onClick={(e) => setTest(e.target) }
        >
      Advanced Order
      </NavLink>
      <NavLink
      to="/MembersArea/Pantry"
      style={({ isActive }) => isActive ? activeStyles : null}
      onClick={(e) => setTest(e.target) }
        >
      Pantry
      </NavLink>
      <NavLink
      to="/MembersArea/Account"
      style={({ isActive }) => isActive ? activeStyles : null}
      onClick={(e) => setTest(e.target) }
        >
      Account
      </NavLink>

      </nav>
      <Outlet />
      </>
      );
}
export default DashBoardLayout
