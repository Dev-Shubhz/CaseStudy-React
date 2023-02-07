import React, { memo } from 'react'

function ToDolist({todo,addNewTodo}) {
    console.log("todo list render")
  return (
    <div>ToDolist</div>
  )
}

export default memo(ToDolist)