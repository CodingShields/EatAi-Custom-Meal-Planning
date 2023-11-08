import React, { useState, useEffect } from "react"
import star from "../../../assets/images/star.svg"
import emptyStar from "../../../assets/images/emptyStar.svg"
import { db } from "../../../Firebase/fireBaseConfig"
import {doc, query, collection, getDoc, onSnapshot, where, updateDoc, setDoc, deleteField} from "firebase/firestore"
import {UserAuth} from "../../../Context/AuthContext"

export default function EasyOrderPantry() {

    const [easyOrderPantry, setEasyOrderPantry] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedSummary, setSelectedSummary] = useState(null)
    const [summaryRender, setSummaryRender] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = UserAuth();
    const userId = user.user.uid;
    const [starScores, setStarScores] = useState({});
    const [error, setError] = useState(null);


    useEffect(() => {
  const q = query(collection(db, "users"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    try {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setEasyOrderPantry(data[0]?.pantry.easyOrder || []);

      // Initialize starScores based on fetched data
      const initialStarScores = {};
      data[0]?.pantry.easyOrder.forEach((item) => {
        initialStarScores[item.id] = item.score || 0;
      });
        setStarScores(initialStarScores);
        setLoading(false); // Data has been fetched successfully
    } catch (error) {
      setError(error); // Handle any errors that occur during data retrieval
      setLoading(false); // Set loading to false even in case of errors
    }
  });

  return unsubscribe;
}, []);


    console.log(easyOrderPantry);
const renderStars = (itemId, score, index) => {
  const maxStars = 5;
  const starIcons = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= score) {
      starIcons.push(
        <img
          key={i}
          className="easy-order-score-star"
          src={star}
          alt="Filled Star"
          onClick={() => handleStarScore(itemId, i, index)} // Update score when filled star is clicked
        />
      );
    } else {
      starIcons.push(
        <img
          key={i}
          className="easy-order-score-star"
          src={emptyStar}
          alt="Blank Star"
          onClick={() => handleStarScore(itemId, i, index)} // Update score when empty star is clicked
        />
      );
    }
  }
  return starIcons;
};

    
    const handleModalRender = (summary) => {
        setSelectedSummary(summary)
        setIsModalOpen(true)

        document.body.classList.add("blur-body");
    }

 // Assuming itemId represents the index

    const handleStarScore = async (itemId, score, index) => {
        try {
            const userDocRef = doc(db, "users", userId);
            const pantryDoc = await getDoc(userDocRef);
            const pantry = pantryDoc.data().pantry;
            const easyOrder = pantry.easyOrder;
            const easyOrderItem = easyOrder[index];
            easyOrderItem.score = score;
            easyOrder[index] = easyOrderItem;
            await setDoc(userDocRef, {pantry: pantry});
            setStarScores((prevStarScores) => ({
                ...prevStarScores,
                [itemId]: score,
            }));
        } catch (error) {
            console.error(error);
       }
    }






    return (

        <div className="easy-order-pantry-container">
                    {easyOrderPantry.map((item, index) => {
                        return (
                            <div
                                style={{
                                    filter: summaryRender ? "blur(2px)" : "none",
                                        }}
                                key={index}
                                className="easy-order-pantry-details-container">
                                <div className="easy-order-pantry-date-container">
                                        <h3 className="easy-order-pantry-text">Date</h3>
                                            {item.date}
                                </div>
                                    <div className="easy-order-pantry-menu-item-container">
                                        <h3 className="easy-order-pantry-text"
                                        >
                                        Menu Item
                                    </h3>
                                        {item.title}
                                    </div>
                                        <div className="easy-order-pantry-summary-container">
                                        <h3 className="easy-order-pantry-text">
                                            Summary</h3>
                                    <button
                                        className="easy-order-pantry-summary-btn"
                                        onClick={()=>handleModalRender(item.summary)}        
                                    >
                                            View Summary
                                            </button>
                                        
                                </div>
                                <div className="easy-order-pantry-score-container">
                                    <h3
                                    className="easy-order-pantry-score-text"
                                    >Score </h3>
                                    <div className="easy-order-star-container">
                                        {renderStars(item.id, starScores[item.id], index)}
                                        </div>
                                </div>
                                <div className="easy-order-pantry-btn-container">
                                <button className="easy-order-pantry-btn">Delete</button>
                                <button className="easy-order-pantry-btn">Download</button>
                                <button className="easy-order-pantry-btn">Share</button>
                                </div>
                            </div>
                        )
                    }
                    )
            }
            {isModalOpen && (
        <div className="easy-order-summary-text-modal">
          {selectedSummary}
          <button
            className="easy-order-pantry--modal-btn"
            onClick={()=>{setIsModalOpen(false)}}
          >
            Close Summary
          </button>
        </div>
      )}
    </div>
  );
}