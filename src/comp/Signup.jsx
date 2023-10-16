import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import LoginChef from "../assets/images/LoginChef.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Add first name state
  const [lastName, setLastName] = useState(""); // Add last name state
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Pass first name and last name to createUser function
      await createUser(email, password, firstName, lastName);
      navigate("/MembersArea/Welcome");
      console.log("You are Signed Up");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="login-container">
      <img src={LoginChef} className="login-chef-img" alt="Chef" />
      <h1 className="sign-up-title">Sign Up for a FREE Account</h1>
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
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button
        onClick={() => navigate("/SignIn")}
        className="current-member-link"
        style={{ textDecoration: "underline" }}
      >
        Already A Member? Login
      </button>
    </div>
  );
};

export default SignUp;
