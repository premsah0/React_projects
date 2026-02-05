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
    <form onSubmit={add}>
      <input
        type="text"
        placeholder="write TODO...."
        onChange={(e) => e.target.value}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForms;
