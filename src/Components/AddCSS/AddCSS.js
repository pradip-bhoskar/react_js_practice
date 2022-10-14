import React, { Component } from 'react'
import './AddCSS.css'
import myStyle from './Example.module.css'

export class Styling extends Component {
  render() {
    const inner_div ={
      backgroundColor : "yellow",
      width: "200px",
      height: "200px",
      boxShadow: "0px  0px 5px white" ,
      color:"red"
    }

    return (
      <div>
        <h2>Adding css in react</h2>

        <div className='outer_div'>
            <p>Using extenal css</p>
            <div style={inner_div}>
            <p>Using internal css</p>
              <p style={{color: "black"}}> black color using Inline CSS</p>
            </div>
        </div>
        <div className={myStyle.divStyle}>
          style using module
        </div>
      </div>
    )
  }
}

export default Styling;