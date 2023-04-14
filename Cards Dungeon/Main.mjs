import shuffledDeck from './deck.mjs';

let deckCopy = [...shuffledDeck]

let numOfPlayers = 4
// Can be changed and maximum upto 4 Players


//Initializing the players Array 
// Each player is an object with properties - name and a hand array
// Hand array contains all the cards of each player
let players = []
for(let i = 0 ;i<numOfPlayers;i++){
    players.push({name:`Player ${i+1}`,hand:[]})
}

// Removes one card from any deck provided
function drawCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0];
  return card;
}


function distributeCards(){
  for(let i in players){
    for(let j = 0;j<5;j++){
      let someCard = drawCard(deckCopy)
      players[i].hand.push(someCard)
    }
  }
}
// distributeCards();
// for(let i in players[0].hand){
//   console.log(players[0].hand[i])
// }




// console.log(players[0].hand[0])


