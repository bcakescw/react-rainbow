import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

const default_colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']



function App() {
  const [colors, setColors] = useState(default_colors);

const handleAddColor = (newColor) => {
  setColors([...colors, newColor]);
}

  const colorMap = colors.map(c => <ColorBlock color={c} />)

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={handleAddColor}/>
    </div>
  )
}


export default App;
