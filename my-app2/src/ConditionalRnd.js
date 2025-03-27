//conditional rendering , if condition

//make component
//use state
//not recommended way for condition
//correct way condition


import React from 'react'
import { useState } from 'react'

function ConditionalRnd() {
    const [loggedIn, setLoggedIn]= useState(false)

    if(loggedIn){
        return(
            <div>
               {loggedIn?<h1>Welcome Tanaya</h1>:<h1>Welcome User 2 </h1>}
            </div>
        )
    }
  return (
    <div>
      <h1>Condotional Rendering...</h1>
      <User data={getData}/>
      <User data={getData}/>
      <User data={getData}/>
      <User data={getData}/>
<div style={float}></div></div>


  )
}

export default ConditionalRnd
