import React, { useState } from "react";
// import { useNavigate} from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import LoginChef from "../assets/images/LoginChef.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const loginUser = UserAuth(); // Use the authentication function from your context
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(email, password); // Use your authentication function
     ;
      console.log("click");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <img className="login-chef-img" src={LoginChef} alt="Chef" />

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
        <button type="submit">Sign In</button>
      </form>
      
    </div>
  );
};

export default Login;
