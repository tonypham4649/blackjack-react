import Card from '../Card/Card';
import './GameBoard.css'


interface GameBoardProps {
    children?: React.ReactNode
}

function GameBoard({children}: GameBoardProps) {
    const cards = [
        {value: '10', suit: 'Hearts'},
        {value: 'Jack', suit: 'Spades'},
    ]

    return (
        <div className='game-board'>
            <h2>Blackjack Game</h2>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} value={card.value} suit={card.suit}></Card>
                ))}
            </div>
        </div>
    )
}

export default GameBoard;