//PHASE ARE 3 THREE
//LIFE CYCLE METHODS ARE MORE......

// import { Component } from "react"

//When component is loaded
//when component is updated with state and props
//when Component is updated

//LOAD PRODUCT - 1 phase
//UPDATE PRODUCT - 2 phase
//REMOVE PRODUCT - 3 phase

//LIFE CYCLE METHOD PHASE...
//MOUNTING, UPDATING, UNMOUNTING

//output :
// constructor
// render
// componentDidMount


import React from 'react';

class LifeCycleFile extends React.Component {
    componentWillUnmount()
    {
        console.warn("componentWillUnmount")
    }
   // This lifecycle method is called just before the component is removed from the DOM.
   
    render(){
return <h1>Life cycle method</h1>
    }
}

export default LifeCycleFile
