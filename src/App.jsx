import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

import logo from './assets/react.svg';

function App() {
  return (
    <div className='container'>
      <div className='px-4 py-5 my-5 text-center'>
        <img
          className='d-block mx-auto mb-4'
          src={logo}
          alt=''
          width='72'
          height='57'
        />
        <h1 className='display-5 fw-bold'>Just Another Todo App</h1>
      </div>

      <TodoProvider>
        <div className='row'>
          <div className='col-4'>
            <TodoList />
          </div>
          <div className='col-8'>
            <TodoForm />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;

