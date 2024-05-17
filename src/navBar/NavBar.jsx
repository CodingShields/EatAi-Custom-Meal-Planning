



const NavBar = ({children}) => {
    

    return (
        <div className="flex flex-row justify-center text-2xl space-x-24 py-6 uppercase text-white bg-black fixed w-full">
        {children}
        </div>
    )
}

export default NavBar