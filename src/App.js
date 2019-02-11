import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';



class App extends Component {


  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      
      <div>

          {
              !isAuthenticated() && (
                
                <div className="hero">
                <h1>Cards Against Humaity</h1>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h1>Let the Fun Begin</h1>
                  <button className="flip-card-button" onClick={this.login.bind(this)} id="qsLoginBtn">Log in | Sign Up</button>
                    </div>
                    <div class="flip-card-back">
                      <h1>Cards</h1> 
                      <h1>Against</h1> 
                      <h1>Humanity</h1>
                    </div>
                  </div>
                </div>
                  </div>
                  
                )
            }
            {
              isAuthenticated() && (
              <div>
              <div className="navbar" id="homeid">
              <div className="linkBox">
              <div className="link" onClick={this.goTo.bind(this, 'home')}>Cards Against Humanity</div>

                <div className="link" onClick={this.logout.bind(this)}>Log Out</div>
                </div>
                </div>
                </div>
                )
            }
        </div>
    );
  }
}

export default App;
