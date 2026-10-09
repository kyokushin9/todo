function TodoFooter({remain, onClear}) {
   
    return (
        <div className="todo-footer">
            <div>Осталось: {remain}</div>
            <button type="button" onClick={onClear}>Очистить выполненные</button>
        </div>
    );

}

export default TodoFooter;