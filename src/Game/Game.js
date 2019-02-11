import React, { Component } from 'react';
import decks from '../data/decks';
import {USER_CONNECTED, GAME_UPDATE, CURRENTPLAYS} from '../Events';
import './Game.css'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state ={
      blackCards: "",
      whiteCards: "",
      cards: [],
      players: [],
      names:["john", "dave", "sven"],
      dealer: "",
      cardsinplay: [],
      score: [],
      gameInProgress: false
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
    const { socket } = this.props
    this.initSocket(socket)

  }

  initSocket = (socket) => {
    socket.on('connect', () => {
    })
    
    socket.on(GAME_UPDATE, (game) => {
        this.setState(game)
    })
    
    socket.on(CURRENTPLAYS, (currentUsers) => {
      this.setState({
        names: currentUsers
      })
    })
}

  handleSubmit(event) {

  event.preventDefault()
}

setUser = (user) => {
  const {socket} = this.state
  socket.emit(USER_CONNECTED, user);
  this.setState({user})
  console.log(user.name)
}

handleChange(e) {
  this.setState({
    userInput: e.target.value
  });
  e.preventDefault()
}

// Initially deal out cards according to names in state
deal = () => {
  
  this.setState({
    blackCards: decks[0].blackCards,
    whiteCards: decks[0].whiteCards,
    gameInProgress: true
  }, () => {
    
    var numOfPlayers = this.state.names.length

    let playersObj = []
   
    const blackMax = this.state.blackCards.length-1;
   let blackSelect = Math.floor(Math.random() * blackMax);
   let currentText = this.state.blackCards[blackSelect].text;
   let currentPick = this.state.blackCards[blackSelect].pick;
   let a = this.state.whiteCards 
   
   // shuffle function for stack of cards 
   for (let i = a.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [a[i], a[j]] = [a[j], a[i]];
   }
   
    for (let i = 0; i<numOfPlayers; i++) {
   
       let playerCardsArray = a.slice(0,7)
       a.splice(0,7)
   
       this.setState({
         whiteCards: a
       })
         
       playersObj.push({
         name: this.state.names[i].id,
         id:this.state.names[i].name,
         cardsInHand: playerCardsArray,
         score: 0,
         bcardPick: currentPick,
         bCard: currentText,
         dealer: false,
         turn: 1
       })
     }
     playersObj[0].dealer = true
   
     this.setState({
       players: playersObj
     }, () => {
      const { socket } = this.props
      let game = this.state
      socket.emit(GAME_UPDATE, game)
     })
   })
}

showDeal = () => {
  const { socket } = this.props
  console.log(this.state.players)
  let game = this.state
  socket.emit(GAME_UPDATE, game)
}

socketShow = () => {

  console.log(this.state.names)
}

// play available cards in the amount derived from numPicks

playcard = (i, index, winner, numPicks) => {
  let newCards = this.state.players

  let playerChecker= this.state.cardsinplay
  

  if (numPicks > 0){  

    // no cards yet played
    if (playerChecker.length === 0) {
      this.state.cardsinplay.push({ name: [this.state.players[index].cardsInHand[i]], 
        playerIndex: index,
        cardOwner: winner})
        newCards[index].bcardPick--
    }
    else {

      let hasPlayedCard 
      let pCheckIdx
    for(let j=0; j< playerChecker.length; j++){
      // playing second card for user
      if (playerChecker[j].playerIndex === index) {
        hasPlayedCard = true
        pCheckIdx = j
        j = playerChecker.length + 1
      } 
      else {
        hasPlayedCard = false
      }
    }
      // playing first card when cards are already in play
      if (hasPlayedCard) {
        if (newCards[index].bcardPick > 0) {
          playerChecker[pCheckIdx].name.push(this.state.players[index].cardsInHand[i])
          newCards[index].bcardPick--
          
        } 
        else {
        }
        
      } else {
        this.state.cardsinplay.push({ name: [this.state.players[index].cardsInHand[i]], 
          playerIndex: index,
          cardOwner: winner})
          newCards[index].bcardPick--
        }  
  }
    

  
    newCards[index].cardsInHand.splice(i,1)

    this.setState({
      players: newCards
    }, () => {
      const { socket } = this.props
      console.log(this.state.players)
      let game = this.state
      socket.emit(GAME_UPDATE, game)
    })
}
};

// Create object to update scores with forloop then setstate with created variable playerScore and pushes new cards into hand

updateScore = (player) => {

  let newCards = this.state.players

  const blackMax = this.state.blackCards.length-1;
  let blackSelect = Math.floor(Math.random() * blackMax);
  let currentText = this.state.blackCards[blackSelect].text;
  let currentPick = this.state.blackCards[blackSelect].pick;
  
  // resets dealer

for(let j=0; j<newCards.length; j++){
  if(newCards[j].turn === newCards.length) {
    newCards[j].turn= 1
    newCards[j].dealer = false
    newCards[0].dealer= true
  } else{
    if ( newCards[j].turn < newCards.length && newCards[j].turn === j) {
      newCards[j].turn++
      newCards[j].dealer = true
    } else {
      newCards[j].turn++
      newCards[j].dealer = false
    }
    }
    }
  

  
  for(let k=0; k<newCards.length; k++) {
    
    newCards[k].bcardPick= currentPick
    newCards[k].bCard = currentText
  }

let playerScore = this.state.players.map(i => i)

for(let i=0; i < playerScore.length; i++) {
  if (playerScore[i].name === player) {
    playerScore[i].score++
    if(playerScore[i].score ===7) {
      console.log(playerScore[i].name + "wonnnnnn")
    }
  }

  let x
  for (x in newCards) {
    if (newCards[x].cardsInHand.length < 7) {
      newCards[x].cardsInHand.push(this.state.whiteCards.splice(0,7 - newCards[x].cardsInHand.length))
    }
  }

  this.setState({
    players: newCards,
    cardsinplay: []
  })
   

}

// need to increment the dealer by 1 here

this.setState({
  players: playerScore
}, () => {
  const { socket } = this.props
  console.log(this.state.players)
  let game = this.state
  socket.emit(GAME_UPDATE, game)
})
}

cardsinplay = (playerName) => {
  let smoke = this.state.cardsinplay

  for (let i =0; i <this.state.smoke.length; i++) {
    if (smoke[i].name === playerName) {

    }
  }
}

  render() { 
    const { socket } = this.props
    let mySocketID = socket.id
    
    let pickACard = this.state.cardsinplay.map((pickedCard, index) => 
    <div>
    <div className="cardOutline" key={index}>
    <div className="cardInner">
    <div className="cardFrame-back">Cards Against Humanity</div>
    <div className="cardFrame-front">
    <div className="cardName">
    {pickedCard.name}</div>
    <button className="winnerButton" onClick={() => this.updateScore(pickedCard.cardOwner)}>Pick a Winner </button>
    </div>
    </div>
    </div>
    </div>
  )
    const currentCards = 
    
    this.state.players.map((i, index) =>   
    i.name === mySocketID ? 
    <div key={index}>
            <div className="cardFrame">
            <h2>{i.id}</h2>
            <h3>Black Card</h3>
            <h3>{i.bCard}</h3>
            <h3>Pick: {i.bcardPick}</h3>
            { i.dealer === true ? <div>{pickACard}</div> : i.cardsInHand.map((card, white) =>
              <div key={white + 1} className="cardOutline">
                <div className="cardInner">
                      <div className="cardFrame-back">Cards Against Humanity</div>
                          <div className="cardFrame-front">
                          <div className="cardName">
                          { card }
                          </div>
                          <button id= { white + ": " + index } className="pickButton"  onClick={() => this.playcard(white, index, i.name, i.bcardPick)}>Play Card</button>
                          </div>
                </div>
              </div>
            )}
            </div>
          </div>
          : <div key={index}></div>
          );

   

    const scoreKeeper = this.state.players.map(i => 
    <div key={i.name}>{i.id}: {i.score}</div>
    )

    const inGamePlayers = this.state.names.map((i,index) => 
     <div key={index + 22}>{i.name}</div> )
  
    
    return (
      <div className="gameContainer">
        { this.state.gameInProgress ? null :
          <div class="game-flip-card">
            <div class="game-flip-card-inner">
              <div class="game-flip-card-front">

                <div className="heroGame">
                  <h1>Players In Game</h1>
                  <div>{inGamePlayers}</div>
                </div>
            
    {this.state.names.length < 3 ? 
      <div>
        <h1>You need {3 - this.state.names.length} more players to begin</h1>
      </div>                                   
  :
    <div>
      <div>
        <h1>Would you like to start?</h1> 
          <button onClick={this.deal} className="pickButton">Deal cards</button>
      </div>
    </div>
  }
  
        </div>
        <div class="game-flip-card-back">
          <h1>Cards</h1> 
          <h1>Against</h1> 
          <h1>Humanity</h1>
        </div>
      </div>
    </div>
        }

  <div>{currentCards}</div>

      </div>
    );
  }
}
