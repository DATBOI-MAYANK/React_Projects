import React, { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";

export default function Todo() {
  const [Todo, setTodo] = useState([]);
  const [TodoMsg, setTodoMsg] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!TodoMsg.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: TodoMsg,
      checked: false,
    };
    setTodo((prevtodo) => [newTodo, ...prevtodo]);
    console.log("TodoMsg", TodoMsg);
    setTodoMsg("");
    console.log("todo", Todo);
    
  };

  function toggleTodo(id) {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function deleteTodo(id){
    setTodo((prevtodo) => prevtodo.filter((todo) => todo.id !== id ));
  };

  return (
    <div className="flex flex-col m-4 text-center mt-50">
      <h1 className="text-5xl font-extrabold mb-10 ">Todo</h1>
      <form onSubmit={handleAddTodo} className="Input ">
        <input
          type="text"
          value={TodoMsg}
          onChange={(e) => {
            setTodoMsg(e.target.value);
          }}
          className="border border-cyan-500 rounded-lg p-2 "
          placeholder="Add Todo..."
        />
        <button
          className="p-1 hover:cursor-pointer border border-zinc-600 max-w-30 ml-5 my-2 rounded-lg "
          type="submit"
        >
          Add Todo
        </button>
      </form>
      <div className="Todo m-5 ">
        {Todo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo= {deleteTodo} />
        ))}
        
      </div>
    </div>
  );
}
