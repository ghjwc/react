import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputState] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log('im here', inputValue);
    setTodoList([...todoList, inputValue]);
  }

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={(event) => {
        setInputState(event.target.value);
      }} 
      onKeyUp={(e) => {
        if (e.keyCode == 13) {
          addItem();
        }
      }}/>
      <button onClick={addItem}>add</button>

      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;
