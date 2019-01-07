import React, { Component } from 'react';
import decks from '../data/decks';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state ={
      userInput: '',
      blackCards: "",
      whiteCards: "",
      blackDiscard: [],
      whiteDiscard: [],
      cards: [],
      players: [{name: "stevio", cardsInHand: []}],
      names:["zeus","steve","rebecca"],
      dealer: "",
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
        let cardArray = this.state.whiteCards;
        let nameArray = this.state.players[0].cardsInHand
        const max = this.state.whiteCards.length-1;
  
        let numSelect = Math.floor(Math.random() * max);
      nameArray.push(this.state.whiteCards[numSelect])
  
      let newWhite = cardArray.filter((hero) => 
        hero !== this.state.whiteCards[numSelect]);

        
        this.setState({
        whiteCards: newWhite,
        players: [{
          name: "stevio",
          cardsInHand: nameArray,
          points: 0},
          {
            name: "cheerio",
            cardsInHand: nameArray,
            points: 0},
            {
              name: "dope",
              cardsInHand: nameArray,
              points: 0}]
      })
    }

showWhite = () => {
  if (this.state.players[0].cardsInHand.length < 7) {
   this.dealCards()

    if(this.state.players[0].cardsInHand.length < 7) {
      this.showWhite() }
  }
}
  render() {
    const currentPlayers = this.state.players.map((i, index) => <div key={index}>
                                                                        <div>{i.name}</div>
                                                                        <div>{i.cards}</div>
                                                                        </div>)
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
