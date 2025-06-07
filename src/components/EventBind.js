import React, {Component} from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state= {
            messege : 'Hello'
        }
    }
    clickHandler = ()=> {
        this.setState({
            messege: 'Goodbye!'
        })
        this.clickHandler = this.clickHandler.bind(this);
    }
    render() {
        return (
            <div>
                <div>{this.state.messege}</div>
                {/* Using Arrow Function */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
               {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
               <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind;