import React, { useEffect } from "react";
import { useState } from "react";

export default function Todo() {
    const [Todo , setTodo] = useState([]);
    const [TodoMsg , setTodoMsg] = useState("");
    const [check,setCheck] = useState(false);

    const handleAddTodo = (e) => {
        e.preventDefault();
        setTodo(prevtodo => [TodoMsg, ...prevtodo])
        console.log("TodoMsg" , TodoMsg)
        setTodoMsg("")
        console.log("todo" , Todo)
        console.log(check)
    }
// useEffect (()=>{
//   const todos = JSON.parse(localStorage.getItem("todos"));

//   if(todos && todos.length > 0){
//     setTodo(todos);
//   }

// },[]);

// useEffect (()=>{
// localStorage.setItem("todos" , JSON.stringify("todos"))
// },[Todo])

  return (
    <div className="flex flex-col m-4 text-center mt-50">
      <h1 className="text-5xl font-extrabold mb-10 ">Todo</h1>
      <form onSubmit={handleAddTodo} className="Input " >
        <input type="text" value={TodoMsg} onChange={(e)=>{setTodoMsg(e.target.value)}} className="border border-cyan-500 rounded-lg p-2 block"  placeholder="Add Todo..." />
        <button className="p-1 hover:cursor-pointer border border-zinc-600 max-w-30 ml-150 my-2 rounded-lg " type="submit"  >Add Todo</button>
      </form>
      <div className="Todo">
        {Todo.map((t,i)=>(
          <div key={i}>
            <input type="checkbox" checked ={ check} onChange={()=>{setCheck(prev => !prev)}} className="underline" /> {check ? <span className="line-through">{t}</span> :<span className="">{t}</span>}
          </div>)
        )}
      </div>
    </div>
  );
}
