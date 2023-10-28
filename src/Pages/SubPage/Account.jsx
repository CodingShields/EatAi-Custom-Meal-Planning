import React, {useState} from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useNewUserStore } from "../../state-store/NewUserStore"

export default function Account() {
    
    const { user, logout } = UserAuth()
    const [error, setError] = useState(null);
    const disclaimerState = useNewUserStore((state) => state.disclaimer)
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/")
            console.log("You are Logged Out");
        }catch (e) {
        setError(e.message);
        console.log(e.message);
        }
    }
    console.log(disclaimerState);
    return (
        <div className="Account-container">
            <h1 className="account-title">Account</h1>
            <h1> Need to add another nav bar in here. one for strict pref etc...</h1>
            <div className="account-data-container">
                <div className="account-details-title-container">
                    <p className="account-details">Display Name:</p>
                    <p className="account-details">User Email:</p>
                    <p className="account-details">User Phone:</p>
                    <p className="account-details">User ID:</p>
                    <p className="account-details">Disclaimer:</p>
                </div>
                <div className="account-details-data-container">
                    <p className="account-details-data">{user && user.displayName}</p>
                    <p className="account-details-data">{user && user.email}</p>
                    <p className="account-details-data">{user && user.phoneNumber}</p>
                    <p className="account-details-data">{user && user.uid}</p>
                    <p className="account-details-data">{disclaimerState}</p>
                </div>
            </div>
                
            <button
                onClick = {handleLogOut}
                className="logout-btn"
            > Logout </button>
        </div>
    )
}