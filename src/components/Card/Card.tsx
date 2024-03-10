import "./Card.css";

// Types for the suit and value of a card
const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
type SuitType = (typeof suit)[number];
const isSuit = (x: any): x is SuitType => suit.includes(x);

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
type CardValueType = (typeof cardValue)[number];
const isCardValue = (x: any): x is CardValueType => cardValue.includes(x);

interface CardProps {
  suit: SuitType;
  value: CardValueType;
}

function Card({ suit, value }: CardProps) {
  return (
    <div className="card">
      <div className="card-value">
        {isCardValue(value) ? value : "Error value"}
      </div>
      <div className="card-suit">{isSuit(suit) ? suit : "Error suit"}</div>
    </div>
  );
}

export default Card;
