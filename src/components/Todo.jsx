import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="task">
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
      <div className="impbuttons">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <button
          className="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;