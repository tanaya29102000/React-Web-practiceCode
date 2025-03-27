//11.State with functional
import React,{useState} from 'react'

function StateFunc() {
const [data, setData]= useState("Tanaya") 

function updateData(){
    setData("sam")
}

console.warn("__________")
  return (
    <div className='App'>
    <h1>{data}</h1>
    
    <button onClick={updateData}>Update  Data</button>
    
    </div>
  )
}

export default StateFunc
