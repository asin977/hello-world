import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/messege';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
// import classClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';     
import styles from './appStyles.module.css';
import './appStyles.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
// import LifecycleB from './components/LifecycleB';
import FragmentDemo from './FragmentDemo';
import Table from './Table';


// Uncomment the following line to import UserGreetings component
// import UserGreetings from './components/UserGreetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.sucess }>Hello World</h1>
        <h1 className="error">Error</h1>
        <Greet name="Bruce" heroname="Batsman">
          <p>This is children props</p>
        </Greet>

        <Greet name="Clark" heroname="Superman">
          
          <button>Click Me!</button>
        </Greet>
        <Greet name="Diana" heroname="Wonder Woman"/>
        <Welcome class="Maria" heroname="Mr.bean"/>
        <Welcome class="John" heroname="Noddy"/>
        <Welcome class="Jacob" heroname="Maddy"/>
        <Hello />
        
        <Message />
        <Counter />
        <FunctionClick></FunctionClick>
        
        <EventBind />
        <ParentComponent />
        {/* <UserGreetings /> */}
        <NameList />
        <Stylesheet primary = {true}/>
        <Inline />
        <Form></Form>
        <LifecycleA />
        <FragmentDemo />
        <Table />
      </div>
    );
  }
}

export default App;