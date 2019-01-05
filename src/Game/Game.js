import React, { Component } from 'react';
import decks from '../data/decks';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state ={
      userInput: '',
      blackCards: "",
      blackCardCount: 89,
      whiteCards: "",
      whiteCardCount: 459,
      blackDiscard: [],
      whiteDiscard: [],
      cards: [],
      players: [{name: "stevio", cardsInHand: []}],
      names:["zeus","steve","rebecca"],
      pCards: [],
      dealer: "",
      count: 0 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      whiteCards: this.state.cards[0].whiteCards
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



dealCards = () => {
  
console.log(this.state.whiteCards.length)
  
  
        let cardArray = this.state.whiteCards;
        let nameArray = this.state.players[0].cardsInHand
        let newcount = this.state.count+1
  
        const max = this.state.whiteCards.length-1;
  
        let numSelect = Math.floor(Math.random() * max);
      nameArray.push(this.state.whiteCards[numSelect])
  
      let newWhite = cardArray.filter((hero) => 
        hero !== this.state.whiteCards[numSelect]);

        this.setState({
        count: newcount,
        whiteCards: newWhite,
        players: [{
          name: "stevio",
          cardsInHand: nameArray}]
      })
      console.log(this.state.whiteCards[0])
    }

showWhite = () => {
  if (this.state.players[0].cardsInHand.length < 7) {
    this.dealCards()
  }
  console.log(this.state.whiteCards.length)
}
  render() {
    const currentPlayers = this.state.players.map((i, index) => <ul key={index}>{i.name}</ul>)
    const currentCards = 
    this.state.players.map((i, index) => <ul key={index}>{i.cardsInHand}</ul>)
    
    return (
      <div className="container">
  <h1>Number of players</h1>
  <h2>{this.state.players[0].cardsInHand}</h2>

      <button onClick={this.dealCards}>shuffle</button>
      <div>current players</div>
      <div>{currentPlayers}</div>
      <div>{currentCards}</div>
      <button onClick={this.showWhite}>shuffle</button>
      </div>
    );
  }
}
