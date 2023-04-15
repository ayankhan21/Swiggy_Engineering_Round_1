import {canPlayCard,drawCards,getNextPlayerIndex} from './Main'


// test('canPlayCard returns true for a playable card', () => {
//     const topCard = { suit: 'hearts', rank: '10' };
//     const card = { suit: 'hearts', rank: '8' };
//     expect(canPlayCard(card, topCard)).toBe(true);
//   });

describe('canPlayCard function', () => {
    const topCard = { rank: '7', suit: 'hearts' };
    
    it('should return true when the card has the same suit as the top card', () => {
      const card = { rank: '10', suit: 'hearts' };
      const result = canPlayCard(card, topCard);
      expect(result).toBe(true);
    });
  
    it('should return true when the card has the same rank as the top card', () => {
      const card = { rank: '7', suit: 'clubs' };
      const result = canPlayCard(card, topCard);
      expect(result).toBe(true);
    });
  
    it('should return false when the card has a different rank and suit from the top card', () => {
      const card = { rank: '2', suit: 'diamonds' };
      const result = canPlayCard(card, topCard);
      expect(result).toBe(false);
    });
  });


  // getnextindex

  describe('getNextPlayerIndex', () => {
    test('should return the correct next player index when direction is 1', () => {
      const currentPlayerIndex = 0;
      const direction = 1;
      const expected = 1;
      const result = getNextPlayerIndex(currentPlayerIndex, direction);
      expect(result).toEqual(expected);
    });
  
    test('should return the correct next player index when direction is -1', () => {
      const currentPlayerIndex = 0;
      const direction = -1;
      const expected = 3;
      const result = getNextPlayerIndex(currentPlayerIndex, direction);
      expect(result).toEqual(expected);
    });
  
    test('should handle the last player index correctly when direction is 1', () => {
      const currentPlayerIndex = 3;
      const direction = 1;
      const expected = 0;
      const result = getNextPlayerIndex(currentPlayerIndex, direction);
      expect(result).toEqual(expected);
    });
  
    test('should handle the last player index correctly when direction is -1', () => {
      const currentPlayerIndex = 3;
      const direction = -1;
      const expected = 2;
      const result = getNextPlayerIndex(currentPlayerIndex, direction);
      expect(result).toEqual(expected);
    });
  });

  // drawCards

  describe('drawCards function', () => {
    let players = [    { name: 'Player 1', hand: [] },
      { name: 'Player 2', hand: [] },
      { name: 'Player 3', hand: [] }
    ];
  
    beforeEach(() => {
      players = [      { name: 'Player 1', hand: [] },
        { name: 'Player 2', hand: [] },
        { name: 'Player 3', hand: [] }
      ];
    });
  
    test('should add the specified number of cards to the player\'s hand', () => {
      const index = 0;
      const number = 2;
  
      drawCards(index, number, players);
  
      expect(players[index].hand.length).toBe(number);
    });
  
    test('should add cards with valid suits and ranks to the player\'s hand', () => {
      const index = 1;
      const number = 1;
  
      drawCards(index, number, players);
  
      expect(players[index].hand[0].suit).toMatch(/(hearts|diamonds|clubs|spades)/);
      expect(players[index].hand[0].rank).toMatch(/(ace|2|3|4|5|6|7|8|9|10|jack|queen|king)/);
    });
  });

