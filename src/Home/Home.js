import React, { Component } from 'react';
import Sidebar from './Sidebar'
import './Home.css';

class Home extends Component {



  render() {
    return (
      <div className="homeCont">
      <Sidebar />
     <div className="chatHome">This is the chat box</div>
      </div>
    );
  }
}

export default Home;