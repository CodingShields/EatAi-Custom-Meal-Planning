import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"


export default function ProtectedRoute() {

    const { user } = UserAuth();

    if (!user)
    {
        return <Navigate to="/SignUp" />;
    }

    return <Outlet />;
}
