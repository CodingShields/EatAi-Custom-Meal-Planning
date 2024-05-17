import searchingGlassIcon from "../assets/animated-icons/searchingGlassIcon.svg"


const SearchingIcon = ({open}) => {

    return (
        <img src={searchingGlassIcon} className={open ? "animate-fadeIn" : "animate-fadeOut"} alt="searchingGlassIcon" />
    )   
}

export default SearchingIcon