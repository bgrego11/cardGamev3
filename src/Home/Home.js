import React, { Component } from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT, CURRENTPLAYS} from '../Events';
// import Sidebar from './Sidebar'
import './Home.css';
import Game from '../Game/Game';
import axios from 'axios'

const socketUrl = "http://localhost:3001"

class Home extends Component {
  
    constructor(props) {
      super(props);
    
      this.state = {
                socket: null, 
                user: null,
                allPlayers: null,
                profile: "weed"
      };
      }
  

      componentWillMount() {
        const socket = io(socketUrl)
        const newName = this.state.profile
  
        const caller = async () => { const res = await axios.get('https://snydz.auth0.com/userinfo', { headers: {"Authorization" : `Bearer ${localStorage.access_token}`}})
        return await res.data.name;
}
   
      // this.setState({profile: caller()})
    
    
    socket.on("connect", () => {
      caller().then(name => {
        let plays = {name:name ,
          id: socket.id}           

socket.emit(CURRENTPLAYS, plays)
      })
      
    })
    
        this.setState({'socket': socket
      })
      }

      componentDidMount() {
        const {socket} = this.state  
        this.setState({
         user: socket.id
       })


       socket.on(CURRENTPLAYS, (currentUsers) => {
        this.setState({
          allPlayers: currentUsers
        })
      })
      }


      
      socketUser = () => {
        axios.get('https://snydz.auth0.com/userinfo', { headers: {"Authorization" : `Bearer ${localStorage.access_token}`}})
    .then(response => this.setState({profile: response.data.name}))
    }
  
      setUser = (user) => {
          const {socket} = this.state
          socket.emit(USER_CONNECTED, user);
          this.setState({user})

  
      }

      checkstate = () => {
        console.log(this.state)
      }
  
      logout = ()=> {
          const {socket} = this.state
          socket.emit(LOGOUT)
          this.setState({user:null})
      }
  
      render() {
      const { socket } = this.state
      let { allPlayers } = this.state
      return (
        <div className="container">
          <button onClick={this.socketUser} className="pickButton">showplayers</button>
          <button onClick={this.checkstate} className="pickButton">check state</button>
          <h1>{this.state.profile ? this.state.profile : "no name"}</h1>
          <div>
              </div>
              {this.state.user === null ? <div>sign in</div> : 
                  <Game socket={socket} currentUsers={allPlayers}/>
                  
              }
              
                  </div>
      );
    }
  }
  


export default Home;