import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Card from './components/Card';

// Tarot card data with French names
const tarotCards = [
  { id: 0, name: "Le Mat", description: "New beginnings" },
  { id: 1, name: "Le Bateleur", description: "Manifestation" },
  { id: 2, name: "La Papesse", description: "Intuition" },
  { id: 3, name: "L'Impératrice", description: "Abundance" },
  { id: 4, name: "L'Empereur", description: "Authority" },
  { id: 5, name: "Le Pape", description: "Tradition" },
  { id: 6, name: "L'Amoureux", description: "Love" },
  { id: 7, name: "Le Chariot", description: "Control" },
  { id: 8, name: "La Force", description: "Courage" },
  { id: 9, name: "L'Hermite", description: "Wisdom" },
  { id: 10, name: "La Roue", description: "Change" },
  { id: 11, name: "La Justice", description: "Balance" },
  { id: 12, name: "Le Pendu", description: "Sacrifice" },
  { id: 13, name: "La Mort", description: "Transformation" },
  { id: 14, name: "Tempérance", description: "Moderation" },
  { id: 15, name: "Le Diable", description: "Bondage" },
  { id: 16, name: "La Maison Dieu", description: "Destruction" },
  { id: 17, name: "L'Étoile", description: "Hope" },
  { id: 18, name: "La Lune", description: "Illusion" },
  { id: 19, name: "Le Soleil", description: "Joy" },
  { id: 20, name: "Le Jugement", description: "Awakening" },
  { id: 21, name: "Le Monde", description: "Completion" }
];

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