import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/messege';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import classClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <classClick />
        <EventBind />
        <ParentComponent />
        {/* <UserGreetings /> */}
      </div>
    );
  }
}

export default App;