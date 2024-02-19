import React from "react";

function InputArea(props) {
    return <div className="form">
    <input onChange={props.onChanged} type="text" value={props.value} />
    <button onClick={props.itemAdd}>
      <span>Add</span>
    </button>
  </div>
}

export default InputArea;