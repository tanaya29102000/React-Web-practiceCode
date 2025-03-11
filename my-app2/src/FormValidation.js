//MAKE COMPONENT
//MAKE HTML FORM
//DEFINE STATES
//APPLY VALIDATION


import { useState } from "react";
import React from "react";

function FormValidation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const loginHandle = (e) => {
    e.preventDefault(); // Prevent form reload

    if (userErr || passErr || user.length < 3 || password.length < 3) {
      alert("Please enter valid credentials.");
    } else {
      alert("Login successful!");
    }
  };

  const userHandler = (e) => {
    const value = e.target.value;
    setUser(value);
    setUserErr(value.length < 3);
  };

  const passwordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPassErr(value.length < 3);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <div>
          <input
            type="text"
            placeholder="Enter User ID"
            onChange={userHandler}
            style={{ padding: "8px", marginBottom: "5px" }}
          />
          {userErr && <span style={{ color: "red" }}> User ID is too short</span>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordHandler}
            style={{ padding: "8px", marginBottom: "5px" }}
          />
          {passErr && <span style={{ color: "red" }}> Password is too short</span>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default FormValidation;

