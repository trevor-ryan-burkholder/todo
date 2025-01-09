import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  const { state, dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todo,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_TODO',
      payload: todo,
    });
  };

  const handleSetCompletion = () => {
    dispatch({
      type: 'SET_TODO_COMPLETION',
      payload: { id: todo.id, completed: !todo.completed },
    });
  };

  const showEditButton = () => {
    if (state.editingTodo && state.editingTodo.id === todo.id) {
      return false;
    }

    return true;
  };

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };

  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{todo.title}</h5>
        <h6 className='card-subtitle mb-2 text-body-secondary'>
          {priorityLabels[todo.priority]}
        </h6>
        <p className='card-text'>{todo.desc}</p>
        <div className='todo-buttons'>
          {showEditButton() && (
            <button
              onClick={() => handleEdit()}
              className='btn btn-primary float-start'
            >
              Edit
            </button>
          )}

          <div className='float-end'>
            <button
              onClick={() => handleDelete()}
              className='btn btn-danger mx-2'
            >
              Delete
            </button>

            <button
              onClick={() => handleSetCompletion()}
              className={`btn ${
                todo.completed ? 'btn-success' : 'btn-secondary'
              }`}
            >
              {todo.completed ? 'Done' : 'In Progress'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
