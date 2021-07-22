import React, { useState, useEffect } from "react";
import "./App.css";

const Todo = ({ todo, todos, setTodos, index }) => {
  return (
    <div className="flex justify-left inline-block	">
      <h2 className="font-bold m-5">{todo}</h2>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded"
        onClick={() => {
          console.log("Delete = ", todo);
          const newTodos = todos.filter((el, i) => i !== index);
          setTodos(newTodos);
        }}
      >
        Delete
      </button>
    </div>
  );
};

function App(props) {
  const [value, setValue] = useState([]);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos([]);
  }, []);
  return (
    <div className="App">
      <div className="flex justify-center mt-4 mb-4 mr-4 ml-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="flex-no-shrink p-2 border-2 rounded"
          onClick={() => {
            setTodos([...todos, value]);
            setValue("");
          }}
        >
          Add
        </button>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
