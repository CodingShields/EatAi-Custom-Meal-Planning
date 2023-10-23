import React from "react"
import EventsArray from "../../../assets/Data Arrays/Events-Array"

export default function EasyOrderEvents() {
    const [checkedEvents, setCheckedEvents] = useState("")

 function handleCheckbox(item) {
    if (checkedEvents.includes(item)) {
      // Item is already checked, so remove it
      setCheckedEvents(checkedEvents.filter((checkedEvents) => checkedEvents !== item));
    } else {
      // Item is not checked, so add it
      setCheckedEvents([...checkedEvents, item]);
    }
  }

    useEffect(() => {
    setIsButtonDisabled(checkedEvents.length === 0);
  }, [checkedEvents])
    
    return (
        <>
            <h2 className="easy-order-menu-text"> Please Pick As Many Courses As You Want</h2>
                    <ul className="courses-list-el">
                        {EventsArray.map((item) => (
                            <li key={item.id}>
                                <input
                                    className="easy-order-items-list"
                                    type="checkbox"
                                    value={item.name}
                                    checked={checkedEvents.includes(item.name)}
                                    onChange={() => handleCheckbox(item.name)}
                                />
                                {item.name}
                            </li>
                        ))}
                </ul>
        </>
        
    )
}
