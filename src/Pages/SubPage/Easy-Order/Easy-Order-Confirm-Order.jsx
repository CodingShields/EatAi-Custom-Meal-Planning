import React, { useEffect } from "react"
import { useEasyOrderStore } from "../../../state-store/easyOrderStore"
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore"
import EasyOrderStartOverButton from "./Easy-Order-Buttons/Easy-Order-Start-Over-Button"
import EasyOrderBackButton from "./Easy-Order-Buttons/Easy-Order-Back-Button"


const EasyOrderConfirmOrder = () => {



    return (
        <>
            <div>
                <h2> Double Check Your Order Details On The Right.
                    If you see anything you would like to change,
                    just click on the Option Title to go back and change. If You are ready to send it off to the Chef, just click "Order Now".</h2>
                <button> Order Now</button>
            </div>
            <div>
                <h2>
                    
                </h2>
            </div>
            
        
        
        </>




    )
}

export default EasyOrderConfirmOrder