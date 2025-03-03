import React, { useState, useEffect } from 'react';
import './styles/main.css';

// Tarot card data
const tarotCards = [
  { id: 1, name: "The Fool", description: "New beginnings, spontaneity, faith" },
  { id: 2, name: "The Magician", description: "Manifestation, resourcefulness, power" },
  { id: 3, name: "The High Priestess", description: "Intuition, unconscious, inner voice" },
  { id: 4, name: "The Empress", description: "Femininity, beauty, nature, abundance" },
  { id: 5, name: "The Emperor", description: "Authority, structure, control, leadership" },
  { id: 6, name: "The Hierophant", description: "Tradition, conformity, morality, ethics" },
  { id: 7, name: "The Lovers", description: "Love, harmony, relationships, values alignment" },
  { id: 8, name: "The Chariot", description: "Control, willpower, success, determination" },
  { id: 9, name: "Strength", description: "Courage, patience, control, compassion" },
  { id: 10, name: "The Hermit", description: "Soul-searching, introspection, guidance" },
  { id: 11, name: "Wheel of Fortune", description: "Change, cycles, fate, turning point" },
  { id: 12, name: "Justice", description: "Fairness, truth, law, cause and effect" },
  { id: 13, name: "The Hanged Man", description: "Surrender, letting go, new perspective" },
  { id: 14, name: "Death", description: "Endings, change, transformation, transition" },
  { id: 15, name: "Temperance", description: "Balance, moderation, patience, purpose" },
  { id: 16, name: "The Devil", description: "Shadow self, attachment, addiction, restriction" },
  { id: 17, name: "The Tower", description: "Sudden change, revelation, disaster, upheaval" },
  { id: 18, name: "The Star", description: "Hope, faith, purpose, renewal, spirituality" },
  { id: 19, name: "The Moon", description: "Illusion, fear, anxiety, subconscious, intuition" },
  { id: 20, name: "The Sun", description: "Positivity, fun, warmth, success, vitality" },
  { id: 21, name: "Judgment", description: "Rebirth, inner calling, absolution" },
  { id: 22, name: "The World", description: "Completion, accomplishment, travel" }
];

// Card component with improved ASCII art
const Card = ({ card, isReversed }) => {
  // Function to generate better ASCII art based on card ID
  const getCardArt = (id) => {
    const num = id.toString().padStart(2, '0');
    return `┌────────────┐
│ ${num}         │
│            │
│  ╭──────╮  │
│  │      │  │
│  │      │  │
│  ╰──────╯  │
│            │
│         ${num} │
└────────────┘`;
  };

  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`}>
      <div className="card-title">{card.name}</div>
      <div className="card-art">
        {getCardArt(card.id)}
      </div>
      <div className="card-description">{card.description}</div>
      {isReversed && <div className="reversed-indicator">Reversed</div>}
    </div>
  );
};

// Main App component
const App = () => {
  const [reading, setReading] = useState([]);
  const [numCards, setNumCards] = useState(3);
  const [history, setHistory] = useState([]);
  const [commandInput, setCommandInput] = useState('');
  const [showCommandHelp, setShowCommandHelp] = useState(true);

  // Draw cards function
  const drawCards = () => {
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    const selectedCards = shuffled.slice(0, numCards).map(card => ({
      ...card,
      isReversed: Math.random() > 0.5
    }));
    
    setReading(selectedCards);
    
    // Add to history
    const newHistory = [{
      timestamp: new Date().toLocaleString(),
      cards: selectedCards
    }, ...history];
    
    setHistory(newHistory.slice(0, 5)); // Keep only last 5 readings
  };

  // Handle command input
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (commandInput.toLowerCase() === ':draw') {
      drawCards();
    } else if (commandInput.toLowerCase().startsWith(':cards ')) {
      const num = parseInt(commandInput.split(' ')[1]);
      if (!isNaN(num) && num > 0 && num <= 10) {
        setNumCards(num);
      }
    } else if (commandInput.toLowerCase() === ':help') {
      setShowCommandHelp(!showCommandHelp);
    }
    setCommandInput('');
  };

  return (
    <div className="container">
      <h1 className="title">Tarot de Marseille</h1>
      <p className="subtitle">A digital card reading experience</p>
      
      <div className="card-container">
        {reading.length > 0 ? (
          reading.map((card, index) => (
            <Card key={index} card={card} isReversed={card.isReversed} />
          ))
        ) : (
          <p>Use the controls below to draw cards</p>
        )}
      </div>
      
      <div className="control-panel">
        <div className="input-line">
          <span className="input-label">Number of cards:</span>
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={numCards} 
            onChange={(e) => setNumCards(parseInt(e.target.value))} 
          />
        </div>
        <button className="button" onClick={drawCards}>Draw Cards</button>
      </div>
      
      {history.length > 0 && (
        <div className="reading-history">
          <h2 className="title">Reading History</h2>
          {history.map((entry, index) => (
            <div key={index} className="history-entry">
              <div className="history-timestamp">{entry.timestamp}</div>
              <div className="history-cards">
                {entry.cards.map((card, cardIndex) => (
                  <span 
                    key={cardIndex} 
                    className={`history-card ${card.isReversed ? 'reversed' : ''}`}
                  >
                    {card.name} {card.isReversed ? '(R)' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <form className="cmd-line" onSubmit={handleCommandSubmit}>
        <span className="cmd-prefix">:</span>
        <input 
          type="text" 
          value={commandInput} 
          onChange={(e) => setCommandInput(e.target.value)} 
          placeholder="Type commands (e.g., :draw, :cards 5, :help)" 
        />
        <span className="vim-cursor"></span>
      </form>
      
      <div className="status-line">
        <span className="status-mode">NORMAL</span>
        <span>Tarot de Marseille v1.0</span>
      </div>
      
      {showCommandHelp && (
        <div className="command-help">
          <h3>Available Commands</h3>
          <ul>
            <li><span className="cmd">:draw</span> Draw new cards</li>
            <li><span className="cmd">:cards n</span> Set number of cards</li>
            <li><span className="cmd">:help</span> Toggle help</li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Add this at the top of your App.jsx file
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.toString()}</p>
        </div>
      )
    }
    return this.props.children
  }
}

// Then wrap your App export
const AppWithErrorBoundary = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

export default AppWithErrorBoundary 