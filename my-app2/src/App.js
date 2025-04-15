// //HIDE , SHOW AND TOGGLE IN REACT COMPONENTS....
// import "./App.css";
// import React, { useState } from "react";
// // import Users from "./ClassC";
// // import StateFunc from "./StateFunc";
// // import PropsFunc from "./PropsFunc";
// // import Props from "./PropsClass";
// import PropsClass from "./PropsClass";

// //Function inside another Function
// // function App() {
// //   const [name, setName] = useState("Tanaya");
// //   function Apple() {
// //     return <div>Im good .</div>;
// //   }

//   const [status, setSatus] = React.useState(true);

//   class App extends React.Component{
//     constructor(){
//       super(props);
//       this.state={
//         name:null//name,or by default name,
//       }
//     }
//     render(){
//       return

//     }

//   }
//   return (
//     <div className="App">

//       {/* <Users />
//       <Apple />
//       <Props/>
//       <StateFunc /> */}

//       <PropsClass name="tanaya"/>
//       {/* <PropsFunc name={"Tanaya"} />
//       <PropsFunc name={"Sumit"} email="sumit@gmail.com" />
//       <PropsFunc name={"radha"} email="radha@gmail.com" />
//       <PropsFunc name={"rani"} email="rani@gmail.com" />
//       <PropsFunc name={"ram"} email="ram@gmail.com" /> */}
//       {/* <button
//         onClick={() => {
//           setName("Sam");
//         }}
//       >
//         Update Name
//       </button>

//       {status ? <h1>Hello World! </h1> : null}
//       <button onClick={() => setSatus(!status)}>Hide</button>
//       <button onClick={() => setSatus(!status)}>Show</button>
//       <button onClick={() => setSatus(!status)}>Toggle</button> */}
//       <button onClick={()=>this.setSatus({name:"Tanaya"})}>Update data</button>
//     </div>
//   );

// export default App;

//--------------------------------------------------------------------------------------------------------------

// import "./App.css";
// import React, { useState } from "react";
// import PropsClass from "./PropsClass";

// function App() {
//   const [status, setStatus] = useState(true);
//   const [name, setName] = useState("Tanaya");

//   return (
//     <div className="App">
//       <PropsClass name={name} />

//       <button onClick={() => setName("Sam")}>Update Name</button>

//       {status ? <h1>Hello World! </h1> : null}

//       <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}>Show</button>
//       <button onClick={() => setStatus(!status)}>Toggle</button>
//     </div>
//   );
// }

// export default App;

//----------------------------------------------------------------.------------------------

//15. GET INPUT BOX VALUE....................
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const[data,setData]= useState(null)
//   const[print,setPrint]= useState(false)
//     //Destructuring of state

//   function getData(val){
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(true)
//   }
//   return (
//     <div className='App'>
//     <h1>Get input box value</h1>
//     <input type="text" onChange={getData}/>
//     <button onClick={()=>setPrint(true)}>Print Data</button>

//     </div>
//   )
// }

// export default App

//----------------------------------------------------------------------------------------------
//17.HANDLE FORM,CHECKBOX, INPUT FIELD, SELECT

// import React, { useState } from 'react'

// function App() {
// const[name,setName]=useState("")
// const[tnc,setTnc]=useState(false);
// const[interest,setInterest]=useState("");

// function getFormData(e)
//   {
//     console.log(name.tnc,interest)
//     e.preventDefault
//   }
//     return (
//     <div className='App'>
//     <h1>Handle Form in React</h1>
//     <form onSubmit={getFormData}>
//       <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br></br>
//       <select onChange={(e)=>setInterest(e.target.value)}>
//       <optio>Select Option...</optio>
//         <option>Marvel</option>
//         <option>Delhi</option>
//       </select><br></br>
//       <input type='checkbox' onChange={(setTnc(e.target.checked))}></input><span></span><span>Accept Terms and condition</span><br></br>
//     </form>

//     </div>
//   )
// }

// export default App

//----------------------------------------------------------------------------------------------
//18.CONDITIONAL RENDERING , IF CONDITION

// import React from 'react'
// import IfCondition from './IfCondition'

// function App() {
//   return (
//     <div className='App'>
//       <IfCondition/>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------------------------------
//19. Basic form validation

// import React from 'react'
// import FormValid from './FormValid'

// function App() {
//   const data =true;

//   return (
//     <div>
//       <FormValid/>
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------------

//20.Pass Function as props...

// import React from "react";
// import PropsFunc from "./PropsFunc";
// import Members from "./Members";

// function App() {
//   function getData() {
//     alert("Hello FROM APP");
//   }
//   return (
//     <div className="App">
//       <PropsFunc data={getData} />
//       <PropsFunc data={getData} />
//       <PropsFunc data={getData} />

//       <PropsFunc data={getData} />
//       <PropsFunc data={getData} />

//       <div style={{ float: "right" }} />
//       <Members data={getData} />
//     </div>
//   );
// }

// export default App;
//---------------------------------------------------------------------------------
//22. Constructor Life cycle method

// import React from 'react'

// class App extends React.Component{//Component is parent class ke liye super ko  call krte hai..
//   constructor()// 1st first call constructor then call render method
//   {
//     super();
//     this.state={//here we define or create our state...before hHTML
//       data:"Tanya"

//     }
//     console.warn("constructor")
//   }//2nd rensder will call when our class create then it will render...
//   render()
//   {
//     console.warn("render")
//     return (
//       <div>
//         <h1>hi{this.state.data}</h1>
//       </div>
//     )
//   }
// }
  


// export default App

//*******


//*****************LIFE CYCLE METHOD******************************* */

// import React from 'react'
// import LifeCycleFile from "./LifeCycleFile";

// class LifeCycle extends React.Component{
// //Declares a class component called LifeCycle, extending from React.Component

//     constructor(){
//         super();//Required to initialize "this"
//         this.state={//u must call super() as the first line inside the constructor.
//             show:true
//         }
//         console.warn("constructor")
//     }
    
//     componentDidMount(){
//         //This method runs once after the component is mounted (i.e., inserted into the DOM).
//         console.warn("componentDidMount")
//     }

//     render(){
//       <LifeCycleFile/>

//         //The render() method returns JSX which is what gets displayed on the screen.
//         console.warn("render")
//         return(
          
//             <div>LIFE CYCLE METHOD</div>
            
//         )
        
//     }
    
// }

// export default LifeCycle

//******************ComponentDidMount********************* */

//OUTPUT:
//CONSTRUCTOR
//COMPONENTWILLMOUNT
//RENDER
//COMPONENTDIDMOUNT

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={
// data:"false"
//     }
//     console.warn("constructor")
//   }

//   componentDidMount(){
//     console.warn("componentDidMount")
//     this.setState({data:"true"})
//   }
//   render() {
//     console.warn("render")
//     return (
//       <div>
//         ComponentDidMount Life cycle Method
//       </div>
//     )
//   }
// }


//******************COMPONENT WILL UNMOUNT****************** */

// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(){
//     super();
//     {
//       this.state={
//         show:false
//       }
//     }  }
//   render() {
//     return (
//       <div>
//         <h1>componentWillUnmount</h1>
//         <Child/>
//         {this.state.show?<Child/>:null}
//         <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button>
//       </div>
//     )
//   }
// }

// export default App;


// // import React, { Component } from 'react'

// class Child extends Component {
//   componentWillUnmount(){
//     console.warn("component is hidden")
//   }
//   render() {
//     return (
//       <div>Helloooo
//       </div>
//     )
//   }
// }

//************************************ */
// when we use componentdidupdate
// how to use componentdidupdate
// componentdidupdate with state
// componentdidupdate with props
// componentdidupdate with codition and update state

// import React, { Component } from 'react';

// class Child extends Component {
//   componentDidUpdate(prevProps) {
//     console.warn("Child componentDidUpdate called", prevProps.data, this.props.data);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <p>Data from Parent: {this.props.data}</p>
//       </div>
//     );
//   }
// }

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.warn("App componentDidUpdate called", prevState);
//     if (prevState.counter < 3 && this.state.counter <= 3) {
//       this.setState({ counter: this.state.counter + 1 });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>componentDidUpdate</h1>
//         <Child data={this.state.counter} />
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
//           Update Counter {this.state.counter}
//         </button>
//       </div>
//     );
//   }
// }


//********************getDerivedStateFromPROPS********************** */
// USE OF getDerivedSatetFromProps life cycle
// make a child component
// pass props from parent
// play with getDerivedSatetFromProps with example

// import React, { Component } from 'react'
// import getDerivedStateFromProps from './LifeCyclemethod';
// import LifeCyclemethod from './LifeCyclemethod';
// export default class App extends Component {

//     constructor(){
//         super();
//         this.state={
//             data:0
//         }
//     }
//   render() {
//     return (
//       <div>
//         <h1>Get Derived State from Props{this.state.data}</h1>
//         <LifeCyclemethod data={this.state.data}/>
//         <button onClick={()=>{this.setState({data:this.state.data+1})}}></button>
//       </div>
//     )
//   }
// }

//*************shouldComponentUPdate******************* */

//invoke before the render method..
//shouldComponentUPdate is react life cycle methiod

//******************Use LifeCycle Hooks IN FUCTIONAL COMPONENT******************* */



// import React, { Component, useEffect } from 'react';

// // Class Component (Parent)
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       document: 'React App'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Class Component (App)</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase Count
//         </button>
//         <Child count={this.state.count} document={this.state.document} />
//       </div>
//     );
//   }
// }

// // Functional Component (Child)
// function Child(props) {
//   useEffect(() => {
//     console.log('Props:', props);
//     document.title = props.document;
//   }, [props.count]); // runs when props.count changes

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <h3>Count: {props.count}</h3>
//     </div>
//   );
// }


//---------------------------------------------------------------------------------------------

//37.Fragment in ReactJS

// import React, { Fragment } from 'react'
// import {Fragment} from './Fragment'

// function App() {
//   return (
//     <div>
//       <h1>react fragment</h1>
//       <table>
//       <tbody>
//       <tr>
//           <Fragment/>
//         </tr>
//       </tbody>
//       </table>
//     </div>
//   )
// }

// export default App





//----------------------------------------------------------------------------------------

//38. SEND DATA CHILD TO PARENT COMPONENT

// import React from 'react'
// import LiftingStateUp from './LiftingStateUp'

// function App() {

//   function parentAlert(data)
//   {
//     alert(data)
//   }
//   return (
//     <div>
//       <h1>Lifting state up</h1>
//       <LiftingStateUp alert={parentAlert}
//       />
//     </div>
//   )
// }

// export default App

//--------------------------------------------------------------------------------
//39.//Pure component in ReactJS 

// import React,{PureComponent} from 'react'

// class App extends React.Component
//  {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }//for state define we use constructor fn
//   render(){
//     // console.log("check rerendering")
//     return(
//       <div className='App'>
//         <h1>Pure Component in Recat</h1>
//         <button onClick={()=>this.setState({count:this.state.count+ 1})}>Update Count</button>
//       </div>

//     )
//   }
  
// }

// export default App


//-----------------------------------------------------------------------

//40. useMemo Hook

// import React, { useState, useMemo } from "react";

// function App() {
//   const [count, setCount] = useState(0); //by default value 0 set ki..
//   const [item, setItem] = useState(10); //by default value set 10 ki..

//   const multiCountMemo = useMemo(
//     function multiCount() {
//       //basically this used callback function

//       console.log("multicount");
//       return count * 5;
//     },
//     [count]
//   ); //we pass parametr for update when our count will update
//   return (
//     <div className="App">
//       <h1>useMemo Hook in React</h1>
//       <h2>Count:{count}</h2>
//       <h2>Item:{item}</h2>
//       <h2>{multiCountMemo()}</h2>
//       <button onClick={() => setCount(count + 1)}>Update Count</button>//onClick
//       use for update after button Click...
//       <button onClick={() => setItem(item * 10)}>Update Item</button>
//     </div>
//   );
// }

// export default App;

//*******************Mediaquery**************************************************** */

// import React from 'react'
// import MediaQuery from './MediaQuery'

// function App() {
//   return (
//     <div>
//       <MediaQuery/>
//     </div>
//   )
// }

// export default App

//******************FLEXBOX************************************** */
//Flexbox is a CSS layout module that makes it easy to design flexible and responsive layout structures without using floats or positioning.

// import React from 'react'
// import Flexbox from './Flexbox'
// function App() {
//   return (
//     <div>
//       <h1>tanaya</h1>
//       <Flexbox/>
//     </div>
//   )
// }

// export default App


//*************************REACT HOOKS *********************************************************** */
//USESTATE HOOK 
//WE ARE USING HOKS IN REACT FUNCTINAOL COMPONENTS

// import React from 'react'
// import UseState from "./UseState2";

// function App() {
//   return (
//     <div>
//       <UseState/>
//     </div>
//   )
// }

// export default App

//*************************USEEFFECT HOOK**************************************************** */

// import React from 'react'
// import UseEffect2 from './UseEffect2'

// function App() {
//   return (
//     <div>
//       <UseEffect2/>
//     </div>
//   )
// }

// export default App


//*****************************USECONTEXT HOOK***************************************************** */

import React from 'react'
import A from "./components/A";

function App() {
  return (
    <div>
      <A/>
    </div>
  )
}

export default App
