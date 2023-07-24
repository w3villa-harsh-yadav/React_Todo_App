import React from 'react'

export const AddTodo = (props) => {
  return (
    <>
        <div className="container w-50 py-3">
            <h3 className="text-center">Add Todos</h3>
            <form onSubmit={props.onAdd}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Task</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="taskname" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                    name="description"/>
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    </>
  )
}
