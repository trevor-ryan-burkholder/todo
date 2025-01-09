import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import sortTodos from '../util/sortTodos';
import Todo from './Todo';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  const sortedTodos = sortTodos(state.todos, state.sortPref);

  const handleSetSorting = (val) => {
    dispatch({
      type: 'SET_TODO_SORT_PREF',
      payload: val,
    });
  };

  return (
    <>
      <h2>Todos</h2>
      <hr />
      <div className='d-flex align-items-center mb-3'>
        <div className='me-2'>Sort:</div>
        <div className='flex-grow-1'>
          <select
            className='form-select'
            aria-label='Todo sorting preference'
            onChange={(e) => handleSetSorting(e.target.value)}
            value={state.sortPref}
          >
            <option value='High to Low'>High to Low</option>
            <option value='Low to High'>Low to High</option>
            <option value='Completed to Incomplete'>
              Completed to Incomplete
            </option>
            <option value='Incomplete to Completed'>
              Incomplete to Completed
            </option>
          </select>
        </div>
      </div>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
