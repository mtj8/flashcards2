import { useState, useEffect } from 'react';
import './Card.css'

const Card = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        setFlipped(false);
    }, [card]);

    const handleFlip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className={`card ${flipped ? 'flipped' : ''} ${card.difficulty}`} onClick={handleFlip}>
            <div className="card-front">
                <p>{card.question}</p>
            </div>
            <div className="card-back">
                <p>{card.answer}</p>
                <p>{card.song}</p>
            </div>
        </div>
    )
}



export default Card