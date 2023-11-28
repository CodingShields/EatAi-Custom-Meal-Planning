import { useState, useEffect } from "react";
import { useRenderStepStore } from "../../../stateStore/RenderStepStore";
import { useEasyOrderStore } from "../../../stateStore/easyOrderStore";
import windowCloseBtn from "../../../assets/images/windowCloseBtn.svg";
import "../../../css/easyOrder.css";
import "../../../css/errorModal.css";

export const EasyOrderStartConfirmButton = () => {
	const event = useEasyOrderStore((state) => state.event);
	const culture = useEasyOrderStore((state) => state.culture);
	const headCount = useEasyOrderStore((state) => state.headCount);
	const courses = useEasyOrderStore((state) => state.courses);
	const dietary = useEasyOrderStore((state) => state.dietary);
	const flavor = useEasyOrderStore((state) => state.flavor);
	const balance = useEasyOrderStore((state) => state.balance);
	const measure = useEasyOrderStore((state) => state.measure);
	const { increaseStep } = useRenderStepStore();
	const step = useRenderStepStore((state) => state.step);
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		selectedOption: false,
		disableConfirm: false,
	});

	useEffect(() => {
		if (event !== "" || event !== undefined) {
			setState({ selectedOption: true });
		}
		if (courses !== "" || courses !== undefined) {
			setState({ selectedOption: true });
		}
		if (culture !== "" || culture !== undefined) {
			setState({ selectedOption: true });
		}
		if (dietary !== "" || dietary !== undefined) {
			setState({ selectedOption: true });
		}
		if (headCount !== "" || headCount !== undefined) {
			setState({ selectedOption: true });
		}
		if (flavor !== "" || flavor !== undefined) {
			setState({ selectedOption: true });
		}
		if (balance !== "" || balance !== undefined) {
			setState({ selectedOption: true });
		}
		if (measure !== "" || measure !== undefined) {
			setState({ selectedOption: true });
		}
		if (step === 9) {
			setState({ disableConfirm: true });
		}
	}, [event, culture, headCount, courses, dietary, flavor, balance, measure, step]);

	console.log(state.selectedOption, "selectedOption");
	console.log(culture, "culture");
	const handleClick = () => {
		if (step === 0) {
			return increaseStep();
		} else if (state.selectedOption) {
			increaseStep();
			setState({ error: false, errorMessage: "", selectedOption: false });
		} else {
			if (event === "" || (event === undefined && step === 1)) {
				setState({ error: true, errorMessage: "Please select an event" });
			} else if ((culture === "" && step === 2) || (culture === undefined && step === 2)) {
				setState({ error: true, errorMessage: "Please select a cultural option" });
			} else if (headCount === 0 ||headCount === undefined ) {
				setState({ error: true, errorMessage: "Please select a Head Count" });
			} else if ((courses === "" && step === 4) || (courses === undefined && step === 4)) {
				setState({ error: true, errorMessage: "Please select 1 or more Courses" });
			} else if ((dietary === "" && step === 5) || (dietary === undefined && step === 5)) {
				setState({ error: true, errorMessage: "Please select a Dietary Preference" });
			} else if ((flavor === "" && step === 6) || (flavor === undefined && step === 6)) {
				setState({ error: true, errorMessage: "Please select a Flavor" });
			} else if ((balance === "" && step === 7) || (balance === undefined && step === 7)) {
				setState({ error: true, errorMessage: "Please select how to Balance the Meal" });
			} else if ((measure === "" && step === 8) || (measure === undefined && step === 8)) {
				setState({ error: true, errorMessage: "Please select a measure" });
			}
		}
	};

	return (
		<>
			<button
				disabled={state.disableConfirm}
				className='easy-order-start-confirm-btn' onClick={handleClick}>
				{step === 0 ? "Start" : "Confirm"}
			</button>
			{state.error ? (
				<div className='error-container'>
					<div className='error-content'>
						<p className='error-message'>{state.errorMessage}</p>
						<img src={windowCloseBtn} className='error-btn' onClick={() => setState({ error: false })} />
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};
export default EasyOrderStartConfirmButton;
