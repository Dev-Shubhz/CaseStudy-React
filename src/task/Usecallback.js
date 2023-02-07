import { Button } from '@mui/material'
import React, { useCallback, useState } from 'react'
import ToDolist from './ToDolist'

function Usecallback() {
    const [todo, setTodo] = useState([])
    const [count, setCount] = useState(0)
    const HandleIncrement=()=>{
        setCount(prevstate=>prevstate+1)
    }

    const handleAddNewToDo=useCallback(()=>{
        console.log("adding some todo");
    },[todo])
  return (
    <>
    <div className='container mt-5'>
        <div className=''>
            <h1>Hi We are using callback hook</h1>

            <ToDolist todo={todo} addNewTodo={handleAddNewToDo}/>
            <h5>Count value is {count}</h5>

            <Button onClick={HandleIncrement}>INCREMENT</Button>
        </div>
    </div>
    </>
  )
}

export default Usecallback