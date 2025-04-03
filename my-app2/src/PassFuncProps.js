import React from 'react'

function PassFuncProps() {
  return (
    <div>
      <h1>User Component</h1>
      <button onClick={props.data}>Call data Function</button>
    </div>
  )
}

export default PassFuncProps
