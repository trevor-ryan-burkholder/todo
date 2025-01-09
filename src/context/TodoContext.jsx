import { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';
import PropTypes from 'prop-types';

const initialState = {
  todos: [],
  editingTodo: null,
  sortPref: 'High to Low',
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoContext, TodoProvider };
