import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let foodItems = [];//true return(if empty)

  // let foodItems = ["Dal", "rice", "roti", "milk"];//false(if items i have like dal)

  // let emptyMessage = foodItems.length === 0 ? <h1>I am still hungry</h1> : null

  return (
 <>
  <h1>Healthy food</h1>
  {/* {foodItems.length === 0 && <h1>helllo</h1>} */}
  <FoodItems items={FoodItems}></FoodItems>
  <ErrorMessage items={FoodItems}></ErrorMessage>
 </>
  );
}

export default App;
