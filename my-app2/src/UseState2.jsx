import React, { useState } from "react";

// function countInit() {
//   console.log("constructor");
//   return 0;
// } //here our constructor call multiple times 1,2,3,4,5 this way in console

// const [count, setCount] = useState(0);//we use here...arrow fn inside call constructor
//
function Test() {
//   const [count, setCount] = useState(countInit());//here we use console
const [state, setState] = useState({count:0, name: 'Increment'})
const count = state.count
const name = state.name
//   const [name, serName] = useState("Increment");//here we are not using console
  //count: current state or variable
  //setCount: updated state or function
  //useState(0): initial state any u can put array, object,boolean etc.

  function increment() {
    setState(prevState=>{
        return{...prevState, name:'Increment',count:prevState.count+1}
    })
    // setCount(prevCount => prevCount + 1)//both used
    // setCount((prevCount) => prevCount + 1); //prevCount used for to increment 2+ like 2, 4, 6, 8 this way
  }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

  return (
    <div>
      {name}
      <br />
      <button onClick={increment}>+</button>
      {count}
      {/* <button onClick={decrement}>-</button> */}
    </div>
  );
}

export default Test;

//LIMITATIONS OF USESTATE HOOK
//1. WE ARE NOT USING CONDITINAL STATEMETS LIKE IF, LOOP WITH USESTATE HOOK...