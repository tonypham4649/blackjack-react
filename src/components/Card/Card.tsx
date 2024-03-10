import "./Card.css";

// Types for the suit and value of a card
const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
type Suit = (typeof suit)[number];
const isSuit = (x: any): x is Suit => suit.includes(x);

const cardValue = [
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
type CardValue = (typeof cardValue)[number];
const isCardValue = (x: any): x is CardValue => cardValue.includes(x);

interface CardProps {
  suit: Suit;
  value: CardValue;
}

function Card({ suit, value }: CardProps) {
  return (
    <div className="card">
      <div className="card-value">{isCardValue(value) ? value : "error"}</div>
      <div className="card-suit">{isSuit(suit) ? suit : "error"}</div>
    </div>
  );
}

export default Card;
