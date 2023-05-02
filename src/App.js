import { useState } from "react";
import React from "react";
function App() {
  let [text,setText] = useState("Click 😃")
  let [bg,setBg] = useState('#ffa4ff');
  const change = () => {
    setText("Ahh!! 🥴");
    setBg("red");
  }
  const dbchange = () => {
    setText("Ess!! 😉");
    setBg("#ffa4ff");
  }
  // let bg = '#ffa4ff';
  return (
    <div className="box" style={{background:bg}}>
      <div className="increment">
        <button onClick={change} onDoubleClick={dbchange}>{text}</button>
      </div>
    </div>
  );
}

export default App;
