import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  //code here
  const [ok, setok] = useState("OFF");
  const [No, setNo] = useState("ON");
  const handleClick = (e) => {
    if (e.target.id === "btn1") {
      setok("NO");
      setNo("OFF");
    } else {
      setok("OFF");
      setNo("ON");
    }
  };

  return (
    <div className="App">
      <button id="btn1" onClick={(e) => handleClick(e)}>
        {ok}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={(e) => handleClick(e)}>
        {No}
      </button>
    </div>
  );
};

export default App;
