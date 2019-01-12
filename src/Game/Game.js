import React, { Component } from 'react';
import decks from '../data/decks';

import './Game.css'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state ={
      blackCards: "",
      whiteCards: "",
      cards: [],
      players: [{name: "No Current Players", cardsInHand: []}],
      names:["john", "dave", "sven"],
      dealer: "",
      cardsinplay: []
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

showDeal= () => {
  console.log(this.state.players[0].cardsInHand)
}

playcard = () => {
  console.log(this.state.players)

}

  render() {
    const currentCards = 
    this.state.players.map((i, index) => <div key={index}>
                                            <div className="cardFrame">
                                            <h1>{i.name}</h1>
                                            { i.cardsInHand.map(card =>
                                              <div className="cardOutline">
                                              <div className="cardActual">
                                                { card }
                                              </div>
                                              <button onClick={this.playcard}>Play Card</button>
                                              </div>
                                            )}
                                            </div>
                                          </div>)

    
    return (
      <div className="container">

      <div className="heroGame">
  <h1>Number of players</h1>
  <div>{this.state.players[0].name === "No Current Players" ? 0 : this.state.names.length }</div>
  <div>current players</div>
  <div>{this.state.names.map((b, index) => <li key={index}>{b}</li>)}</div>
  </div>
  <button onClick={this.deal}>deal cards</button>

  <div className="currentCards">
  <button onClick={this.showDeal}>showplayers</button>
  </div>

  <div>{currentCards}</div>

      <div>
    <h1>Cards in play</h1>
    <div>{this.state.cardsinplay}</div>
<div>Winner</div>
</div>

      </div>
    );
  }
}
