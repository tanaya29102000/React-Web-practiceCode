//10.Click event and function

import React from 'react'

function Event() {
    data="peter";
    alert(data);
    
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={apple}>Click Me</button>
    </div>
  )
}

export default Event
