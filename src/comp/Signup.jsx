import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import LoginChef from "../assets/images/LoginChef.png"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const createUser = UserAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/Account")
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="login-container">
      <img src={LoginChef} className="login-chef-img"></img>
      <h1 className="signup-title">Sign Up for a FREE Account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">
           Sign Up
        </button>
      </form>
      <button
        onClick={() => navigate("/Login")}
        className="member-link"
        style={{ textDecoration: "underline" }}
      >
        Already A Member? Login 
      </button>
    </div>
  );
};

export default SignUp;
