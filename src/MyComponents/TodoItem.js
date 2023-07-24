import React from 'react'

export const TodoItem = (props) => {
  return (
    <>
      <div className="card w-50 mb-3 todo-item">
        <div className="card-body text-center">
          <h5 className="card-title">{props.todo.title}</h5>
          <p className="card-text">{props.todo.desc}</p>
          <button className="btn btn-sm btn-success me-2">Edit Task</button>
          <button className="btn btn-sm btn-danger ms-2" onClick={props.onDelete}>Delete Task</button>
        </div>
      </div>
    </>
  )
}
