const SUITS = ["♥", "♦", "♠", "♣"];
const VALUES = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

export default class Deck {
  cards: Card[];
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCard() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCard - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  suit: string;
  value: string;
  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }
}

function freshDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
