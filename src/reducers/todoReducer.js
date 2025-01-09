const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo),
                editingTodo: null
            }
        case 'DELETE_TODO':
            if (state.editingTodo && state.editingTodo.id === action.payload.id) {
                return {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.payload.id),
                    editingTodo: null
                }
            } else {
                return {
                    ...state,
                    todos: state.todos.filter((todo) => todo.id !== action.payload.id),
                }
            }
        case 'SET_EDITING_TODO':
            return {
                ...state,
                editingTodo: action.payload
            }
        case 'UNSET_EDITING_TODO':
            return {
                ...state,
                editingTodo: null
            }
        case 'SET_TODO_SORT_PREF':
            return {
                ...state,
                sortPref: action.payload
            }
        case 'SET_TODO_COMPLETION':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = action.payload.completed
                        return todo;
                    } else {
                        return todo;
                    }
                })
            }
    }
}

export default todoReducer;