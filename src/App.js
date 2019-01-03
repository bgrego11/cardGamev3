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
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
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
