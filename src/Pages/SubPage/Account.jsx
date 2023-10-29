import React, {useState, useEffect} from "react"
import { UserAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"; 
import { db } from "../../Firebase/firebaseConfig"


export default function Account() {
    const { user, logout } = UserAuth()
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState({
        first: "",
        last: "",
        email:"",
        phone:"",
        uid: "",
        disclaimer: false,
    })
    

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


useEffect(() => {
  const fetchData = async () => {
    try {
      const colRef = collection(db, "users");
      const docRef = doc(colRef, user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

        setProfileData({
            first: docSnap.data().first,
            last: docSnap.data().last,
            uid: docSnap.data().uid,
            email: docSnap.data().email,
            phone: docSnap.data().phone,
            disclaimer: docSnap.data().disclaimer,
            signUpDate: docSnap.data().signUpDate.toDate().toDateString(),
            
        });
          ;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  fetchData(); // Call the fetchData function inside the useEffect
}, [user.uid, db]);

console.log("test",profileData)



    return (
        <div className="Account-container">
            <h1 className="account-title">Account</h1>
            <h1> Need to add another nav bar in here. one for strict pref etc...</h1>
            <div className="account-data-container">
                <div className="account-details-title-container">
                    <p className="account-details">Name:</p>
                    <p className="account-details">User ID:</p>
                    <p className="account-details">Email:</p>
                    <p className="account-details">Phone:</p>
                    <p className="account-details">Disclaimer:</p>
                    <p className="account-details">Sign Up Date:</p>
                </div>
                <div className="account-details-data-container">
                    <p className="account-details-data">{profileData.first + " " + profileData.last}</p>
                    <p className="account-details-data">{profileData.uid }</p>
                    <p className="account-details-data">{profileData.email }</p>
                    <p className="account-details-data">{profileData.phone}</p>
                    <p className="account-details-data">{profileData.disclaimer ? "True" : "False"}</p>
                    <p className="account-details-data">{profileData.signUpDate}</p>
                </div>
            </div>
            <button
                onClick = {handleLogOut}
                className="logout-btn"
            > Logout </button>
        </div>
    )
}