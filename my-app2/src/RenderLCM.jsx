import React, { Component } from 'react'

export default class RenderLCM extends Component {
  constructor()
  {
    super();
    this.state={
      email:"taniya@gmail.com"
    }
    console.warn(this.props)
  }
  render() {
    console.warn("Render method",this.props.email)//render method is mandetory, this state run 1st time
    return (
      <div>
        <h1>User Component s</h1>
        <button onClick={()=>this.setState({email:"saniya@gmail.com"})}>Update Email Address</button>
      </div>
    )
  }
}
