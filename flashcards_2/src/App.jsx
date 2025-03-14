import { useState } from 'react'
import './App.css'
import { questionList } from './data.js'
import Card from './Card.jsx'

function App() {
  const [card, setCard] = useState(0);

  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) + Math.ceil(min);
  // }

  const prevCard = () => {
    setCard((card - 1 + questionList.length) % questionList.length);
  }
  const nextCard = () => {
    setCard((card + 1) % questionList.length); 
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (i === (card % questionList.length)) {
            continue;
        }
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let currentCard = questionList[card];

  return (
    <div className="App">
        <div className="header">
            <h1>What's the song?</h1>
            <p>Name that song! (Imaginary bonus points if you sing it.)</p>
            <p>Current # of cards: {questionList.length}</p>
        </div>
        <button onClick={prevCard}>Previous Card</button>
        <button onClick={nextCard}>Next Card</button>
        <button onClick={() => shuffleArray(questionList)}>Shuffle Cards</button>
        <Card card={currentCard}/>
    </div>
  )
}

export default App
