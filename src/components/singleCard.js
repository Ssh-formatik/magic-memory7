import './singleCard.css';
import cover from '../img/cover.jpg'; 
export default function singleCard({ card , handleChoice, flipped }) {
    const handleClick = () => {
        
      handleChoice(card);
  }
  return (
    <div  className="card">
        <div className={flipped ? "flipped" : ""}>
            <div>
              <img src={card.src} alt="card front" className="front-face"/>
              <img src={cover} alt="card back" className="back-face" onClick={handleClick}/>
            </div>
          </div>
    </div>
    );
}
        