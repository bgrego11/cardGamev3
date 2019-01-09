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

  componentDidMount() {


  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    let newNames = this.state.currentPlayers.slice()
    newNames.push({name: this.state.value,
                   id: this.state.count+1 
                  })
    

    this.setState({
      currentPlayers: newNames
    })
    
    event.preventDefault()
  }

  render() {
    const users = this.state.currentPlayers.map(i => i.name + ", ")

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
      <Game firstPlayers={this.state.currentPlayers} />
      </div>
    );
  }
}

export default Home;