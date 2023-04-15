import shuffledDeck from "./deck.mjs";
let deckCopy = [...shuffledDeck];

let numOfPlayers = 4;
// Can be changed and maximum upto 4 Players

//Initializing the players Array

let players = [];
for (let i = 0; i < numOfPlayers; i++) {
  players.push({ name: `Player ${i + 1}`, hand: [] }); // Each player is an object with properties -{ name and a hand , hand = [5 cards by default] }
}

// Removes one card from any deck provided randomly
function distributeCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0];
  return card;
}
for (let i in players) {
  for (let j = 0; j < 5; j++) {
    let someCard = distributeCard(deckCopy);
    players[i].hand.push(someCard);
  }
}

// remaining cards after distributing to each player
let drawPile = [...deckCopy];

function drawCards(index, number) {
  for (let i = 0; i < number; i++) {
    let someCard = distributeCard(deckCopy);
    players[index].hand.push(someCard);
  }
}

function canPlayCard(card, topCard) {
  if (card.suit === topCard.suit) {
    return true;
  }
  if (card.rank === topCard.rank) {
    return true;
  }
  return false;
}

function getNextPlayerIndex(currentPlayerIndex, direction) {
  if (direction === 1) {
    return (currentPlayerIndex + 1) % players.length;
  } else {
    return (currentPlayerIndex + players.length - 1) % players.length;
  }
}

function startGame(players) {
  let direction = 1;
  let currentPlayerIndex = 0;
  let playPile = [];
  playPile.push(drawPile.pop());
  console.log(playPile)
  // let topCard = playPile.pop();
  let topCard = playPile[playPile.length - 1];

  while (true) {
    let currentPlayer = players[currentPlayerIndex];
    console.log(`${currentPlayer.name}, it's your turn.`);
    console.log("TOP CARD IS ", topCard);

    // Check if the Draw Pile is empty and draw the game if empty
    if (drawPile.length === 0) {
      console.log("Its a draw!!");
      break;
    }

    // Loop through each card of current player to see if any card is playable

    // let playable = false;
    let playedCard = false;

    if(!playedCard) {
      for (let i in currentPlayer.hand) {
        let card = currentPlayer.hand[i];

        if (canPlayCard(card, topCard)) {
          // console.log("true")
          let discard = currentPlayer.hand.splice(i, 1)[0];
          playPile.push(discard);
          topCard = playPile.pop()
          // console.log(playPile,"after pushing")
          // playable = true;
          // playedCard = true;
          console.log(
            `${currentPlayer.name} has played ${card.rank} of ${card.suit}`
          );
          playedCard = true;
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
      if(!playedCard) {
      console.log(`${currentPlayer.name} has to draw a card`);
      let card = drawPile.pop();
      currentPlayer.hand.push(card);
    }
    }

    // if player's cards are not playable they take one from the draw pile
    // if (playedCard) {
    //   console.log(`${currentPlayer.name} has to draw a card`);
    //   let card = drawPile.pop();
    //   currentPlayer.hand.push(card);
    // }

    if (currentPlayer.hand.length === 0) {
      console.log(`${currentPlayer.name} Wins!!`);
      break;
    }

    // Loop which makes sure the indexes dont go out of range
    // direction is used to switch the rotation of gameplay

    // currentPlayerIndex = (currentPlayerIndex + direction) % players.length;
    currentPlayerIndex = getNextPlayerIndex(currentPlayerIndex, direction);
  }
}

startGame(players);

// console.log(players[0].hand[0])
