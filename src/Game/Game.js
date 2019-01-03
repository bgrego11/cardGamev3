import React, { Component } from 'react';
import decks from '../data/decks'

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
      players: 3,
      names:["zeus","steve","rebecca"],
      pCards: [],
      dealer: "" 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      cards: decks
    })
  }

  componentDidMount() {
    this.setState({
      blackCards: this.state.cards[0].blackCards,
      whiteCards: this.state.cards[0].whiteCards
    })
  }

  handleSubmit(event) {
    const numofPlayers = this.state.userInput
  this.setState({     
    players: numofPlayers
  });
  event.preventDefault()
}
handleChange(e) {
  this.setState({
    userInput: e.target.value
  });
  e.preventDefault()
}

dealCards = () => {
  let count = 7;
  const max = this.state.whiteCards.length-1;
  const numSelect = Math.floor(Math.random() * max);
  const currentPlayers = this.state.names;

  let cardArray = this.state.whiteCards;

  // if (count > 0) {
    
  // }
  console.log(this.state.whiteCards[max])
  console.log(cardArray)

  
  // this.setState({
  //     selection: this.state.names[numSelect].name
  // })
  // console.log(this.state.blackCards)
}

  render() {

    return (
      <div className="container">
  <h1>Number of players</h1>
  <h2>{this.state.players}</h2>
  {/* <form onSubmit={this.handleSubmit}>
        <label>
          How Many Players?
          <input type="text" value={this.state.value} onChange={this.handleChange} required placeholder=" "  />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
      <button onClick={this.dealCards}>shuffle</button>
      <div></div>
      </div>
    );
  }
}
