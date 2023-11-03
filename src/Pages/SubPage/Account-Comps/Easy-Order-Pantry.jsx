import React, { useState, useEffect } from "react"
import star from "../../../assets/images/star.svg"
import blankStar from "../../../assets/images/blank-star.svg"
import { db } from "../../../Firebase/fireBaseConfig"
import {query, collection, getDocs, onSnapshot, where} from "firebase/firestore"
import {UserAuth} from "../../../Context/AuthContext"

export default function EasyOrderPantry() {

    const [easyOrderPantry, setEasyOrderPantry] = useState([])
    const [loading, setLoading] = useState(false)
    const user = UserAuth();
    const userId = user.user.uid;


    useEffect(() => {
        const q = query(collection(db, "users"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({ ...doc.data(), id: doc.id });

            })
            setEasyOrderPantry(data)
        })
        return unsubscribe
    }, [])

    function renderStars(score) {
  const maxStars = 5;
  const starIcons = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= score) {
      starIcons.push(<img key={i} className="easy-order-score-star"src={star} alt="Filled Star" />);
    } else {
      starIcons.push(<img key={i} className="easy-order-score-star" src={blankStar} alt="Blank Star" />);
    }
  }

  return starIcons;
}



    
    console.log("data", easyOrderPantry);
    console.log(userId);

    return (

        <div className="easy-order-pantry-container">
            <div className="easy-order-pantry-title-container">
                <h3>Date</h3>
                <h3>Menu Item</h3>
                <h3>Score</h3>
                </div>
                    {easyOrderPantry.map((item) => {
                        return (
                            <div
                                key={item[0]}
                                className="easy-order-pantry-details-container">
                                <div className="easy-order-pantry-date-container">
                                    <h3 >{item.easyOrderPantry.date}</h3>
                                </div>
                                <div className="easy-order-pantry-menu-item-container">
                                    <h3>{item.easyOrderPantry.menuItem}</h3>
                                </div>
                                <div className="easy-order-pantry-score-container">
                                    {renderStars(item.easyOrderPantry.score)}
                                </div>
                                <div className="easy-order-pantry-btn-container">
                                <button className="easy-order-pantry-btn">Delete</button>
                                <button className="easy-order-pantry-btn">Download</button>
                                <button className="easy-order-pantry-btn">Share</button>
                                </div>
                                
                                </div>
                        )})
                    }
                    
             
                    
            
            
        
        
        </div>
    )
}