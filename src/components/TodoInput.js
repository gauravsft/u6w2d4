import React from "react";


export default function TodoInput ({handleAddTask}) {
    const [enterInput, setEnterInput] = React.useState("");
    return(
        <div>
            <input type="text" value={enterInput} onChange={(event)=>{setEnterInput(event.target.value)}}/>
            <button onClick={() => {handleAddTask(enterInput); setEnterInput("")}}>ADD TODO</button>
        </div>
    )
}