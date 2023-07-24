import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = async(todo)=>{
    console.log("This is delete function",todo)
    setTodo(todos.filter((e)=>{
      return e.sno!==todo.sno
    }));
  }
  const onAdd = (todo)=>{
    todo.preventDefault();
    setsno(sno+1)
    let newtodo = {
      sno:sno,
      title:todo.target[0].value,
      desc:todo.target[1].value,
    }
    todo.target[0].value = "";
    todo.target[1].value = "";
    todos.push(newtodo);
    setTodo(todos);
  }
  const [sno,setsno] = useState(0)
  const [todos, setTodo] = useState([
  ]);
  return (
    <>
      <Header title="Todos List"/>
      <Todos todos={todos} onDelete={onDelete} onAdd={onAdd}/>
      <Footer/>
    </>
  );
}

export default App;
