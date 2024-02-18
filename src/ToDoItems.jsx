import React, { useState } from "react";

function ToDoItems(props) {
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick() {
        setIsClicked(prevValue => {
            return !prevValue
        })
    }

    const style = {
        textDecoration : isClicked? "line-through" : "none",
    }
    return <li style={style} onClick={handleOnClick}>{props.item}</li>
}

export default ToDoItems;