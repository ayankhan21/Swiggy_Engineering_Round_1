import shuffledDeck from "./deck.js";

let deckCopy = [...shuffledDeck];

let numOfPlayers = 4;
// Can be changed and maximum upto 4 Players

//Initializing the players Array
let players = [];
for (let i = 0; i < numOfPlayers; i++) {
  players.push({ name: `Player ${i + 1}`, hand: [] }); // Each player is an object with properties -{ name and a hand , hand = [5 cards by default] }
}

// Removes one card from the deck provided randomly
function distributeCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0];
  return card;
}
for (let i in players) {
  for (let j = 0; j < 5; j++) {
    let someCard = distributeCard(deckCopy);
    players[i].hand.push(someCard); // Distributing 5 random cards to each player
  }
}

// Remaining cards after distributing to each 5 cards to each player
let drawPile = [...deckCopy];

// Gives cards to players according to the index and number ( either +2 or +4 )
export function drawCards(index, number) {
  for (let i = 0; i < number; i++) {
    let someCard = distributeCard(deckCopy);
    players[index].hand.push(someCard);
  }
}

// Check to see if a player can play a card or not
export default function canPlayCard(card, topCard) {
  if (card.suit === topCard.suit) {
    return true;
  }
  if (card.rank === topCard.rank) {
    return true;
  }
  return false;
}

export function getNextPlayerIndex(currentPlayerIndex, direction) {
  if (direction === 1) {
    return (currentPlayerIndex + 1) % players.length;
  } else {
    return (currentPlayerIndex + players.length - 1) % players.length;
  }
}

export function startGame(players) {
  let direction = 1; // Normal Rotation
  let currentPlayerIndex = 0;
  let playPile = [];
  playPile.push(drawPile.pop());  // Initial Card from the DrawPile to start the game with
  let topCard = playPile[playPile.length - 1];

  while (true) {
    let currentPlayer = players[currentPlayerIndex];
    console.log(`${currentPlayer.name}, it's your turn.`);
    console.log("TOP CARD IS ", topCard);

    // Check if the Draw Pile is empty
    if (drawPile.length === 0) {
      console.log("Its a draw!!");
      break;
    }

    // Check if the Current Player has no cards left
    if (currentPlayer.hand.length === 0) {
      console.log(`${currentPlayer.name} Wins!!`);
      break;
    }

    // Loop through each card of current player to see if any card is playable

    let playedCard = false;

    if (!playedCard) {
      for (let i in currentPlayer.hand) {
        let card = currentPlayer.hand[i];

        if (canPlayCard(card, topCard)) {
          let discard = currentPlayer.hand.splice(i, 1)[0]; // Remove the card Current Player's hand
          playPile.push(discard); // Add it to Play Pile
          topCard = playPile.pop();

          console.log(
            `${currentPlayer.name} has played ${card.rank} of ${card.suit}`
          );
          playedCard = true;
          // In case of any action cards performs a switch
          switch (card.rank) {
            case "ace": {
              console.log(
                getNextPlayerIndex(currentPlayerIndex, direction),
                "is skipped"
              );
              currentPlayerIndex = getNextPlayerIndex(
                currentPlayerIndex,
                direction
              );
              break;
            }

            case "king": {
              console.log("Order reversed");
              direction *= -1;
              break;
            }

            case "queen": {
              console.log(
                players[getNextPlayerIndex(currentPlayerIndex, direction)].name,
                "has to draw 2 cards"
              );
              drawCards(getNextPlayerIndex(currentPlayerIndex, direction), 2);
              break;
            }

            case "jack": {
              console.log(
                players[getNextPlayerIndex(currentPlayerIndex, direction)].name,
                "has to draw 4 cards"
              );
              drawCards(getNextPlayerIndex(currentPlayerIndex, direction), 4);
              break;
            }

            default: {
              break;
            }
          }
          break;
        }
      }
      if (!playedCard) { // If no cards can be played , the player has to take one from the Draw Pile
        console.log(`${currentPlayer.name} has to draw a card`);
        let card = drawPile.pop();
        currentPlayer.hand.push(card);
      }
    }

    // Makes sure the next Index is traversed according to the Direction of play
    // Direction is used to switch the rotation of gameplay
    currentPlayerIndex = getNextPlayerIndex(currentPlayerIndex, direction);
  }
}

startGame(players);
