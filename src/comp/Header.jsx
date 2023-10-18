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
            <Link  to="/" className="site-logo">EatAi</Link>
            <nav>
                <NavLink
                    to="/About"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/Support"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Support
                </NavLink>
            </nav>
        </header>
    )
}