function TodoForm({ text, onChangeText, onAdd }) {
  // теперь text — строка, onChangeText — функция, onAdd — функция
  // всё это App передаёт, когда пишет <TodoForm text={text} ... />
    return (
        <form onSubmit={onAdd}>
            <label htmlFor='input'>
                <input type="text" name="task" value={text} id="input" placeholder="Введите текст..." onChange={onChangeText} />
            </label>
            <button type="submit">Добавить</button>
        </form>
    );

}

export default TodoForm;