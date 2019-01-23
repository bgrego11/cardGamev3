import React, { Component } from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT} from '../Events';
// import Sidebar from './Sidebar'
import './Home.css';
import Game from '../Game/Game';

const socketUrl = "http://localhost:3001"

class Home extends Component {
  
    constructor(props) {
      super(props);
    
      this.state = {
                socket:'dog', 
                user: null
      };
      }
  
      
      componentWillMount() {
        const socket = io(socketUrl)
        socket.on("connect", () => {
            console.log("connected biatch")
        })
        this.setState({'socket': socket}, () => {
          console.log(this.state);
        })
        
          
      }
      
      
     
  
      setUser = (user) => {
          const {socket} = this.state
          socket.emit(USER_CONNECTED, user);
          this.setState({user})
          console.log(user.name)
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
  
              { 
                  // <LoginForm socket={socket} setUser={this.setUser}/>
                  <Game socket={socket} />
                  // :
                  // <ChatContainer socket={socket} user={user} logout={this.logout} />
              }
              
                  </div>
      );
    }
  }
  


export default Home;