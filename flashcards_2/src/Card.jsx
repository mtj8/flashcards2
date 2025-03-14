import { useState, useEffect } from 'react';
import './Card.css'

const Card = ({ card }) => {
    const [flipped, setFlipped] = useState(false);
    const [wasFlipped, setWasFlipped] = useState(false);
    
    const [correct, setCorrect] = useState('');
    const [answerStreak, setAnswerStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    useEffect(() => {
        setFlipped(false);
        setWasFlipped(false);
        setCorrect('');
    }, [card]);

    const handleFlip = () => {
        setFlipped(!flipped);
        if (!wasFlipped) {
            setWasFlipped(true);
        }
    }

    const onCheckAnswer = () => {
        if (wasFlipped) {
            return;
        }
        let answer = document.querySelector('.answer-input').value;
        if (answer.toLowerCase() === card.song.toLowerCase()) {
            setCorrect('correct');
            setAnswerStreak(answerStreak + 1);
            if (answerStreak >= longestStreak) {
                setLongestStreak(answerStreak + 1);
            }
        } else {
            setCorrect('incorrect');
            setAnswerStreak(0);
        }
    }

    return (
        <div>
            <div className={`card ${flipped ? 'flipped' : ''} ${card.difficulty}`} onClick={handleFlip}>
                <div className="card-front">
                    <p>{card.question}</p>
                </div>
                <div className="card-back">
                    <p>{card.answer}</p>
                    <p>{card.artist} - {card.song}</p>
                </div>
            </div>
            <div className="answer-container">
                <input
                    type="text"
                    placeholder="Type your answer here"
                    className="answer-input"
                />
                <button className={`button submit ${correct}`} onClick={onCheckAnswer}>Submit Answer</button>
            </div>
            <div className='streak-container'>
                <p>Current Streak: {answerStreak} | Longest Streak: {longestStreak}</p>
            </div>
        </div>
    )
}



export default Card