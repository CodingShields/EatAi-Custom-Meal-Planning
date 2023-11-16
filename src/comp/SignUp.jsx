import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { useNewUserStore } from "../stateStore/NewUserStore.js";
import Disclaimer from "./Disclaimer.jsx";
import LoginChef from "../assets/images/LoginChef.png";



const SignUp = () => {
  const [form, setForm] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    password:"",
  });
  const [renderSubmit, setRenderSubmit] = useState(false); 
  const [error, setError] = useState(null);
  const disclaimerState = useNewUserStore((state) => state.disclaimer)
  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    setRenderSubmit(true)
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (disclaimerState) {
    try {
      await createUser(form);
          navigate("/MembersArea/Welcome");
    } catch (e) {
      setError(e.message);
    }
  } else {
    setError("Please accept the disclaimer before signing up.");
  }
  };

  return (
		<div className='login-container'>
			{renderSubmit ? <Disclaimer /> : ""}
			<h1 className='sign-up-title'>Sign Up for a FREE Account</h1>
			<img src={LoginChef} className='login-chef-img' alt='Chef' />
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onSubmit={handleSubmit}
				className='login-form'
			>
				<input
					style={{ width: "300px" }}
					name='firstName'
					value={form.firstName}
					onChange={(e) => {
						setForm({ ...form, firstName: e.target.value });
					}}
					type='text'
					placeholder='First Name'
					required
				/>
				<input
					name='lastName'
					value={form.lastName}
					style={{ width: "300px" }}
					onChange={(e) => {
						setForm({ ...form, lastName: e.target.value });
					}}
					type='text'
					placeholder='Last Name'
					required
				/>
				<input
					name='email'
					value={form.email}
					style={{ width: "300px" }}
					onChange={(e) => {
						setForm({ ...form, email: e.target.value });
					}}
					type='email'
					placeholder='Email address'
					required
				/>
				<input
					name='phone'
					value={form.phone}
					style={{ width: "300px" }}
					onChange={(e) => {
						setForm({ ...form, phone: e.target.value });
					}}
					type='phone'
					placeholder='Cell Phone Number'
					required
				/>
				<input
					name='password'
					value={form.password}
					style={{ width: "300px" }}
					onChange={(e) => {
						setForm({ ...form, password: e.target.value });
					}}
					type='password'
					placeholder='Password'
					required
				/>
				<p className='sign-up-disclaimer-text'>To Complete Sign-Up Please View and Sign Disclaimer</p>
				{disclaimerState ? "" : <button onClick={handleClick}>Click To View and Sign Disclaimer</button>}
				{disclaimerState ? <button onClick={handleSubmit}>Sign Up</button> : ""}
			</form>
			<button onClick={() => navigate("/")} className='current-member-link' style={{ textDecoration: "underline" }}>
				Already A Member? Login
			</button>
		</div>
	);
};

export default SignUp;
