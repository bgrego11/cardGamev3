import React, { Component } from 'react';
// import Sidebar from './Sidebar'
import './Home.css';
import { subscribeToTimer, gotthesocket, clientelle } from './api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timesamp yet',
      value: "there are no names yet",
      userName: "",
      tha: 'nothing yet'
      
    }
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));

    gotthesocket((err, tha) => this.setState({
      tha
    }))


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({data: this.state.value})
    clientelle();
    gotthesocket();
    event.preventDefault();

  }

  render() {
    return (
      <div className="homeCont">
     <div className="chatHome">This is the chat box</div>
     
     <p>Number of current users: {this.state.timestamp}</p>
     <p>Users Id's: {this.state.data}</p>
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