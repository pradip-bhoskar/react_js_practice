import React, {Component} from "react";

class EventHandling extends Component{

    constructor(){
        super();
        this.state ={
            method: "__method"
        }
        this.constructorMethod = this.constructorMethod.bind(this);
    }
    
    arrowFunction = () =>{
        console.log(this.state.method);
        this.setState({method :"Arrow function" },()=>
        console.log(this.state.method)
        ) 
    } 
    bindMethod() {
        console.log(this.state.method);
        this.setState({method :"Bind Method" },()=>
        console.log(this.state.method)
        ) 
    }
    inlineMethod() {
        console.log(this.state.method);
        this.setState({method :"inline arrow method" },()=>
        console.log(this.state.method)
        ) 
    }
    constructorMethod() {
        console.log(this.state.method);
        this.setState({method :"constructor method" },()=>
        console.log(this.state.method)
        ) 
    }

    render(){
        return(
            <div>
                 <h1> EventHandling</h1>
                <p>Event handling by {this.state.method}</p>
                <button type="button" onClick={this.arrowFunction}>Arrow function</button><span>  </span>
                <button type="button" onClick={this.bindMethod.bind(this)}>Bind method</button><span>  </span>
                <button type="button" onClick={()=>this.inlineMethod()}>Inline arrow function</button><span>  </span>
                <button type="button" onClick={this.constructorMethod}>Constructor method</button>
            </div>
        )
    }
}
export default EventHandling;