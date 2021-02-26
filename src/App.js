import React, { useState } from "react";
import Catalogue from "./components/Catalogue";

import "./App.css";

const App = () => {
  const [type, setType] = useState("Mountain");

  const typeArr = ["Mountain", "Bird", "Food", "Beaches"];

  //Create buttons for each type in typeArr
  const typeButtons = typeArr.map((value) => (
    <button
      className="button"
      value={value}
      key={value}
      onClick={(e) => handleClick(e)}
    >
      {value}
    </button>
  ));

  //Handle onClick for the button to change the state
  const handleClick = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="main">
      <div className="button-container">{typeButtons}</div>
      <Catalogue type={type} />
    </div>
  );
};

export default App;
