const deck = [
  { suit: "Hearts", rank: 2, action: null },
  { suit: "Hearts", rank: 3, action: null },
  { suit: "Hearts", rank: 4, action: null },
  { suit: "Hearts", rank: 5, action: null },
  { suit: "Hearts", rank: 6, action: null },
  { suit: "Hearts", rank: 7, action: null },
  { suit: "Hearts", rank: 8, action: null },
  { suit: "Hearts", rank: 9, action: null },
  { suit: "Hearts", rank: 10, action: null },
  { suit: "Hearts", rank: 'ace', action: "skip" },
  { suit: "Hearts", rank: 'king', action: "reverse" },
  { suit: "Hearts", rank: 'queen', action: "+2" },
  { suit: "Hearts", rank: 'jack', action: "+4" },

  
  { suit: "Diamond", rank: 2, action: null },
  { suit: "Diamond", rank: 3, action: null },
  { suit: "Diamond", rank: 4, action: null },
  { suit: "Diamond", rank: 5, action: null },
  { suit: "Diamond", rank: 6, action: null },
  { suit: "Diamond", rank: 7, action: null },
  { suit: "Diamond", rank: 8, action: null },
  { suit: "Diamond", rank: 9, action: null },
  { suit: "Diamond", rank: 10, action: null },
  { suit: "Diamond", rank: 'ace', action: "skip" },
  { suit: "Diamond", rank: 'king', action: "reverse" },
  { suit: "Diamond", rank: 'queen', action: "+2" },
  { suit: "Diamond", rank: 'jack', action: "+4" },


  { suit: "Clubs", rank: 2, action: null },
  { suit: "Clubs", rank: 3, action: null },
  { suit: "Clubs", rank: 4, action: null },
  { suit: "Clubs", rank: 5, action: null },
  { suit: "Clubs", rank: 6, action: null },
  { suit: "Clubs", rank: 7, action: null },
  { suit: "Clubs", rank: 8, action: null },
  { suit: "Clubs", rank: 9, action: null },
  { suit: "Clubs", rank: 10, action: null },
  { suit: "Clubs", rank: 'ace', action: "skip" },
  { suit: "Clubs", rank: 'king', action: "reverse" },
  { suit: "Clubs", rank: 'queen', action: "+2" },
  { suit: "Clubs", rank: 'jack', action: "+4" },


  { suit: "Spades", rank: 2, action: null },
  { suit: "Spades", rank: 3, action: null },
  { suit: "Spades", rank: 4, action: null },
  { suit: "Spades", rank: 5, action: null },
  { suit: "Spades", rank: 6, action: null },
  { suit: "Spades", rank: 7, action: null },
  { suit: "Spades", rank: 8, action: null },
  { suit: "Spades", rank: 9, action: null },
  { suit: "Spades", rank: 10, action: null },
  { suit: "Spades", rank: 'ace', action: "skip" },
  { suit: "Spades", rank: 'king', action: "reverse" },
  { suit: "Spades", rank: 'queen', action: "+2" },
  { suit: "Spades", rank: 'jack', action: "+4" },

];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let shuffledDeck = shuffle(deck)


export default shuffledDeck;