import React, { Component } from 'react';
import Sidebar from './Sidebar'
import './Home.css';
import { subscribeToTimer } from './api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timesamp yet'
    }
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }


  render() {
    return (
      <div className="homeCont">
      <Sidebar />
     <div className="chatHome">This is the chat box</div>
     <p>This is the timer value: {this.state.timestamp}</p>
      </div>
    );
  }
}

export default Home;