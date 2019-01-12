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

shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


deal = () => {
 var numOfPlayers = this.state.names.length

 let playersObj = []

 const blackMax = this.state.blackCards.length-1;
let blackSelect = Math.floor(Math.random() * blackMax);
let currentText = this.state.blackCards[blackSelect].text;
let currentPick = this.state.blackCards[blackSelect].pick;
let a = this.state.whiteCards 
for (let i = a.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [a[i], a[j]] = [a[j], a[i]];
}


 for (let i = 0; i<numOfPlayers; i++) {
   
    


    let playerCardsArray = a.slice(0,7)
    a.splice(0,7)
   console.log(playerCardsArray)



    

    this.setState({
      whiteCards: a
    })
      
    playersObj.push({
      name: this.state.names[i],
      cardsInHand: playerCardsArray,
      score: 0,
      bcardPick: currentPick,
      bCard: currentText,
      dealer: false
    })
  }


  this.setState({
    players: playersObj
  })

  console.log(this.state)
}


   


showDeal= () => {
  console.log(this.state)
}

playcard = (i, index) => {
    console.log(i)
    this.state.cardsinplay.push([this.state.players[index].cardsInHand[i], index])
    console.log(this.state.cardsinplay)
    this.state.players[index].cardsInHand.splice(i,1)
    let state = this.state
    this.setState(state)

    console.log(this.state.players[index].cardsInHand)

    console.log(index)

}

  render() {
    const currentCards = 
    this.state.players.map((i, index) => <div key={index}>
                                            <div className="cardFrame">
                                            <h1>{i.name}</h1>
                                            <h2>Black Card</h2>
                                            <h2>{i.bCard}</h2>
                                            <h2>Pick: {i.bcardPick}</h2>
                                            { i.cardsInHand.map((card, i) =>
                                              <div className="cardOutline">
                                              <div className="cardActual">
                                                { card }
                                              </div>
                                              <button id= { i + ": " + index } className="pickButton"  onClick={() => this.playcard(i, index)}>Play Card</button>
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
  <button onClick={this.deal} className="pickButton">deal cards</button>

  <div className="currentCards" >
  <button onClick={this.showDeal} className="pickButton">showplayers</button>
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
