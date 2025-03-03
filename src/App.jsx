import React, { useState, useEffect } from 'react';
import './styles/main.css';

// Tarot card data
const tarotCards = [
  { id: 0, name: "The Fool", description: "New beginnings, spontaneity, faith" },
  { id: 1, name: "The Magician", description: "Manifestation, resourcefulness, power" },
  { id: 2, name: "High Priestess", description: "Intuition, unconscious, inner voice" },
  { id: 3, name: "The Empress", description: "Femininity, beauty, nature, abundance" },
  { id: 4, name: "The Emperor", description: "Authority, structure, control, leadership" },
  { id: 5, name: "Hierophant", description: "Tradition, conformity, morality, ethics" },
  { id: 6, name: "The Lovers", description: "Love, harmony, relationships, values alignment" },
  { id: 7, name: "The Chariot", description: "Control, willpower, success, determination" },
  { id: 8, name: "Strength", description: "Courage, patience, control, compassion" },
  { id: 9, name: "The Hermit", description: "Soul-searching, introspection, guidance" },
  { id: 10, name: "Wheel of Fortune", description: "Change, cycles, fate, turning point" },
  { id: 11, name: "Justice", description: "Fairness, truth, law, cause and effect" },
  { id: 12, name: "Hanged Man", description: "Surrender, letting go, new perspective" },
  { id: 13, name: "Death", description: "Endings, change, transformation, transition" },
  { id: 14, name: "Temperance", description: "Balance, moderation, patience, purpose" },
  { id: 15, name: "The Devil", description: "Shadow self, attachment, addiction, restriction" },
  { id: 16, name: "The Tower", description: "Sudden change, revelation, disaster, upheaval" },
  { id: 17, name: "The Star", description: "Hope, faith, purpose, renewal, spirituality" },
  { id: 18, name: "The Moon", description: "Illusion, fear, anxiety, subconscious, intuition" },
  { id: 19, name: "The Sun", description: "Positivity, fun, warmth, success, vitality" },
  { id: 20, name: "Judgment", description: "Rebirth, inner calling, absolution" },
  { id: 21, name: "The World", description: "Completion, accomplishment, travel" }
];

// Card component with uniform ASCII art
const Card = ({ card, isReversed }) => {
  // Function to generate uniform ASCII art based on card ID
  const getCardArt = (id) => {
    const num = id.toString().padStart(2, '0');
    
    // Custom art for each card with consistent dimensions
    switch(id) {
      case 0: // The Fool
        return `┌──────────┐
│${num}        │
│    ☼     │
│   \\o/    │
│    |     │
│   / \\    │
│  ~~~~~   │
│        ${num}│
└──────────┘`;
      
      case 1: // The Magician
        return `┌──────────┐
│${num}        │
│    ∞     │
│   _|_    │
│  /   \\   │
│  \\___/   │
│   ♠♥♦♣   │
│        ${num}│
└──────────┘`;
      
      case 2: // High Priestess
        return `┌──────────┐
│${num}        │
│    ☽☽    │
│   ┌─┐    │
│   │B│    │
│   └─┘    │
│   ≈≈≈    │
│        ${num}│
└──────────┘`;
      
      case 3: // The Empress
        return `┌──────────┐
│${num}        │
│    ♀     │
│   \\|/    │
│  ⚘ | ⚘   │
│   /|\\    │
│   ♥♥♥    │
│        ${num}│
└──────────┘`;
      
      case 4: // The Emperor
        return `┌──────────┐
│${num}        │
│    ♂     │
│   ┌─┐    │
│   │♦│    │
│   └─┘    │
│   /|\\    │
│        ${num}│
└──────────┘`;
      
      case 5: // Hierophant
        return `┌──────────┐
│${num}        │
│    †     │
│   ┌┬┐    │
│   ││     │
│   ┴┴     │
│   ◎◎     │
│        ${num}│
└──────────┘`;
      
      case 6: // The Lovers
        return `┌──────────┐
│${num}        │
│    ♡     │
│  ○   ○   │
│   \\ /    │
│    V     │
│   / \\    │
│        ${num}│
└──────────┘`;
      
      case 7: // The Chariot
        return `┌──────────┐
│${num}        │
│   ☆☆☆    │
│  ┌───┐   │
│  │ ▲ │   │
│  └───┘   │
│  ◄►◄►    │
│        ${num}│
└──────────┘`;
      
      case 8: // Strength
        return `┌──────────┐
│${num}        │
│    ∞     │
│   ┌─┐    │
│   │8│    │
│   └─┘    │
│   ^ω^    │
│        ${num}│
└──────────┘`;
      
      case 9: // The Hermit
        return `┌──────────┐
│${num}        │
│    *     │
│    Λ     │
│   /|\\    │
│  / | \\   │
│    |     │
│        ${num}│
└──────────┘`;
      
      case 10: // Wheel of Fortune
        return `┌──────────┐
│${num}        │
│    ⊛     │
│   ╭─╮    │
│   │⊕│    │
│   ╰─╯    │
│   ⟳⟲     │
│        ${num}│
└──────────┘`;
      
      case 11: // Justice
        return `┌──────────┐
│${num}        │
│    ⚖     │
│   ┌─┐    │
│   │≡│    │
│   └─┘    │
│   ◇◇◇    │
│        ${num}│
└──────────┘`;
      
      case 12: // Hanged Man
        return `┌──────────┐
│${num}        │
│    ⊥     │
│    Λ     │
│   /|\\    │
│    |     │
│   / \\    │
│        ${num}│
└──────────┘`;
      
      case 13: // Death
        return `┌──────────┐
│${num}        │
│    ☠     │
│   ┌─┐    │
│   │†│    │
│   └─┘    │
│   ⟿⟿⟿    │
│        ${num}│
└──────────┘`;
      
      case 14: // Temperance
        return `┌──────────┐
│${num}        │
│    ⚱     │
│   ≈≈≈    │
│   \\│/    │
│    │     │
│   / \\    │
│        ${num}│
└──────────┘`;
      
      case 15: // The Devil
        return `┌──────────┐
│${num}        │
│    ⛧     │
│   ┌─┐    │
│   │⚶│    │
│   └─┘    │
│   ⧗⧗⧗    │
│        ${num}│
└──────────┘`;
      
      case 16: // The Tower
        return `┌──────────┐
│${num}        │
│    ⚡     │
│   ┌─┐    │
│   │▲│    │
│   └─┘    │
│   ≡≡≡    │
│        ${num}│
└──────────┘`;
      
      case 17: // The Star
        return `┌──────────┐
│${num}        │
│    ★     │
│  * * *   │
│   \\│/    │
│    │     │
│   / \\    │
│        ${num}│
└──────────┘`;
      
      case 18: // The Moon
        return `┌──────────┐
│${num}        │
│    ☽     │
│   ┌─┐    │
│   │◑│    │
│   └─┘    │
│   ≈≈≈    │
│        ${num}│
└──────────┘`;
      
      case 19: // The Sun
        return `┌──────────┐
│${num}        │
│    ☀     │
│   \\│/    │
│  - O -   │
│   /|\\    │
│   ♨♨♨    │
│        ${num}│
└──────────┘`;
      
      case 20: // Judgment
        return `┌──────────┐
│${num}        │
│    ♫     │
│   \\│/    │
│    │     │
│   ┌┴┐    │
│   ┴┬┴    │
│        ${num}│
└──────────┘`;
      
      case 21: // The World
        return `┌──────────┐
│${num}        │
│    ⊕     │
│   \\│/    │
│  - O -   │
│   /|\\    │
│   ◇◇◇    │
│        ${num}│
└──────────┘`;
      
      default:
        return `┌──────────┐
│${num}        │
│          │
│  ╭────╮  │
│  │    │  │
│  │    │  │
│  ╰────╯  │
│        ${num}│
└──────────┘`;
    }
  };

  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`}>
      <div className="card-title">{card.name}</div>
      <div className="card-art">
        {getCardArt(card.id)}
      </div>
      {isReversed && <div className="reversed-indicator">Rev</div>}
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
  const [metrics, setMetrics] = useState({
    totalReadings: 0,
    majorArcanaDrawn: 0,
    reversedPercentage: 0
  });
  const [occultMetrics, setOccultMetrics] = useState({
    lunarPhase: "Waxing",
    elementalBalance: "Air",
    numerologicalSum: 0
  });

  // Calculate occult metrics
  useEffect(() => {
    // Lunar phase calculation (simplified)
    const date = new Date();
    const dayOfMonth = date.getDate();
    const lunarPhases = ["New", "Waxing", "Full", "Waning"];
    const lunarPhase = lunarPhases[Math.floor((dayOfMonth % 28) / 7)];
    
    // Elemental balance based on current hour
    const hour = date.getHours();
    const elements = ["Fire", "Earth", "Air", "Water"];
    const element = elements[Math.floor(hour / 6) % 4];
    
    // Numerological sum based on date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateSum = Array.from(String(day + month + year)).reduce((sum, digit) => sum + parseInt(digit), 0);
    const numerologicalSum = dateSum > 9 ? Array.from(String(dateSum)).reduce((sum, digit) => sum + parseInt(digit), 0) : dateSum;
    
    setOccultMetrics({
      lunarPhase,
      elementalBalance: element,
      numerologicalSum
    });
  }, []);

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
    
    // Update metrics
    const reversedCount = selectedCards.filter(card => card.isReversed).length;
    setMetrics({
      totalReadings: metrics.totalReadings + 1,
      majorArcanaDrawn: metrics.majorArcanaDrawn + numCards,
      reversedPercentage: Math.round((metrics.reversedPercentage * metrics.totalReadings + (reversedCount / numCards * 100)) / (metrics.totalReadings + 1))
    });
  };

  // Handle command input
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (commandInput.toLowerCase() === 'draw') {
      drawCards();
    } else if (commandInput.toLowerCase().startsWith('cards ')) {
      const num = parseInt(commandInput.split(' ')[1]);
      if (!isNaN(num) && num > 0 && num <= 10) {
        setNumCards(num);
      }
    } else if (commandInput.toLowerCase() === 'help') {
      setShowCommandHelp(!showCommandHelp);
    } else if (commandInput.toLowerCase() === 'clear') {
      setHistory([]);
      setMetrics({
        totalReadings: 0,
        majorArcanaDrawn: 0,
        reversedPercentage: 0
      });
    }
    setCommandInput('');
  };

  return (
    <div className="container">
      <h1 className="title">Tarot de Marseille</h1>
      <p className="subtitle">digital divination</p>
      
      <div className="data-metrics">
        <div className="metric-box">
          <div className="metric-title">Readings</div>
          <div className="metric-value">{metrics.totalReadings}</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Cards Drawn</div>
          <div className="metric-value">{metrics.majorArcanaDrawn}</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Reversed %</div>
          <div className="metric-value">{metrics.reversedPercentage}%</div>
        </div>
      </div>
      
      <div className="occult-metrics">
        <div className="occult-box">
          <div className="occult-title">Lunar Phase</div>
          <div className="occult-value"><span className="occult-symbol">☽</span>{occultMetrics.lunarPhase}</div>
        </div>
        <div className="occult-box">
          <div className="occult-title">Element</div>
          <div className="occult-value"><span className="occult-symbol">⊕</span>{occultMetrics.elementalBalance}</div>
        </div>
        <div className="occult-box">
          <div className="occult-title">Numerology</div>
          <div className="occult-value"><span className="occult-symbol">∞</span>{occultMetrics.numerologicalSum}</div>
        </div>
      </div>
      
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
          <h2>Reading History</h2>
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
        <span className="cmd-prefix">❯</span>
        <input 
          type="text" 
          value={commandInput} 
          onChange={(e) => setCommandInput(e.target.value)} 
          placeholder="Type commands (e.g., draw, cards 5, help)" 
        />
        <span className="vim-cursor"></span>
      </form>
      
      <div className="status-line">
        <span className="status-mode">NORMAL</span>
        <span>Tarot de Marseille v1.0</span>
      </div>
      
      {showCommandHelp && (
        <div className="command-help">
          <h3>Commands</h3>
          <ul>
            <li><span className="cmd">draw</span> Draw new cards</li>
            <li><span className="cmd">cards n</span> Set number of cards</li>
            <li><span className="cmd">clear</span> Clear history</li>
            <li><span className="cmd">help</span> Toggle help</li>
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