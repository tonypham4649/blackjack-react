import "./GameBoard.css";
import Host from "../Host/Host";
import Player from "../Player/Player";

interface GameBoardProps {
  children?: React.ReactNode;
}

function GameBoard({ children }: GameBoardProps) {
  return (
    <div className="game-board">
      <h2>Host</h2>
      <Host />

      <h2>Player</h2>
      <Player name="John" fund={100.0} />
    </div>
  );
}

export default GameBoard;
