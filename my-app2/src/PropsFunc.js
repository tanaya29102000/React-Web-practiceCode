import React from 'react'

function PropsFunc(props) {
    console.warn(props)
  return (
    <div>
      <h1>Student Props component {props.name}</h1>
      <h1> {props.email}</h1>
      
    </div>
  )
}

export default PropsFunc
