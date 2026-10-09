

function TodoFilters({filter, onFilterChange}) {
    return (
        <div className="filters">
          <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => onFilterChange('all')} >Все</button>
          <button type="button" className={filter === 'active' ? 'active' : ''} onClick={() => onFilterChange('active')}>Активные</button>
          <button type="button" className={filter === 'completed' ? 'active' : ''} onClick={() => onFilterChange('completed')}>Выполненные</button>
        </div>
    );
}

export default TodoFilters;