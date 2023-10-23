import React, { useState} from "react";
import CoursesArray from "../../../assets/dataArrays/Courses-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";

const EasyOrderCourse = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [checkedCourseOptions, setCheckedCourseOptions] = useState("")
    const { setCourses } = useEasyOrderStoreActions()
    const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);



  const handleCheckboxChange = (item)=> {
      setIsButtonDisabled(true)
    if (checkedCourseOptions.includes(item)) {
      // Item is already checked, so remove it
      setCheckedCourseOptions(checkedCourseOptions.filter((checkedItem) => checkedItem !== item));
    } else {
      // Item is not checked, so add it
      setCheckedCourseOptions([...checkedCourseOptions, item]);
    }
  }
  const handleClick = () => {
    setCourses(checkedCourseOptions);
    increaseStep();
    setIsButtonDisabled(false);
  }

    
    return (
        <>
            <h2 className="easy-order-menu-text"> Please Pick As Many Courses As You Want</h2>
                    <ul className="easy-order-list">
                        {CoursesArray.map((item) => (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedCourseOptions.includes(item.name)}
                                    onChange={() => handleCheckboxChange(item.name)}
                                />
                                {item.name}
                            </li>
                        ))}
        </ul>
        {isButtonDisabled ? <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>:""}
        </>
        
    )
}
export default EasyOrderCourse;