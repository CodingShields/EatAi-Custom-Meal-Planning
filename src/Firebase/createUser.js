import { doc, setDoc } from "firebase/firestore"; 
import { UserAuth } from "../Context/AuthContext"

const { user } = UserAuth()
    console.log("test",user);
await setDoc(doc(db, "c", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});