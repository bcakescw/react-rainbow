import React, { useState } from "react";

export default function ColorForm(props) {
    const [inputColor, setInputColor] = useState(props.colors);

    const handleAddColor = (e) => {
        e.preventDefault();
        props.addColor(inputColor);
        setInputColor("");
    }
    return (<div>
        <form>
            <input type="text"
                onChange={e => setInputColor} value= {inputColor}></input>
            <button type="submit" onClick={handleAddColor}>Add Color</button>
        </form>
    </div>)
}