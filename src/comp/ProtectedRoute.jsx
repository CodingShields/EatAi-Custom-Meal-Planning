import React from "react"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"
import DashBoardLayout from "../comp/Dash-Board-Layout"
import Welcome from "../Pages/SubPage/Welcome"
import ChefSurprise from "../Pages/SubPage/Chef-Surprise"
import EasyOrder from '../Pages/SubPage/Easy-Order'
import AdvancedOrder from '../Pages/SubPage/Advanced-Order';
import Pantry from '../Pages/Pantry';
import Account from "../comp/Account"
import { Routes, Route } from "react-router-dom"


const ProtectedRoute = () => {
    const { user } = UserAuth();

    if (!user) return <Navigate to="/SignIn" />;

    return (
        <DashBoardLayout>
            <Routes>
                <Route path="/Welcome" element={<Welcome />} />
                <Route path="ChefSurprise" element={<ChefSurprise />} />
                <Route path="EasyOrder" element={<EasyOrder />} />
                <Route path="AdvancedOrder" element={<AdvancedOrder />} />
                <Route path="Pantry" element={<Pantry />} />
                <Route path="Account" element={<Account />} />
            </Routes>
        </DashBoardLayout>
    );
}
export default ProtectedRoute