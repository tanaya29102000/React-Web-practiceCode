import React from 'react'

function LiftingStateUp(props) {
const data="Tanaya k"
  return (
    <div>
      <h2>User Component</h2>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default LiftingStateUp
