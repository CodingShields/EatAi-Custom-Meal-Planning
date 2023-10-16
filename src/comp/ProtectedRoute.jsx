import React from "react"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"
// import DashBoardLayout from "./Dash-Board-Layout"

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth()
    if (!user) return <Navigate to="/SignIn" />
    
    return children;
}

export default ProtectedRoute
