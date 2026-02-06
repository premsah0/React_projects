import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForms from "./components/TodoForms";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo,
      ),
    );
  };

  useEffect(() => {
    const raw = localStorage.getItem("todos");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTodos(parsed);
      }
    } catch (err) {
      console.warn("Invalid todos in localStorage, clearing.", err);
      localStorage.removeItem("todos");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div>
        <TodoProvider
          value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
          <div>
            <TodoForms />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
