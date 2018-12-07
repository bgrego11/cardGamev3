import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
          constructor(props) {
            super(props);
            this.state = {
              navOpen: true,
              nav: "sideNav",
              button: "openBtn"
            }
}

toggleNav = () => {
  if (!this.state.navOpen) {
    this.setState({
      navOpen: true,
      nav: "sideNav",
      button: "openBtn"
    });
  } else {
    this.setState({
      navOpen: false,
      nav: "closeNav",
      button: "closeBtn"
    })
  }
    }


  render() {
    return (
      <div className="sideBar">
     <div className={this.state.nav}>
     <div href="javascript:void(0)" className={this.state.button} onClick={this.toggleNav}>&times;</div>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
     
     </div>
      </div>
    );
  }
}

export default Sidebar;