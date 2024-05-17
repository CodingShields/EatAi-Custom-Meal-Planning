import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../navBar/NavBar";
import NavBarDropDown from "../navBar/NavBarDropDown";
import NavBarItem from "../navBar/NavBarItem";

const Header = () => {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();

	return (
		<Navbar>
			<NavBarItem onClick={() => navigate("welcome")}>Welcome</NavBarItem>
			<NavBarItem onClick={() => navigate("about")}>About</NavBarItem>
			<NavBarItem onClick={() => navigate("dashboard")}>Dashboard</NavBarItem>
			<NavBarItem onClick={() => setDropDownOpen(!dropDownOpen)}>Ordering</NavBarItem>
			<NavBarItem onClick={() => navigate("social")}>Social</NavBarItem>
			<NavBarItem onClick={() => navigate("account")}>Account</NavBarItem>
			<NavBarItem>Support</NavBarItem>
			<NavBarDropDown open={dropDownOpen}>
				<div className='w-full bg-zinc-900  px-12 py-12 rounded-b-2xl shadow-2xl shadow-black'>
					<div className='grid grid-cols-1 gap-24 '>
						<div className='inline-flex gap-12'>
							<Link to='easy-order' onClick={() => setDropDownOpen(!dropDownOpen)}>
								Easy Order
							</Link>
							<h1> Easy Order Details</h1>
						</div>
						<div className='inline-flex gap-12'>
							<Link to='advanced-order' onClick={() => setDropDownOpen(!dropDownOpen)}>
								Advanced Order
							</Link>
							<h1> Advanced Order Details</h1>
						</div>
						<div className='inline-flex gap-12'>
							<Link to='chef-surprise' onClick={() => setDropDownOpen(!dropDownOpen)}>
								Chef Surprise
							</Link>
							<h1> Chef Surprise Details</h1>
						</div>
					</div>
				</div>
			</NavBarDropDown>
		</Navbar>
	);
};

export default Header;
