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
                allPlayers: null
      };
      }
  
      
      componentWillMount() {
        const socket = io(socketUrl)
        axios.get('https://snydz.auth0.com/userinfo', { headers: {"Authorization" : `Bearer ${localStorage.access_token}`}})
    .then(response => this.setState({profile: response.data.name}))
    .then(
        socket.on("connect", () => {
          let plays = {name: "hobo",
                    id:  socket.id}
        
        socket.emit(CURRENTPLAYS, plays)
        }))

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
      const { title } = this.props
      const { socket } = this.state
      let { allPlayers } = this.state
      return (
        <div className="container">
          <button onClick={this.socketUser} className="pickButton">showplayers</button>
          <button onClick={this.checkstate} className="pickButton">check state</button>
          <h1>{this.state.profile ? this.state.profile : "no name"}</h1>
          <div>
                {/* {this.state.allPlayers[0].id} */}
              </div>
              {this.state.user === null ? <div>sign in</div> : 
                  // <LoginForm socket={socket} setUser={this.setUser}/>
                  <Game socket={socket} currentUsers={allPlayers}/>
                  // :
                  // <ChatContainer socket={socket} user={user} logout={this.logout} />
              }
              
                  </div>
      );
    }
  }
  


export default Home;