//HIDE , SHOW AND TOGGLE IN REACT COMPONENTS....

import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [status, setSatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h1>Hello World! </h1> : null}
      <button onClick={() => setSatus(!status)}>Hide</button>
      <button onClick={() => setSatus(!status)}>Show</button>
      <button onClick={() => setSatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
