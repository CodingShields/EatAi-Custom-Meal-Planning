import React, { useState, useEffect } from "react";
//DB
import { db } from "../../../Firebase/fireBaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
//auth
import { UserAuth } from "../../../Context/AuthContext.jsx";
// Global State
import { useAdvancedOrderProfileStore } from "../../../stateStore/AdvancedOrderProfileStore.js";
import { useAdvancedOrderProfileStoreActions } from "../../../stateStore/AdvancedOrderProfileStore.js";
import SearchingIcon from "../../../comp/SearchingIcon.jsx";
import Modal from "../../../comp/Modal.jsx";
import closeButtonIcon from "../../../assets/icons/closeButtonIcon.svg";
const ProfileSearch = ({ handleConfirm, updateMessage }) => {
	const user = UserAuth();
	const userId = user.user.uid;
	const { advancedProfileFound } = useAdvancedOrderProfileStoreActions((actions) => actions);

	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		errorModal: false,
	});

	const CheckForProfile = async () => {
		try {
			const userDocRef = doc(db, "users", userId);
			const userDocSnap = await getDoc(userDocRef);
			const userDocData = userDocSnap.data();
			console.log(userDocData);
			if (userDocData.advancedOrder) {
				setState({ ...state, loading: false });
				updateMessage("Awesome, you're all set !");
				console.log("success");
			} else {
				setState({ ...state, loading: false });
				updateMessage("No profile found, lets create one. If you believe this is an error, please contact support.");
				console.log("no profile");
			}
		} catch (error) {
			console.log(error);
			setState({ ...state, loading: false, error: true, errorModal: true, errorMessage: error.message });
		}
	};

	const HandleProfileSearch = (e) => {
		if (e.target.value === "Yes" || e.target.value === "I am not sure ?") {
			setState({ ...state, loading: true });
			CheckForProfile();
		}
	};

	const HandleModalClose = () => {
		console.log("test");
		setState({ ...state, error: false, errorModal: false, errorMessage: "" });
	};

	const errorModalStyle = [
		"flex justify-between items-center text-white bg-red-500/80 text-3xl mx-auto my-auto w-fit h-fit px-12 py-4 rounded-2xl shadow-2xl shadow-white/50 space-x-12 fill-white stroke-white",
	];
	const errorModalCloseButtonStyle = ["w-10 h-10 text-white hover:animate-pulse cursor-pointer"];
	return (
		<div className='h-[200px] w-full flex flex-col justify-center items-center text-white bg-black/70 py-8 px-24 rounded-2xl shadow-2xl shadow-white/50'>
			<Modal
				open={state.error}
				message={state.errorMessage}
				onClick={HandleModalClose}
				modalStyle={errorModalStyle}
				icon={closeButtonIcon}
				modalButtonStyle={errorModalCloseButtonStyle}
			/>
			<h1 className='text-white text-3xl text-left py-4 mt-12'> Have you setup and advanced profile yet?</h1>
			<select onChange={HandleProfileSearch} className='w-1/3 rounded-2xl text-2xl text-center my-2 shadow-lg shadow-zinc-500 text-black'>
				<option>Select</option>
				<option>Yes</option>
				<option>No</option>
				<option>I am not sure ?</option>
			</select>{" "}
			<SearchingIcon open={state.loading} />
		</div>
	);
};

export default ProfileSearch;
