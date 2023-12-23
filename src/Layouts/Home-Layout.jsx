import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import { UserAuth } from "../Context/AuthContext";

export default function HomeLayout() {
	const user = UserAuth();

	return (
		<>
			<Header />
			<main className='flex items-center justify-center flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
