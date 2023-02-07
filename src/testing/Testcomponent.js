import React from 'react'

function testcomponent({testcomponent}) {
const {id,title,completed}=testcomponent;
const h1=<h1>{title}</h1>
const text=completed?<strike>{h1}</strike>:h1;
     
  return (
    <div data-testid={`e-${id}`}>
     {text}
    </div>
  )
}

export default testcomponent