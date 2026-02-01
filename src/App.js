import { useState } from 'react';

import './App.css';
import SingleCard from './components/singleCard';
// At the TOP of App.js
import awr from './img/awr.jpg';
import diva from './img/diva.jpg';
import dracUwU from './img/dracUwU.jpg';
import korn from './img/korn.jpg';
import rawr from './img/rawr.jpg';
import UwU from './img/UwU.jpg';
 


// Then use the imports
const cardImg = [
  { src: awr },
  { src: diva },
  { src: dracUwU },
  { src: korn },
  { src: rawr },
  { src: UwU },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const[choiceOne, setChoiceOne]= useState (null);
  const[choiceTwo, setChoiceTwo]= useState (null);
  //shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImg, ...cardImg]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      
      setCards(shuffledCards);
      setTurns(0);
    }
      
    console.log(cards, turns);
    const handleChoice = (card) => {
      console.log(card);
      if(choiceOne){
        setChoiceTwo(card);
      }else{
        setChoiceOne(card);
      }
    }
    if(choiceOne && choiceTwo){
      console.log("choices", choiceOne, choiceTwo);
    }
    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
    }


  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        )
        )
        }
      </div>
    </div>
  );
}

export default App;
