import './App.css';
import ContactList from './components/container/contact_list';
import Father from './components/container/father';
import Square from './components/container/square';
import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import GreetingStyled from './components/pure/greetingStyled';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import { Task } from './models/task.class';



function App() {

  return (
    <div className="App">
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
