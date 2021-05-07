import * as React from 'react';
import TodoList from './TodoList';

import './style.css';

function App() {
  return (
    <div className="App">
      <TodoList title="Список дел" />
    </div>
  );
}

export default App;
