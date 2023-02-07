import React, { Component } from 'react'
import "./Task2.css";

export default class Classtask2 extends Component {
    constructor(props){
        super(props);
        this.state={color1:"red",color2:"green"};
    }
  render() {
    return (
      <div>
      <div id="main">
      <div id='div1' style={{backgroundColor: this.state.color1}}></div>
      <div id='div2' style={{backgroundColor: this.state.color2}}></div>
    </div>
    <button id='btn1' onClick={()=>{
        this.setState({color1:"green",color2:"red"});
    }}>Change</button>
    
    <button onClick={()=>{
        this.setState({color1:"red",color2:"green"});
    }}>Reset</button>
      </div>
    )
  }
}
