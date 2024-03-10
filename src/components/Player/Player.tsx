import "./Player.css";
import Card from "../Card/Card";
import { calculateHandValue } from "../../utils/HandValue";

interface PlayerProps {
  name: string;
  fund: number;
}

function Player({ name, fund }: PlayerProps) {
  const cards = [
    { value: "10", suit: "Hearts" },
    { value: "Ace", suit: "Spades" },
    { value: "Ace", suit: "Spades" },
    { value: "Ace", suit: "Spades" },
    { value: "Ace", suit: "Spades" },
  ];

  const totalHandValue = calculateHandValue(cards);

  return (
    <div className="player">
      <div className="player-name">{name}</div>
      <div className="player-fund">${fund}</div>
      <div className="player-hand">
        {cards.map((card, index) => (
          <Card key={index} value={card.value} suit={card.suit}></Card>
        ))}
      </div>
      <div className="hand-value">Hand Value: {totalHandValue}</div>
    </div>
  );
}

export default Player;
