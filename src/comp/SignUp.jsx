import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { useNewUserStore } from "../state-store/NewUserStore";
import Disclaimer from "./Disclaimer.jsx";
import LoginChef from "../assets/images/LoginChef.png";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renderSubmit, setRenderSubmit] = useState(false); 
  const [error, setError] = useState(null);
  const disclaimerState = useNewUserStore((state) => state.disclaimer)
  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    setRenderSubmit(true)
    console.log("clicked");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (disclaimerState) {
    try {
      await createUser(firstName, lastName, email, phone, password);
      console.log("done creating user");
      setTimeout(() => {
        navigate("/MembersArea/Welcome");
      }, 500);

    } catch (e) {
      setError(e.message);
    }
  } else {
    setError("Please accept the disclaimer before signing up.");
  }
};

  useEffect(() => {
    console.log("Component unmounted or reset renderSubmit");
    setRenderSubmit(false)
  }, [])

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
