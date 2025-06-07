import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        username:'',
        comments:'',
        topic:''
    }
  }
handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
}

handleCommentsChange = (evenyt) => {
    this.setState({
      comments: evenyt.target.value
    })
}

hanfdleOptionChange = (event) => {
    this.setState({
      topic: event.target.value
    })
}

handleSubmit = (event) => { 
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault();
}
render() {
    const { username, comments, topic } = this.state;
    return (
    
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" value= {this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label htmlFor="email">Comments</label>
            <textarea value= {this.state.comments} onChange={this.handleCommentsChange}></textarea>
          </div>
          <div>
            <label htmlFor="password">Topic</label>
           
          </div>
          
          <select value= {this.state.topic} onChange={this.handleOptionChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>    
          </select>
          <button type="submit">Submit</button>
        </form>
      
    )
  }
}

export default Form
