import React, { useState, useEffect } from "react";
import CoursesArray from "../../../assets/Data Arrays/Courses-Array";
import EasyOrderMakeSelectionButton from "./Easy-Order-Comps/Easy-Order-Make-Selection-btn";

export default function EasyOrderCourse() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedCourseOptions, setCheckedCourseOptions] = useState([])
  
    
    function handleCourseSelectionChild() {
        setCourseSelectionConfirmed()        
    }

    function handleCheckboxChange(item) {
    if (checkedCourseOptions.includes(item)) {
      // Item is already checked, so remove it
      setCheckedCourseOptions(checkedCourseOptions.filter((checkedItem) => checkedItem !== item));
    } else {
      // Item is not checked, so add it
      setCheckedCourseOptions([...checkedCourseOptions, item]);
    }
  }

    useEffect(() => {
    setIsButtonDisabled(checkedCourseOptions.length === 0);
  }, [checkedCourseOptions])
    
    return (
        <>
            <h2 className="easy-order-menu-text"> Please Pick As Many Courses As You Want</h2>
                    <ul className="courses-list-el">
                        {CoursesArray.map((item) => (
                            <li key={item.id}>
                                <input
                                    className="easy-order-items-list"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedCourseOptions.includes(item.name)}
                                    onChange={() => handleCheckboxChange(item.name)}
                                />
                                {item.name}
                            </li>
                        ))}
                </ul>
            {!isButtonDisabled ? <EasyOrderMakeSelectionButton /> : ""}
        </>
        
    )
}