
import { useState } from 'react'
import TodoForm from './components/TodoForm'; 
import TodoFilters from './components/TodoFilters'; 
import TodoList from './components/TodoList'; 
import TodoFooter from './components/TodoFooter'; 
import './App.css'

function App() {

  const [text, setText] = useState('');

  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState('all');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text, 
        done: false          
      };
      setTodos([...todos, newTodo]);
      setText('');
    }
  }


  const handleToggle = (id) => {

    const nextTodos = todos.map(t => {
       console.table(t); 
      if(t.id === id) {
        return { ...t, done: !t.done}
      }
      return t;
    });

    setTodos(nextTodos);
    
  }

  const handleDelete = (id) => {
    const nextTodos = todos.filter(t => t.id !== id);
    setTodos(nextTodos);
  }

  const visibleTodos = todos.filter(t => {
    if (filter === 'all') {
      return true;        // все подходят
    }
    if (filter === 'active') {
      return !t.done;     // оставить НЕсделанные
    }
    return t.done;        // остался 'completed' → оставить сделанные
  });


  const remaining = todos.filter(t => {
    if (t.done === false) {
      return true;        // все подходят
    }        // остался 'completed' → оставить сделанные
  }).length;

  const handleClearCompleted = () => {
    const nextTodos = todos.filter(t => !t.done);
    setTodos(nextTodos);
  }

  return (
    <>
      <div className="todo-app">
        <h1>Список задач</h1>
        
        <TodoForm text={text} onChangeText={handleChange} onAdd={handleAddTodo} />

        <TodoFilters filter={filter} onFilterChange={setFilter} />

        <TodoList todos={visibleTodos} onToggle={handleToggle} onDelete={handleDelete} />

        <TodoFooter remain={remaining} onClear={handleClearCompleted} />
        
      </div>
    </>
  )
}

export default App
