import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItems({ todo }) {
  if (!todo) return null;

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo?.todo || "");

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-2xl shadow-sm border transition
  ${
    todo.completed
      ? "bg-green-50 border-green-200"
      : "bg-white border-gray-200 hover:shadow-md"
  }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer accent-black"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none text-sm
    ${isTodoEditable ? "border-b border-gray-300 pb-1" : ""}
    ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 hover:bg-gray-200 transition disabled:opacity-40"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      {/* Delete Button */}
      <button
        className="px-3 py-1 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItems;
