import { useState, useEffect } from 'react';

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
  { src: awr, matched: false },
  { src: diva, matched: false },
  { src: dracUwU, matched: false },
  { src: korn, matched: false },
  { src: rawr, matched: false },
  { src: UwU, matched: false },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const[choiceOne, setChoiceOne]= useState (null);
  const[choiceTwo, setChoiceTwo]= useState (null);
  const [comparing, setComparing] = useState(false);
  //shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImg, ...cardImg]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      
      setCards(shuffledCards);
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(0);
    }
      
    console.log(cards, turns);

    const handleChoice = (card) => {
      if(!comparing){
      console.log(card);
      if(choiceOne){
        setChoiceTwo(card);
      }else{
        setChoiceOne(card);
      }
    }
    }
     const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
    }
    useEffect(() => {
    if(choiceOne && choiceTwo){
      setComparing(true);
      
      if(choiceOne.src === choiceTwo.src){
       setCards(prevCards => { return prevCards.map(card => {
        if (card.src === choiceOne.src){
          return {...card, matched: true};
        } else {
          return card;
        };
       })
      })
       setComparing(false);
       resetTurn();
      }else{
        setTimeout(() => {
          setComparing(false);
          resetTurn();
        }, 1000);
        
        
      }
      
    }}, [choiceOne, choiceTwo]);
   useEffect(() => { 
    shuffleCards();
    }, []);


  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid">
        {cards.map(card =>(
          <SingleCard 
          key={card.id} card={card} 
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched}
         
          />
        )
        )
        }
      </div>
      <div className='turns'>Turns: {turns}</div>
    </div>
  );
}

export default App;
