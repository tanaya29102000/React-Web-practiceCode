import React, { use, useState } from "react";

function FormValid() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false); //by default false
  function loginHandle(e) {
    //write function
    alert("hello");
    e.preventDefault();
  }
}
function userHandler(e) {
  let item = e.target.value;
  if (item.length < 3)
     {
    setUserErr(true)
  }
   else
    {
    setUserErr(false);
  }
setUser(item)
}

function passwordHandler(e) {
  let item = e.target.value;
  if (item.lenght < 3) 
    {
    setPassErr(true)
  } 
  else
   {
    setPassErr(false)
  }
  setPassword(item)
}

return (
  <div>
    <h1>Login</h1>
    <form onSubmit={loginHandle}>
      <input type="text" placeholder="Enter user id" onChange={userHandler} />
      userErr?<span>user not valid</span>:""
      <br></br>
      <input
        type="text"
        placeholder="Enter user Password"
        onChange={password}
      />
      <br></br>
      <button type="submit">Login</button>
    </form>
  </div>
  //we use form becoz button want to independly work ..they after our page reload
);

export default FormValid;
