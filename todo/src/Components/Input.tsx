"use client";

import { addTodo, removeTodo } from "@/Features/Todo/todoSlice";
import { RootState } from "@/Providers/redux/store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Input() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state:RootState)=>state.todos)
  console.log(todos)
  const addTodoHandler = ()=>{
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <div >
      <div className="flex items-center gap-5" >

      <input
        className="px-4 py-2 rounded-md border border-black/60"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button
        className="text-white px-4 py-2 rounded-md bg-indigo-700"
        onClick={addTodoHandler}
      >
        Add
      </button>
      </div>
      <div>
        {todos.map((item,index)=>{
          return(
            <div key={index} className="flex items-center gap-10 my-5">
              <h1 className="text-2xl font-bold">
                <span>{index + 1}.</span>{' '}
              {item.text}
              </h1>
              <button className="text-red-600 border-2 border-red-600  rounded-md hover:bg-red-600 hover:text-white px-4 py-1.5" onClick={()=>dispatch(removeTodo(item.id))} >Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
