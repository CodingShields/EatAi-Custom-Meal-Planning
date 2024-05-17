import { Outlet } from "react-router-dom"
import Header from "../comp/Header"
import Footer from "../comp/Footer"
import { UserAuth } from "../Context/AuthContext"

export default function HomeLayout() {
    const user = UserAuth()
  
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}