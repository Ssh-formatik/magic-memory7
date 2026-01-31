import { useState } from 'react';

import './App.css';
const cardImg= [
  { "src": "public/img/UwU.jpg" },
  { "src": "public/img/awr.jpg"},
  { "src": "public/img/diva.jpg"},
  { "src": "public/img/dracUwU.jpg"},
  { "src": "public/img/korn.jpg"},
  { "src": "public/img/rawr.jpg"},
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImg, ...cardImg]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      
      setCards(shuffledCards);
      setTurns(0);
    }
      
    console.log(cards, turns);



  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid">
        {cards.map(card =>(
          <div key={card.id} className="card">
            <div>
              <img src={card.src} alt="card front" className="front-face"/>
              <img src="public/img/cover.jpg" alt="card back" className="back-face"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
