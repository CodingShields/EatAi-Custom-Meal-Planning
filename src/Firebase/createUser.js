import { doc, setDoc } from "firebase/firestore"; 
import { UserAuth } from "../Context/AuthContext"

const { user } = UserAuth()
    
await setDoc(doc(db, "c", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});