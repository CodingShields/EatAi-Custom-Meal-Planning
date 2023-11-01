import React, { useState, useEffect } from "react"
import star from "../../../assets/images/star.svg"
import blankStar from "../../../assets/images/blank-star.svg"

export default function AdvancedOrderPantry() {



    return (
            
            <div className="advanced-order-pantry-container">
            <h1>Easy Order Pantry</h1>
            <div className="advanced-order-pantry-details-container">
                <div className ="advanced-order-pantry-date-container">
                    <h3>Date</h3>
                    <h3>date</h3>
                </div>
                <div className="advanced-order-pantry-menu-item-container">
                    <h3>Menu Item</h3>
                    <h3>item</h3>
                </div>
                <div className="advanced-order-pantry-score-container">
                    <h3>Score</h3>
                    <div className="advanced-order-star-container">
                        <img src={star} className="advanced-order-score-star" />
                        <img src={star} className="advanced-order-score-star" />
                        <img src={star} className="advanced-order-score-star" />
                        <img src={star} className="advanced-order-score-star" />
                        <img src={star} className="advanced-order-score-star" />
                    </div>    
                </div>
                <div className="advanced-order-pantry-delete-container">
                        <button className="advanced-order-pantry-delete-btn">Delete</button>
                    </div>
            </div>
            
        
        
        </div>
    )
}