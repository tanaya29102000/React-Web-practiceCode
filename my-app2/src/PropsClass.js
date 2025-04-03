import React from "react";
//IN CLASS COMPONENT RENDER METTOD NEED

class PropsClass extends React.Component {

  render() {
    console.log(this.props)
    return <div style={{backgroundColor:'skyblue', margin:'20'}}>student{this.props.name} </div>;
  }
}

export default PropsClass;
