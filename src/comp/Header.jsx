import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }



    return (
        <header>
            <Link  to="/">#FOODLIFE</Link>
            <nav>
                <NavLink
                    to="/About"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/PersonalChef"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Personal Chef
                </NavLink>
                <NavLink
                    to="/Pantry"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    My Pantry
                </NavLink>
                
            </nav>
        </header>
    )
}