import React, { Component } from 'react';
// import Sidebar from './Sidebar'
import './Home.css';
import Game from '../Game/Game';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timesamp yet',
      value: "",
      userName: "buddy",
      currentPlayers: [{name: "No Current Players",
        id:0 
       }],
      count: 0
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {

    if (this.state.currentPlayers[0].name === "No Current Players") {
      var newNames = []
    } else {
    var newerNames = this.state.currentPlayers.slice()
    }
    newerNames.push({name: this.state.value,
                   id: this.state.count+1 
                  })
    
    this.setState({
      currentPlayers: newNames,
      value: ""
    })
    
    event.preventDefault()
  }

  render() {
    const users = this.state.currentPlayers.map((i, index) => <li key={index}>{i.name}</li> )

    return (
      <div className="homeCont">
     
     <p>Users Id's: {users}</p>
     <form onSubmit={this.handleSubmit}>
        <label>
          Add a player:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Game initPlayers={this.state.currentPlayers.map(i=>i.name)} />
      </div>
    );
  }
}

export default Home;