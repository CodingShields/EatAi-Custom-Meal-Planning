import React from "react"
import { UserAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Account() {
    
    const { user, logout } = UserAuth()

    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/Home")
            console.log("You are Logged Out");
        }catch (e) {
        setError(e.message);
        console.log(e.message);
        }
    }
    return (
        <div className="Account-container">
            <h1 className="account-title">Account</h1>
            <p className="account-details">User Email: {user && user.email}</p>
            <p className="account-details">User ID:</p>
            <p className ="account-details">User Name:</p>
            <button
                onClick = {handleLogOut}
                className="logout-btn"> Logout </button>
        </div>
    )
}