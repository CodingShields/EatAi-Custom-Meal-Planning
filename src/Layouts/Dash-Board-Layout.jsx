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
			<nav className='flex flex-row justify-center gap-6 mt-4'>
				<NavLink className='text-3xl' to='Welcome' end style={({ isActive }) => (isActive ? activeStyles : null)}>
					Welcome
				</NavLink>

				<NavLink className='text-3xl' to='ChefSurprise' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Chef Surprise
				</NavLink>

				<NavLink className='text-3xl' to='EasyOrder' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Easy Order
				</NavLink>

				<NavLink className='text-3xl' to='AdvancedOrder' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Advanced Order
				</NavLink>
				<NavLink className='text-3xl' to='Pantry' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Pantry
				</NavLink>
				<NavLink className='text-3xl' to='AccountHome' style={({ isActive }) => (isActive ? activeStyles : null)}>
					Account
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

