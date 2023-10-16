import React from "react"
import { Link, NavLink } from "react-router-dom"
import loginAvatar from "../assets/images/loginAvatar.png"


export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link  to="/Home" className="site-logo">EatAi</Link>
            <nav>
                <NavLink
                    to="/About"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/SignIn"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/SignUp"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    SignUp
                </NavLink>
            </nav>
        </header>
    )
}