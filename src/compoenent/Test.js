import React from "react";
class Welcome extends React.Component {
 state = {
name: "Sara",

 };

 handclick=()=>{this.setState({name:"arya"})

 }
 render() {
   return (  
    <> 
   <h1>hello {this.state.name}</h1>;
   <button onClick={this.handclick}>click me</button>
   </>
 )
  } 
}
export default Welcome;

