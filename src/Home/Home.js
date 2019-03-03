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
        
        const socket = io.connect("/")
        
        console.log(socket);

        const addUserName = async () => { const res = await axios.get('https://wild-rice-5480.auth0.com/userinfo', { headers: {"Authorization" : `Bearer ${localStorage.access_token}`}})
        return await res.data;
}
    
    
    socket.on("connect", () => {
      addUserName().then(name => {
        let plays = {
          name:name.name,
          id: socket.id,
          picture: name.picture
        }
          this.setState({
            profile: name
          })           

socket.emit(CURRENTPLAYS, plays)
      })
      
    })

    socket.on("disconnect", () => {
     let removeUserArr = this.state.allPlayers
      for(let i=0; i < removeUserArr.length; i++) {
        if (removeUserArr[i].id === socket.id) {
          removeUserArr.splice(i,1)
        }
      }
      this.setState({
        allPlayers: removeUserArr
      })
      
    })

    socket.on("connect_error", (e) => {
      console.log("connect_error", e)
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
        axios.get('https://wild-rice-5480.auth0.com/userinfo', { headers: {"Authorization" : `Bearer ${localStorage.access_token}`}})
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
        <div className="homeContainer">
              {this.state.user === null ? <div>sign in</div> : 
                  <Game socket={socket} currentUsers={allPlayers}/> 
              }
              
                  </div>
      );
    }
  }
  


export default Home;