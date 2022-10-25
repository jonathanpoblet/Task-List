import './App.css';
import ContactList from './components/container/contact_list';
import Father from './components/container/father';
import TaskListComponent from './components/container/task_list';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import GreetingStyled from './components/pure/greetingStyled';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';



function App() {

  return (
    <div className="App">
      <ContactList></ContactList>
    </div>
  );
}

export default App;
