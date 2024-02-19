import React, { useState } from "react";

function ToDoItems(props) {
    return <div onClick={() => {
        props.onChecked(props.id);
    }}  >
        <li >{props.item}</li>
        </div>
}

export default ToDoItems;