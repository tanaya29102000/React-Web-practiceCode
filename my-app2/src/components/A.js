import React from "react";
import B from "./B";
import { createContext } from "react";
const FirstName = createContext(); //here we create one context FirstName ka
const LastName = createContext();

function A(props) {
  return (
    <div>
      <FirstName.Provider value="Ram">
        <LastName.Provider value="Kanekar">
        <B />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default A;
export { FirstName, LastName };

//useContext se provider ko call krte hai..
//provider work as parent.

//with the help of provider assign value.and export it
