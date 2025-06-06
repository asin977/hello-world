// Set State

import React, {Component} from 'react';

class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementFive() {
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => {
    //         console.log('Callback value',this.state.count);
    //     }
    // )
       this.setState((prevState,props)=> ({
              count: prevState.count + 1
       }))
       console.log(this.state.count);
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
     render() {
        return (
            <div>
                count- {this.state.count}
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
     }
}
export default Counter;


// Note: The incrementFive method is called when the button is clicked, and it increments the count by 1 each time.