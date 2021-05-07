import * as React from 'react';
import todos from '../../mock';
import './style.css';

function TodoList(props) {
  const renderTodo = function (todo) {
    return <div>{todo.title}</div>;
  }

  return (
    <div className="todoList">
      {props.title}
      {
        todos.map(renderTodo)
      }
    </div>
  );
}

export default TodoList;
