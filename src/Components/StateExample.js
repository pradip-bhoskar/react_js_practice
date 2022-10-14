import React, { Component } from "react";

class StateExample extends Component {
    constructor() {
        super();
        this.state = {
            name: "Pradip",
            age: 25
        }
    }

    changeMyState = () => {
        console.log(this.state.name);
        this.setState({ name: "Bhoskar" }, () => {
            console.log(this.state.name);
        })
    }

    render() {
        return (
            <div>
                <h2> State Example:</h2>
                <p> Hey {this.state.name}, your age is {this.state.age}</p>
                <button onClick={this.changeMyState}>Change Name</button>
            </div>
        )
    }
}
export default StateExample;