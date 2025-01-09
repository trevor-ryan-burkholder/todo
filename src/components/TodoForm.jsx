import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('1');
  const [completed, setCompleted] = useState(false);

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };

  useEffect(() => {
    if (state.editingTodo) {
      setTitle(state.editingTodo.title || '');
      setDesc(state.editingTodo.desc || '');
      setPriority(state.editingTodo.priority || '1');
      setCompleted(state.editingTodo.completed || false);
    } else {
      clearForm();
    }
  }, [state.editingTodo]);

  const clearForm = () => {
    setTitle('');
    setDesc('');
    setPriority('1');
    setCompleted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoData = {
      id: state.editingTodo
        ? state.editingTodo.id
        : new Date().toISOString(),
      title,
      desc,
      priority,
      completed: state.editingTodo
        ? state.editingTodo.completed
        : completed,
    };

    dispatch({
      type: state.editingTodo ? 'UPDATE_TODO' : 'CREATE_TODO',
      payload: todoData,
    });

    clearForm();
  };

  const handleCancel = () => {
    dispatch({ type: 'UNSET_EDITING_TODO' });
    clearForm();
  };

  return (
    <>
      {state.editingTodo ? <h2>Editing Todo</h2> : <h2>New Todo</h2>}

      <hr />
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='form-control'
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Description:
          </label>
          <textarea
            type='text'
            id='desc'
            name='desc'
            className='form-control'
            value={desc || ''}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='priority' className='form-label'>
            Priority:
          </label>
          {Object.entries(priorityLabels).map(([value, label]) => {
            return (
              <span key={value} className='mx-2'>
                <input
                  type='radio'
                  className='btn-check '
                  name='priority'
                  id={`priority-${label.toLowerCase()}`}
                  autoComplete='off'
                  value={value}
                  checked={priority === value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label
                  className='btn'
                  htmlFor={`priority-${label.toLowerCase()}`}
                >
                  {label}
                </label>
              </span>
            );
          })}
        </div>

        <hr />

        <div className='form-controls float-end'>
          <button
            type='button'
            className='btn btn-secondary mx-2'
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
