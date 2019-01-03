import React, { Component } from 'react';
// import Sidebar from './Sidebar'
import './Home.css';
import { subscribeToTimer, gotthesocket } from './api';
import Game from '../Game/Game';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timesamp yet',
      value: "there are no names yet",
      userName: "buddy",
      tha: 'nothing yet'
      
    }



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.setState({userName: this.state.value})
    event.preventDefault()
    gotthesocket(this.state.userName)
  }

  render() {
    return (
      <div className="homeCont">
     <div className="chatHome">This is the chat box</div>
     
     <p>Number of current users: {this.state.timestamp}</p>
     <p>Users Id's: {this.state.userName}</p>
     <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Game />
      </div>
    );
  }
}

export default Home;