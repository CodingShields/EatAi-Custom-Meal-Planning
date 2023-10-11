import React, { useState, useEffect } from "react";
import coursesArray from "../../assets/coursesArray";


export default function EasyOrderCourse ({checkedCourseOptions, setCheckedCourseOptions}) {
    
    function handleCheckboxChange(item) {
        setCheckedCourseOptions([...checkedCourseOptions, item])
    }

    return (
        <div className="easy-order-menu-container">
            <h2 className="easy-order-menu-text"> Please Pick As Many Courses As You Want</h2>
                <ul className="courses-list-el">
                    {coursesArray.map((item) => (
                        <li key={item.id}>
                            <input
                                    className="courses-items"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedCourseOptions.includes(item.name)}
                              onChange={() => handleCheckboxChange(item.name)}
                            />
                            {courses.name}
                        </li>
                    ))}
                </ul>
        </div>
        
    )
}