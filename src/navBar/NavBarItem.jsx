const NavBarItem = ({ children, onClick }) => {
	return (
		<div onClick={onClick} className='cursor-pointer tracking-widest hover:scale-125 underlineAnimate px-4 transition-all ease-in-out duration-500'>
			{children}
		</div>
	);
};

export default NavBarItem;
