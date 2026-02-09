import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForms() {
 

  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();


    

  const add = (e) => {
    e.preventDefault(); //stop reload page
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form
      onSubmit={add}
      className="max-w-xl mx-auto flex gap-3 bg-white p-3 rounded-2xl shadow"
    >
      <input
        type="text"
        placeholder="Write your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-200
    focus:outline-none focus:ring-2 focus:ring-black/20
    transition"
      />

      <button
        className="px-6 py-2 rounded-xl bg-black text-white font-medium
    hover:bg-gray-800 active:scale-95 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForms;
