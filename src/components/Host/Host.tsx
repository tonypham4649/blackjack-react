import "./Host.css";
import Card from "../Card/Card";
import { calculateHandValue } from "../../utils/HandValue";

interface HostProps {
  hand: typeof Card;
}

function Host() {
  const cards = [
    { value: "10", suit: "Hearts" },
    { value: "Ace", suit: "Spades" },
  ];

  const totalHandValue = calculateHandValue(cards);

  return (
    <div className="host">
      <div className="host-hand">
        {cards.map((card, index) => (
          <Card key={index} value={card.value} suit={card.suit}></Card>
        ))}
      </div>
      <div className="hand-value">Hand Value: {totalHandValue}</div>
    </div>
  );
}

export default Host;
