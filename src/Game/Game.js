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
      players: [],
      names:["zeus","steve","rebecca"],
      pCards: [],
      dealer: "",
      count: 0 
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
  console.log(this.state.whiteCards.length)
console.log(this.state.players)
    if (this.state.count < 7) {
      for(let i=0; i<7; i++){
        let cardArray = this.state.whiteCards;
        let nameArray = this.state.players
        let newcount = this.state.count+1
    const max = this.state.whiteCards.length-1;
    let numSelect = Math.floor(Math.random() * max);
      nameArray.push(this.state.whiteCards[numSelect])
      let newWhite = cardArray.filter((hero) => 
        hero !== this.state.whiteCards[numSelect])
      this.setState({
        count: newcount,
        whiteCards: newWhite,
        players: nameArray
      })
      console.log(this.state.whiteCards.length)
    }
    }
  
  

  
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

      <button onClick={this.dealCards}>shuffle</button>
      <div></div>
      </div>
    );
  }
}
