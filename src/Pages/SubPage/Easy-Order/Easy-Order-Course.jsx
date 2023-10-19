import React, { useState, useEffect } from "react";
import CoursesArray from "../../../assets/Data Arrays/Courses-Array";
export default function EasyOrderCourse() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedCourseOptions, setCheckedCourseOptions] = useState([])
    const [renderCourseOptions, setRenderCourseOptions] = useState(false)
    const [courseSelectionConfirmed, setCourseSelectionConfirmed] = useState(false)
    
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
        <div
            className="easy-order-menu-container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "550px",
                justifyContent: "center",
                textAlign: "center",
                height:"500px"
            }}
            >
            <h2
                className="easy-order-menu-text"
                style={{
                    paddingBottom:"20px"
                }}
                    > Please Pick As Many Courses As You Want</h2>
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
            <button
                className="course-make-selection-btn"
                disabled={isButtonDisabled}
                onClick={handleCourseSelectionChild}
                >Make Selection</button>
        </div>
        
    )
}