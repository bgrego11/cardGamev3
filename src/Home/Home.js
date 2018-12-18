import React, { Component } from 'react';
// import Sidebar from './Sidebar'
import './Home.css';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timesamp yet',
      value: "there are no names yet",
      userName: "",
      tha: 'nothing yet'
      
    }
    

    
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    socket.on("message", data => this.setState({ value: data }));
  }  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
   
    
    console.log(this.state.value)
    socket.emit('gotthesocket', this.state.value)
    event.preventDefault();
  
  }

  render() {
    return (
      <div className="homeCont">
     <div className="chatHome">This is the chat box</div>
     
     <p>Number of current users: {this.state.timestamp}</p>
     <p>Users Id's: {this.state.value}</p>
     <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Home;