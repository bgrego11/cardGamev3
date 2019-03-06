import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Score.css'

export default class Score extends Component {
    constructor(props, context) {
      super(props, context);
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state ={
        show: false,
        playerScores: ""
      };
    }


    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        const { players } = this.props
        this.setState({ show: true });
        this.setState({
            playerScores: players
        })
      }

render(){

    const scoreKeeper = 
        this.state.playerScores.length === 0 ? 
        <div>Game has not started</div>
        :
        this.state.playerScores.map(i => 
        <div key={i.name}>{i.id}: {i.score}</div>
        )

    return(
        <div>
        <Button className="scoreBtn" variant="outline-light" onClick={this.handleShow}>
          Check Score
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Score</Modal.Title>
          </Modal.Header>
          <Modal.Body>{scoreKeeper}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        </div>

    )
}

    }
