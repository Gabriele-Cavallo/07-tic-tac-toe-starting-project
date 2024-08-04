import { useState } from "react";
export default function Player({ initialName , symbol }){
    const [playerName, setPlayerName]= useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);
    let btnText = !isEditing ? 'Edit' : 'Save'
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return(
        <>
            <li>
                <span className="player">
                    {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange} />}
                    <span className="player-symbol">{symbol}</span>  
                </span>
                <button onClick={handleEditClick}>{btnText}</button>
            </li>
        </>
    )
}