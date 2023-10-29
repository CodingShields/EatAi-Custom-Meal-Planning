import React, {useState, useEffect} from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"; 
import { db } from "../../Firebase/firebaseConfig"


export default function Account() {
    
    const { user, logout } = UserAuth()
    const [error, setError] = useState(null);
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

    const handleGetData = async () => {
        const colRef = collection(db, "users")
        const docRef = doc(colRef, user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    
    
    
    }


    return (
        <div className="Account-container">
            <h1 className="account-title">Account</h1>
            <h1> Need to add another nav bar in here. one for strict pref etc...</h1>
            <div className="account-data-container">
                <div className="account-details-title-container">
                    <p className="account-details">Display Name:</p>
                    <p className="account-details">User ID:</p>
                    <p className="account-details">User Email:</p>
                    <p className="account-details">User Phone:</p>
                    <p className="account-details">Disclaimer:</p>
                </div>
                <div className="account-details-data-container">
                    <p className="account-details-data"></p>
                    <p className="account-details-data"></p>
                    <p className="account-details-data"></p>
                    <p className="account-details-data"></p>
                    <p className="account-details-data"></p>
                </div>
            </div>
            <button
            onClick={handleGetData}
            >get data</button>
            <button
                onClick = {handleLogOut}
                className="logout-btn"
            > Logout </button>
        </div>
    )
}