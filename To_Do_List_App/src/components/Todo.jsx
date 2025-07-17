import React from "react";
import { useState } from "react";

export default function Todo() {
    const [Todo , setTodo] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log("todo" , Todo)
        setTodo(oldTodo => [...oldTodo, e.target.value])
    }

  return (
    <div className="flex flex-col m-4 text-center mt-50">
      <h1 className="text-5xl font-extrabold mb-10 ">Todo</h1>
      <div className="Input " >
        <input type="text"  className="border border-cyan-500 rounded-lg p-2 block"  placeholder="Add Todo..." />
      </div>
        <button className="p-1 hover:cursor-pointer border border-zinc-600 max-w-30 ml-150 my-2 rounded-lg " type="submit" onClick={handleAddTodo()} >Add Todo</button>
      <div className="Todo"></div>
    </div>
  );
}
