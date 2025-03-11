//HANDLE FORM , CHECKBOX, INPUT FIELD , SELECT....

//BASIC FORM
//MAKE HTML FORM
//ADD SOME FIELD
//USE  STATE FOR FIELD DATA
//SUBMIT AND CONTROL FORM

import React from "react";
import { useState } from "react";

function HandleForm() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    console.warn(name.tnc,interest)
    e.preventDefault();
  }

  return (
    <div className="HandleForm">
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br />
        <select onChange={(e) => setName(e.target.value)}>
          <option>Select option...</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br></br>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HandleForm;
