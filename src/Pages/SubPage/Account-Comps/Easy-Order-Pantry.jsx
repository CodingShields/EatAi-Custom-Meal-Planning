import React, { useState, useEffect } from "react"
import star from "../../../assets/images/star.svg"
import blankStar from "../../../assets/images/blank-star.svg"


export default function EasyOrderPantry() {





    return (

        <div className="easy-order-pantry-container">
            <h1>Easy Order Pantry</h1>
            <div className="easy-order-pantry-details-container">
                <div className ="easy-order-pantry-date-container">
                    <h3>Date</h3>
                    <h3>date</h3>
                </div>
                <div className="easy-order-pantry-menu-item-container">
                    <h3>Menu Item</h3>
                    <h3>item</h3>
                </div>
                <div className="easy-order-pantry-score-container">
                    <h3>Score</h3>
                    <div className="easy-order-star-container">
                        <img src={star} className="easy-order-score-star" />
                        <img src={star} className="easy-order-score-star" />
                        <img src={star} className="easy-order-score-star" />
                        <img src={star} className="easy-order-score-star" />
                        <img src={star} className="easy-order-score-star" />
                    </div>    
                </div>
                <div className="easy-order-pantry-btn-container">
                    <button className="easy-order-pantry-btn">Delete</button>
                    <button className="easy-order-pantry-btn">Download</button>
                    <button className="easy-order-pantry-btn">Share</button>
                    </div>
            </div>
            
        
        
        </div>
    )
}