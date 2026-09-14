import React, { useState } from 'react';
import styles from './App.module.css';

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
    <div className={styles.pageContainer}>
      {/* Header Tabs */}
      <header className={styles.navHeader}>
        <button
          className={`${styles.navButton} ${
            activeTab === 'todo' ? styles.activeNavButton : ''
          }`}
          onClick={() => setActiveTab('todo')}
        >
          Todo App
        </button>
        <button
          className={`${styles.navButton} ${
            activeTab === 'timer' ? styles.activeNavButton : ''
          }`}
          onClick={() => setActiveTab('timer')}
        >
          Study Timer
        </button>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {activeTab === 'todo' ? (
          <div className={styles.card}>
            <h1 className={styles.title}>My Todo List</h1>

            <form onSubmit={handleAddTodo} className={styles.form}>
              <input
                type="text"
                placeholder="Add a new todo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className={styles.input}
              />
              <button type="submit" className={styles.addButton}>
                Add
              </button>
            </form>

            <ul className={styles.todoList}>
              {todos.map((todo) => (
                <li key={todo.id} className={styles.todoItem}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className={styles.checkbox}
                  />
                  <span
                    className={`${styles.todoText} ${
                      todo.completed ? styles.completedText : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  {todo.completed && (
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.card}>
            <h2 className={styles.placeholderTab}>Study Timer View</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default Apps;