import React from 'react';
import Todo from './Todo';

function TodoContainer({ todos, toggleComplete, deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoContainer;