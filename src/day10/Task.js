import React, { useState } from 'react'
import "./Task2.css"
function Task() {
    const[color,setcolor]=useState({color1:"red",color2:"green"});
  return (
    <div>
    <div id="main">
      <div id='div1' style={{backgroundColor: color.color1}}></div>
      <div id='div2' style={{backgroundColor: color.color2}}></div>
      <button id='btn1' onClick={()=>{
        setcolor({color1:"green",color2:"red"});
    }}>Change</button>
    <button id='btn2' onClick={()=>{
        setcolor({color1:"red",color2:"green"});
    }}>Reset</button>
    </div> 
    </div>
  )
}

export default Task
