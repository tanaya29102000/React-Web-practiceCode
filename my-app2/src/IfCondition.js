import React, { useState } from "react";

function IfCondition() {
  const [loggedIn, setLoggedIn] = useState(1);
  //useState false that mean bydefault user loggin nhikrenga..
  // true,false,1,2,3.

  //not recommended way
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Conditional rendering...True</h1>
      ) : loggedIn == 2 ? (
        <h1>Conditional rendering...false</h1>
      ) : (
        <h1>Welcome User3</h1>
      )}
    </div>

    //OUTPUT BECOME= False bcoz useSte(false)

    //Output Become= True useState(True)
  );
}

export default IfCondition;
