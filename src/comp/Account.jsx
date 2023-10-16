import React, {useState} from "react"
import { UserAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Account() {
    
    const { user, logout } = UserAuth()
    const [error, setError] = useState(null);
    const navigate =useNavigate()
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
            <div className="account-data-container">
                <div className="account-details-title-container">
                    <p className="account-details">Display Name:</p>
                    <p className="account-details">User Email:</p>
                    <p className="account-details">User ID:</p>
                </div>
                <div className="account-details-data-container">
                    <p className="account-details-data">{user && user.displayName}</p>
                    <p className="account-details-data">{user && user.email}</p>
                    <p className="account-details-data">{user && user.uid }</p>
                </div>
            </div>
                
            <button
                onClick = {handleLogOut}
                className="logout-btn"> Logout </button>
        </div>
    )
}