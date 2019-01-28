import React, { Component } from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT, CURRENTPLAYS} from '../Events';
// import Sidebar from './Sidebar'
import './Home.css';
import Game from '../Game/Game';

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
        socket.on("connect", () => {
        })

        this.setState({'socket': socket,
          allPlayers: []
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
        const {socket} = this.state  

        let plays = socket.id
        
        socket.emit(CURRENTPLAYS, plays) 
    }
  
      setUser = (user) => {
          const {socket} = this.state
          socket.emit(USER_CONNECTED, user);
          this.setState({user})

  
      }

      checkstate = () => {
        console.log(this.state.allPlayers)
      }
  
      logout = ()=> {
          const {socket} = this.state
          socket.emit(LOGOUT)
          this.setState({user:null})
      }
  
      render() {
      const { title } = this.props
      const { socket } = this.state
      const { allPlayers } = this.state
      return (
        <div className="container">
          <button onClick={this.socketUser} className="pickButton">showplayers</button>
          <button onClick={this.checkstate} className="pickButton">check state</button>
          <div>
                {/* { this.state.allPlayers.length === 0 ? "no players" :  this.state.allPlayers[1][0].name} */}
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