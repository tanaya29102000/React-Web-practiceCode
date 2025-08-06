import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // Evaluate the expression
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>React Calculator</h2>
      <Display value={input} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
