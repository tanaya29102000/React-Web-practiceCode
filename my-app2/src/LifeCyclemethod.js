import React, { Component } from 'react'

export default class extends Component {
  constructor(){
    super();{
      this.state={
        currentValue:0
      }
    }
  }
  static getDerivedStateFromProps(props,state)
  {
    console.warn("hook",props,state)
return {
  currentValue:props.data
  
}
  }
  render() {
    console.warn("render")
    return (
      <div>
        <h1>Helloo</h1>
      </div>
    )
  }
}
