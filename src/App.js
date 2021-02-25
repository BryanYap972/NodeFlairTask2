import React, { useState } from "react";
import Catalogue from "./components/Catalogue";

import "./App.css";

const App = () => {
  const [type, setType] = useState("Mountain");

  const typeArr = ["Mountain", "Bird", "Food", "Beaches"];

  const typeButtons = typeArr.map((value) => (
    <button className="button" value={value} onClick={(e) => handleInput(e)}>
      {value}
    </button>
  ));

  const handleInput = (e) => {
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
