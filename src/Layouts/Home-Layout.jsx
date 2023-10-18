import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../comp/Header"
import Footer from "../comp/Footer"

export default function HomeLayout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}