import React, { useMemo, useState } from 'react'
import { Button } from '@mui/material'

function UseMemo() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    let incrementC1=()=>{
        setCounter1(counter1+1);
    };
    let incrementC2=()=>{
        setCounter2(counter2+10);
    };
    let isEven=useMemo(() =>{
        let i=0;
        while (i<50000) i++; 
          return counter1 % 2 == 0 ; 
    },[counter2]); 

  return (
    <div>
      <h1>counter1 value is :{counter1}</h1>
      <h1>counter2 value is :{counter2}</h1>
      <h1>the value is :{isEven? "Even":"Odd"}</h1>
      <Button variant='contained' onClick={()=>{
        incrementC1();
      }}>increment count1</Button>
      <Button variant='contained' sx={{ml:1}} onClick={()=>{
        incrementC2();
      }}>increment count2</Button>
    </div>
  )
}

export default UseMemo;
