import React, { useState } from "react";
import { Link } from "react-router-dom";
import  {UserAuth } from "../Context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const createUser = UserAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-error">{location.state.message}</h3>
      )}
      <h1>Sign Up for a FREE Account</h1>
      {error?.message && <h3 className="login-error">{error.message}</h3>}

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
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Setting Up Account..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
