import React, { useState } from 'react';


const Apps = () => {
  const [activeTab, setActiveTab] = useState('todo');
  const [todos, setTodos] = useState([
    { id: 1, text: 'hey whtsapp', completed: false },
    { id: 2, text: 'how are yu doing', completed: true },
    { id: 3, text: 'This is cool right ?', completed: false },
  ]);
  const [inputText, setInputText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputText.trim(), completed: false },
    ]);
    setInputText('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#ecebfa] flex flex-col font-sans">
      {/* Header Navigation */}
      <header className="bg-white py-4 flex justify-center items-center gap-4 shadow-sm">
        <button
          onClick={() => setActiveTab('todo')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'todo'
              ? 'bg-[#f3e8ff] text-[#9333ea] font-semibold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Todo App
        </button>
        <button
          onClick={() => setActiveTab('timer')}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'timer'
              ? 'bg-[#f3e8ff] text-[#9333ea] font-semibold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Study Timer
        </button>
      </header>

      {/* Main Content Card Container */}
      <main className="flex-1 flex justify-center items-center p-6">
        {activeTab === 'todo' ? (
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
            <h1 className="text-3xl font-extrabold text-center text-[#1e293b] mb-6">
              My Todo List
            </h1>

            {/* Input Form */}
            <form onSubmit={handleAddTodo} className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Add a new todo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-white text-slate-800 placeholder-slate-400 border border-slate-200 rounded-lg outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 font-normal"
              />
              <button
                type="submit"
                className="bg-[#9333ea] hover:bg-[#7e22ce] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                Add
              </button>
            </form>

            {/* Todo List */}
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 bg-[#f8fafc] px-4 py-3.5 rounded-xl"
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer rounded"
                  />
                  <span
                    className={`flex-1 text-[15px] ${
                      todo.completed
                        ? 'line-through text-slate-400'
                        : 'text-slate-800 font-medium'
                    }`}
                  >
                    {todo.text}
                  </span>
                  {todo.completed && (
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-600 text-sm font-semibold hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl text-center">
            <h2 className="text-xl font-medium text-slate-600">
              Study Timer View
            </h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default Apps;