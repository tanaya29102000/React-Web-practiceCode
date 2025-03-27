//12.State with class components

import { application } from "express";
import React, { Component } from "react";

class StaeClass extends Component {

    constructor()
    {
        super();
        this.state={//this is object
            data:1
        }
    }

    apple()
    {
        this.setState({data:this.state.data+1})
    }
  render() {
    return (
      <div className="App">
      <h1>{this.state.data}</h1>
      <button onClick={()=>this.apple()}>Update data</button>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default StaeClass;
