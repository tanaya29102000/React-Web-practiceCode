//HIDE , SHOW AND TOGGLE IN REACT COMPONENTS....
import "./App.css";
import React from "react";
import Users from "./ClassC"
import StateFunc from "./StateFunc";

//Function inside another Function 
function App() {
  function Apple(){
    return(
      <div>Im good .</div>
    )
  }
  
  const [status, setSatus] = React.useState(true);
  return (
    <div className="App">
    <Users/>
    <Apple/>
    <StateFunc/>
      {status ? <h1>Hello World! </h1> : null}
      <button onClick={() => setSatus(!status)}>Hide</button>
      <button onClick={() => setSatus(!status)}>Show</button>
      <button onClick={() => setSatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
