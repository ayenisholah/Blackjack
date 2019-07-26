let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = [
  'Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
];


function createDeck() {
  let deck = [];
  for (let suitIdx=0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      }
      deck.push(card);
    }
  }
  return deck
}

function getCardStrings(card) {
  return card.value + ' of ' + card.suit
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

let playerCard = [getNextCard(), getNextCard()];

console.log('Welcome to BlackJack!');


console.log("You're dealt: ");
console.log(" " + getCardStrings(playerCard[0]));
console.log(" " + getCardStrings(playerCard[1]));