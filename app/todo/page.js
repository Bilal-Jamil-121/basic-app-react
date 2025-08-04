'use client';
import { useState } from 'react';

function App() {
  const [Todo, setTodo] = useState('');
  const [Todos, setTodos] = useState([]);

  function handlesave() {
    if (!Todo) return;
    if (Todos.includes(Todo)) {
      setTodo('');
      return;
    }
    setTodos([...Todos, Todo]);
    setTodo('');
  }

  function handledelete(value) {
    const updateTodos = Todos.filter((curTodos) => curTodos !== value);
    setTodos(updateTodos);
  }

  function handleedit(value) {
    setTodo(value);
    handledelete(value);
  }

  return (
    <>
      <div className="text-4xl text-center font-bold text-white py-6 bg-gradient-to-r from-gray-700 to-black shadow-md">
        Todo List
      </div>

      <div className="bg-gray-900 min-h-screen p-6">
        <div className="md:max-w-xl mx-auto bg-gray-800 md:p-6 p-2  rounded-xl shadow-lg space-y-4">
          <div className="md:flex md:gap-3">
            <input
              value={Todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter a task"
              className="flex-1 rounded-lg text-white md:text-2xl px-4 py-2 outline-none"
              type="text"
            />
            <button
              onClick={handlesave}
              className="bg-blue-600 cursor-pointer w-full md:w-auto px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-400 transition"
            >
              Save
            </button>
          </div>

          <ul className="space-y-3">
            {Todos.map((curTodos, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 text-white px-4 py-3 rounded-lg shadow"
              >
                <span>{curTodos}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleedit(curTodos)}
                    className="bg-yellow-500 cursor-pointer px-3 py-1 rounded text-white font-semibold hover:bg-yellow-300 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handledelete(curTodos)}
                    className="bg-red-600 cursor-pointer px-3 py-1 rounded text-white font-semibold hover:bg-red-400 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {Todos.length > 0 && (
            <button
              onClick={() => setTodos([])}
              className="w-full cursor-pointer bg-red-700 py-2 rounded-lg text-white font-bold hover:bg-red-600 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
