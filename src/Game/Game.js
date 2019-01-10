import React, { Component } from 'react';
import decks from '../data/decks';

import './Game.css'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state ={
      blackCards: "",
      whiteCards: "",
      blackDiscard: [],
      whiteDiscard: [],
      cards: [],
      players: [{name: "No Current Players", cardsInHand: []}],
      names:["john", "dave"],
      dealer: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentWillReceiveProps() {
    this.setState({
      names: this.props.initPlayers
    })
  }

  componentWillMount() {
    if (this.state.cards.length === 0){
    this.setState({
      cards: decks
    })
  }
  }

  componentDidMount() {
    this.setState({
      blackCards: this.state.cards[0].blackCards,
      whiteCards: this.state.cards[0].whiteCards,
    })
  }

  handleSubmit(event) {

  event.preventDefault()
}

handleChange(e) {
  this.setState({
    userInput: e.target.value
  });
  e.preventDefault()
}


deal = () => {
 var numOfPlayers = this.state.names.length

 let playersObj = []

 for (let i = 0; i<numOfPlayers; i++) {
  let playerCardsArray = []
  for (let b = 0; b< 7; b++) {
    setTimeout(() => {
    const max = this.state.whiteCards.length-1;
  let numSelect = Math.floor(Math.random() * max);
  playerCardsArray.push(this.state.whiteCards[numSelect])

  let cardArray = this.state.whiteCards;

  let newWhite = 
  cardArray.filter((hero) => 
  hero !== this.state.whiteCards[numSelect])

  this.setState({
    whiteCards: newWhite
  })
    }, 1000)
  }
  playersObj.push({
    name: this.state.names[i],
    cardsInHand: playerCardsArray,
    score: 0,
    dealer: false
  })
 }


 this.setState({
   players: playersObj
 })


}


   

showWhite = () => {

  if (this.state.players[0].cardsInHand.length < 7) {
   this.dealCards()
   console.log(this.state.names)


setTimeout(() => {

   if (this.state.players[0].cardsInHand.length < 7) {
      this.showWhite()                                    
  }
}, 200);
    }
}
  render() {
    // const currentPlayers = this.state.players.map((i, index) => <div key={index}>
    //                                                               <div className="playerName">{i.name}</div>
    //                                                             </div>)

    const currentCards = 
    this.state.players.map((i, index) => <div key={index}>
                                            <li>{i.cardsInHand}</li>
                                          </div>)
    


    return (
      <div className="container">

      <div className="heroGame">
  <h1>Number of players</h1>
  <div>{this.state.players[0].name === "No Current Players" ? 0 : this.state.names.length }</div>
  <div>current players</div>
  <div>{this.state.names.map((b, index) => <li key={index}>{b}</li>)}</div>
  <button onClick={this.showWhite}>Start Game</button>
  </div>
  <button onClick={this.deal}>deal</button>

  <div className="currentCards">
    {currentCards}
  </div>



      </div>
    );
  }
}
