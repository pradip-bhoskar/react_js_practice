//  Child2.js :props using class component

import React, { Component } from "react";
class Child2 extends Component {
    constructor(props){
        super(props);
        this.props= props;
    }
    render() {
        return (

            <div>
                <h4> Age : {this.props.age}  --   using props in class component  </h4>
            </div>
        )
    }
}
export default Child2;