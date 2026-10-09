function TodoList({todos, onToggle, onDelete}) {

    return (
        <ul className="todo-list">
            {todos.map(task => (
            <li key={task.id} className={task.done ? "done" : ""}>
                <label htmlFor={`check_${task.id}`}>
                <input type="checkbox" checked={task.done} id={`check_${task.id}`} onChange={() => onToggle(task.id)} />
                {task.text}
                </label>
                <button type="button" className="delete" onClick={() => onDelete(task.id)}>✕</button>
            </li>
            ))}
        </ul>
    );

}

export default TodoList;