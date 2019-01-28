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
                allPlayers: []
      };
      }
  
      
      componentWillMount() {
        console.log(this.state)
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
         let newfucks = this.state.allPlayers
         newfucks.push(currentUsers)
        this.setState({
          allPlayers: newfucks
        })
      })

      }


      
      socketUser = () => {
        const {socket} = this.state  
  let plays = []
  plays.push(socket.id)
  console.log(plays)
        socket.emit(CURRENTPLAYS, plays) 

  console.log(this.state)
      }
     
  
      setUser = (user) => {
          const {socket} = this.state
          socket.emit(USER_CONNECTED, user);
          this.setState({user})

          
          
      }
  
      logout = ()=> {
          const {socket} = this.state
          socket.emit(LOGOUT)
          this.setState({user:null})
      }
  
      render() {
      const { title } = this.props
      const { socket } = this.state
      const { user } = this.state
      return (
        <div className="container">
          <button onClick={this.socketUser} className="pickButton">showplayers</button>
  
              {this.state.user === null ? <div>sign in</div> : 
                  // <LoginForm socket={socket} setUser={this.setUser}/>
                  <Game socket={socket} user={user}/>
                  // :
                  // <ChatContainer socket={socket} user={user} logout={this.logout} />
              }
              <div>
                {this.state.allPlayers}
              </div>
              
                  </div>
      );
    }
  }
  


export default Home;