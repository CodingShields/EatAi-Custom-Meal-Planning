


const NavBarDropDown = ({ children, open }) => {
    return (
        <div className={open ? "absolute transition-all translate-y-14 translate-x-24 duration-500 ease-in-out " : "hidden"}>{children}</div>
    )
    
}

export default NavBarDropDown