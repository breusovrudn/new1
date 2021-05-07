import * as React from 'react';

import './style.css';

function TodoList(props) {
  return (
    <div className="todoList">
        {props.title}
    </div>
  );
}

export default TodoList;
