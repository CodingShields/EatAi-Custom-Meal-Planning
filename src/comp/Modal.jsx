import { useState, useEffect } from "react";

const Modal = ({ open, message, onClick, modalStyle, icon, modalButtonStyle }) => {
	return (
		<div className={open ? "flex w-full h-full fixed bg-black/80 top-0 left-0 animate-fadeIn my-auto z-30" : "animate-fadeOut "}>
			<div className={modalStyle}>
				<h1>{message}</h1>{" "}
				<button src={icon ? icon : null} alt='modalIcon' onClick={onClick} className={modalButtonStyle}>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} className={modalButtonStyle}>
						<path strokeLinecap='round' strokeLinejoin='round' d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Modal;
