import React from 'react'
import { AddTodo } from './AddTodo';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container min-100'>
        <AddTodo onAdd={props.onAdd}></AddTodo>
        <h3 className='text-center'>Todos List</h3>
        <div>
          {
            props.todos.length==0?
            <div className='text-center'>No todos to display</div>
            :props.todos.map(todo => (
              <TodoItem todo={todo} key={todo.sno} onDelete={()=>{props.onDelete(todo)}}/>
            ))
          }
        </div>

    </div>
  )
}
