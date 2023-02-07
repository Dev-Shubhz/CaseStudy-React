import React, { useState } from 'react'

function Count() {
    let [first, setfirst] = useState(0);
    console.log(first);
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>{
        setfirst(++first);

      }}>Increment</button>

      <button onClick={()=>{
        first > 0 ? setfirst(--first): setfirst(0);

      }}>Decrement</button>


    </div>
  )
}

export default Count