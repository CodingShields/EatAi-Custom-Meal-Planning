import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore"; 
import Disclaimer from "./Disclaimer";
import LoginChef from "../assets/images/LoginChef.png";
import { useDisclaimerStore } from "../state-store/DisclaimerStore";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Add first name state
  const [lastName, setLastName] = useState(""); // Add last name state
  const [phone, setPhone] = useState(""); // Add phone number state
  const [renderSubmit, setRenderSubmit] = useState(false); // Add render submit state
  const [error, setError] = useState(null);
  const disclaimerState = useDisclaimerStore((state) => state.Disclaimer)
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  // const updateBodyStyle = () => {
  //   if (renderSubmit) {
  //     document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  //   } else {
  //     document.body.style.display = "null";
  //   }
  // };
  const handleClick = () => {
    setRenderSubmit(true)
      console.log("Button clicked",renderSubmit);;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    await createUser(email, password, firstName, lastName, phone);
    if (disclaimerState) {
      navigate("/MembersArea/Welcome");
      console.log("You are Signed Up");
    } else {
      setError("Please accept the disclaimer before signing up.");
    }
  } catch (e) {
    setError(e.message);
    console.log(e.message);
  }
};

  useEffect(() => {
    // updateBodyStyle();
    setRenderSubmit(false)
  }, [])

  console.log(createUser)
  return (
    <div
      className="login-container">
      {renderSubmit ? <Disclaimer />:""}
      <h1 className="sign-up-title">Sign Up for a FREE Account</h1>
      <img src={LoginChef} className="login-chef-img" alt="Chef" />
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          required
        />
        <input
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
          required
        />
        <input
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Cell Phone Number"
          required
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <p className="sign-up-disclaimer-text">To Complete Sign-Up Please View and Sign Disclaimer</p>
        {disclaimerState ? (""):(<button onClick={handleClick}>Click To View and Sign Disclaimer</button>)}
        {disclaimerState ? <button onClick={handleSubmit}>Sign Up</button>:""}
      </form>
      <button
        onClick={() => navigate("/")}
        className="current-member-link"
        style={{ textDecoration: "underline" }}
      >
        Already A Member? Login
      </button> 
    </div>
  );
};

export default SignUp;
