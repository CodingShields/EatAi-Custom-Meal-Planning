import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (

				<header class='flex flex-row justify-between items-center text-black w-fit mx-auto '>
					<Link to='/' className='text-7xl'>
						EatAi
					</Link>
					<nav>
							<NavLink
								className='items-center justify-end mr-8 text-3xl ml-72'
								to='/About'
								style={({ isActive }) => (isActive ? activeStyles : null)}
							>
								About
							</NavLink>
							<NavLink
								className='justify-end object-right text-3xl'
								to='/Support'
								style={({ isActive }) => (isActive ? activeStyles : null)}
							>
								Support
							</NavLink>
					</nav>
				</header>
		);
}