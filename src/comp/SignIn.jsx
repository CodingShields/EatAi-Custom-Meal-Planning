import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

import LoginChef from "../assets/images/LoginChef.png";


const SignIn = () => {
  const {signIn} = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/MembersArea/Welcome");
    } catch (e) {
      setError("Invalid credentials. Please try again.");
      console.log("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container-main">
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <img className="login-chef-img" src={LoginChef} alt="Chef" />

      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Sign In</button>
      {error && <p className="error-message">{error}</p>}
      </form>
      <button
        onClick={() => navigate("/SignUp")}
        className="current-member-link"
        style={{ textDecoration: "underline" }}
      >
        Not A Member? Sign-Up for Free!
      </button>
      </div>
      </div>
  );
};

export default SignIn;
