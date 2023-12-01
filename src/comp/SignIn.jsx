import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

import LoginChef from "../assets/images/LoginChef.png";

const SignIn = () => {
	const { signIn } = UserAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
	});

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({ error: false, errorMessage: "" });
		try {
			await signIn(email, password);
			navigate("/MembersArea/Welcome");
		} catch (e) {
			setState({ error: true, errorMessage: "Invalid credentials. Please try again." });

			setTimeout(() => {
				setState({ error: false, errorMessage: "" });
			}, 3000);
			console.log("Invalid credentials. Please try again.");
		}
	};

	useEffect(() => {
		setState({ error: false, errorMessage: "" });
	}
		, [email, password]);
	

	return (
		<div className='flex w-auto h-full p-12 m-auto'>
			{state.error ? <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
				<div 
					className="fixed flex flex-row bg-orange-100 border-4 rounded-lg shadow-lg re t-lg w-fit h-fit border-amber-800 shadow-black">
					<p className="w-auto h-auto p-4 text-center ">{state.errorMessage}</p>
					</div>
				</div> : ""}
			<div className='p-4 pl-20 pr-20 m-auto bg-orange-100 border-4 shadow-lg w-fit h-fit rounded-xl border-amber-800 shadow-black'>
				<h1 className='mb-4 text-4xl font-bold text-center'>Welcome!</h1>
				<img className='w-auto m-auto mb-4 h-72' src={LoginChef} alt='Login Chef' />
				<form onSubmit={handleSubmit} className='flex flex-col content-start justify-start'>
					<input
						className='w-auto h-auto p-2 m-2 text-gray-700 placeholder-gray-600 border rounded-lg shadow-md shadow-black '
						name='email'
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Email address'
						required
					/>
					<input
						className='w-auto h-auto p-2 m-2 text-gray-700 placeholder-gray-600 border rounded-lg shadow-md shadow-black'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						type='password'
						placeholder='Password'
						required
					/>
					<button
						className='w-auto h-auto p-2 m-2 mb-4 text-black bg-red-400 border-0 rounded-lg shadow-md shadow-black hover:bg-red-700 hover:text-white hover:font-bold active:translate-y-1 '
						type='submit'
					>
						Sign In
					</button>
					{state.error ? <p className='error-message'>{state.errorMessage}</p> : ""}
				</form>
				<button
					onClick={() => navigate("/SignUp")}
					className='m-auto mb-4 text-blue-500 hover:text-blue-700 hover:font-bold active:translate-y-1'
					style={{ textDecoration: "underline" }}
				>
					Not A Member? Sign-Up for Free!
				</button>
			</div>
		</div>
	);
};

export default SignIn;
