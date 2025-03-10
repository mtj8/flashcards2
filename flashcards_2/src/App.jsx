import { useState } from 'react'
import './App.css'
import { questionList } from './data.js'
import Card from './Card.jsx'

function App() {
  const [card, setCard] = useState(0);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min) + 1)) + Math.ceil(min);
  }

  const nextCard = () => {
    let newCard = card;
    while (newCard === card) {
      newCard = getRandomInt(0, questionList.length - 1);
    }
    setCard(newCard);
    console.log(newCard);  
  }

  let currentCard = questionList[card];

  return (
    <div className="App">
        <div className="header">
            <h1>What's the line?</h1>
            <p>Sing the next line of the song!</p>
            <p>Current # of cards: {questionList.length}</p>
        </div>
        <button onClick={nextCard}>Next Card</button>
        <Card card={currentCard}/>
    </div>
  )
}

export default App
