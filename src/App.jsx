import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Card from './components/Card';

// Tarot card data with French names and descriptions
const tarotCards = [
  { 
    id: 0, 
    name: "Le Mat", 
    upright: "Freedom from norms. Uniqueness and spontaneity. Open-ended possibilities. Living in the moment. A journey. Message: Keep moving forward.", 
    reversed: "Indecision or lack of purpose. Restlessness. Social rejection. Difficulty planning."
  },
  { 
    id: 1, 
    name: "Le Bateleur", 
    upright: "The beginning of a new venture. Beginner's luck. Access to various tools and resources. Harnessing supernatural forces. Shaping reality through mental focus. Message: Craft a new reality.", 
    reversed: "Deception, trickery, or cheating. Showing off or pretending. Lack of self-awareness regarding body, sexuality, or core motivations."
  },
  { 
    id: 2, 
    name: "La Papesse", 
    upright: "Wisdom blending intellect and intuition. A spiritual guide or maternal figure. Modesty. Secrets, mysteries, or hidden knowledge. Message: Learn to set boundaries.", 
    reversed: "Concealing one's true self to conform to societal norms. Conservative views on sexuality and the body. Emotional barriers."
  },
  { 
    id: 3, 
    name: "L'Impératrice", 
    upright: "Abundance, growth, and productivity. Emotional intelligence. Nurturing and protection. Motherhood. A powerful feminine presence. Message: Trust your instincts.", 
    reversed: "Impulsive actions. Difficulty reasoning with someone. Overbearing protectiveness. Excessive interference in others' lives."
  },
  { 
    id: 4, 
    name: "L'Empereur", 
    upright: "Tangible achievements and material success. Authority and control. A leadership role. A protective father figure. Message: Embrace leadership and responsibility.", 
    reversed: "Aggression, violence, or solving problems through force. Dictatorial behavior. Potential for abuse. Denial of inner vulnerabilities."
  },
  { 
    id: 5, 
    name: "Le Pape", 
    upright: "A teacher, guide, or counselor. Education and knowledge. Expertise in academia, religion, medicine, or psychology. Message: Value knowledge and learning.", 
    reversed: "Over-reliance on outdated traditions. Bureaucracy. Oppressive systems. Hypocrisy or discrimination. Divorce."
  },
  { 
    id: 6, 
    name: "L'Amoureux", 
    upright: "Love and romantic relationships. Emotional connections. The need to make a choice. Aligning heart's desires with higher will. Message: Follow your heart.", 
    reversed: "Complicated relationships, such as love triangles or tensions between family and partner. Indecision, confusion about feelings or desires."
  },
  { 
    id: 7, 
    name: "Le Chariot", 
    upright: "Victory or achievement leading to a strong, secure position. Ambition, drive, and motivation. Public recognition. Message: Take bold steps to succeed.", 
    reversed: "Inner weakness masked by outward show. Arrogance or vanity. Overprotectiveness. Emotional detachment. Confusion about goals."
  },
  { 
    id: 8, 
    name: "La Force", 
    upright: "Courage and strength to face challenges. Channeling creative energy. Mobilizing inner resources. Taking calculated risks. Message: Master your inner power.", 
    reversed: "Constant tension from over-control. Risk of losing control. Inner conflict or misjudgment of abilities."
  },
  { 
    id: 9, 
    name: "L'Hermite", 
    upright: "A search for truth or spiritual insight. Focus on a clear purpose. Caution and careful analysis. Strong faith. Message: Seek the essence of things.", 
    reversed: "Isolation or loneliness. Rigid thinking. Excessive caution or suspicion. Focusing on flaws. Hidden or denied desires."
  },
  { 
    id: 10, 
    name: "La Roue de Fortune", 
    upright: "Change in circumstances. Rising after a fall. Taking risks or relying on luck. Life cycles and closure. Message: Embrace life's changes.", 
    reversed: "Decline after success. Danger at the peak. Feeling stuck or powerless."
  },
  { 
    id: 11, 
    name: "La Force", 
    upright: "Courage and strength to face challenges. Channeling creative energy. Mobilizing inner resources. Taking calculated risks. Message: Master your inner power.", 
    reversed: "Constant tension from over-control. Risk of losing control. Inner conflict or misjudgment of abilities."
  },
  { 
    id: 12, 
    name: "Le Pendu", 
    upright: "A unique perspective. Enduring hardship for a greater cause. Deep self-reflection. Acceptance of reality as it is. Message: See things differently.", 
    reversed: "Isolation or victim mentality. Inability to act. Denial of uniqueness. Living in a fantasy world."
  },
  { 
    id: 13, 
    name: "L'Arcane sans nom", 
    upright: "The end of something that has run its course. Letting go of the past. Simplifying and focusing on what's essential. Message: Release what no longer serves you.", 
    reversed: "Struggling with loss or change. Temporary challenges. Facing painful truths. Anxiety about death or mourning."
  },
  { 
    id: 14, 
    name: "Tempérance", 
    upright: "Reconciliation and balance. Integrating opposites. Achieving the seemingly impossible. Patience and self-growth. Message: Find balance and harmony.", 
    reversed: "Lack of progress. Impatience. Self-absorption, pushing others away."
  },
  { 
    id: 15, 
    name: "Le Diable", 
    upright: "Creative energy. Paradoxes and contradictions. Challenging norms. Acting on desires and impulses. Message: Embrace your passions.", 
    reversed: "Temptation or attraction to the forbidden. Exploitation or selfishness. Compulsive behavior. Difficulty breaking unhealthy bonds."
  },
  { 
    id: 16, 
    name: "La Maison Dieu", 
    upright: "Breaking free from constraints. Sudden breakthroughs. A return to simplicity. Message: Ground yourself in reality.", 
    reversed: "Shock or collapse. Chaos or confusion. Pride leading to downfall."
  },
  { 
    id: 17, 
    name: "L'Étoile", 
    upright: "Openness and simplicity. Honesty and self-acceptance. Generosity. Divine guidance or luck. Message: Flow with purity.", 
    reversed: "Naivety or wishful thinking. Vulnerability to harm. Difficulty setting boundaries. Wastefulness."
  },
  { 
    id: 18, 
    name: "La Lune", 
    upright: "Deep emotions, often tied to a maternal figure. A different reality. Discovering hidden strengths. Exploring the past. Message: Dive into your depths.", 
    reversed: "Confusion or depression. Hidden dangers. Feeling lost."
  },
  { 
    id: 19, 
    name: "Le Soleil", 
    upright: "Light, warmth, and abundance. Healing and joy. Partnership and trust. A positive father figure. Message: Seek balanced partnerships.", 
    reversed: "Limited perspective. Difficulty facing reality. Immaturity or dependence. Overwhelming energy."
  },
  { 
    id: 20, 
    name: "Le Jugement", 
    upright: "Revelation and new understanding. A turning point. Healing family ties. Disclosure or new beginnings. Message: Awaken to spiritual truths.", 
    reversed: "Unwanted revelations. Lack of privacy. Family conflicts. Excessive drama."
  },
  { 
    id: 21, 
    name: "Le Monde", 
    upright: "Completion and harmony. Achievements across domains. Connection to distant places. New beginnings. Message: Everything is as it should be.", 
    reversed: "Isolation or disconnection. Self-absorption. Inability to progress."
  }
];

// Main App component
const App = () => {
  const [reading, setReading] = useState([]);
  const [numCards, setNumCards] = useState(3);
  const [history, setHistory] = useState([]);
  const [commandInput, setCommandInput] = useState('');
  const [showCommandHelp, setShowCommandHelp] = useState(true);
  const [spreadType, setSpreadType] = useState('default');
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
  const [statusMessage, setStatusMessage] = useState('');
  const [showSavedReadings, setShowSavedReadings] = useState(false);

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
    
    // Generate a unique ID for this reading
    const readingId = Date.now();
    
    // Add to history with ID
    const newHistory = [{
      id: readingId,
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
    
    // Show the ID in a status message
    setStatusMessage(`Reading generated with ID: ${readingId}`);
  };

  // Handle command input in a more NeoVim-like way
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    
    // Trim the input and ensure it starts with ":"
    const cmd = commandInput.trim();
    if (!cmd.startsWith(':')) {
      // If no ":" prefix, just clear the input and return
      setCommandInput('');
      return;
    }
    
    // Remove the ":" prefix for processing
    const cleanCmd = cmd.substring(1).trim();
    
    // Handle various commands
    if (cleanCmd === 'draw') {
      drawCards();
    } 
    else if (cleanCmd.match(/^set\s+cards\s+\d+$/)) {
      // :set cards 5
      const num = parseInt(cleanCmd.split(/\s+/)[2]);
      if (!isNaN(num) && num > 0 && num <= 10) {
        setNumCards(num);
      }
    }
    else if (cleanCmd === 'help') {
      setShowCommandHelp(!showCommandHelp);
    } 
    else if (cleanCmd === 'clear') {
      setHistory([]);
      setMetrics({
        totalReadings: 0,
        majorArcanaDrawn: 0,
        reversedPercentage: 0
      });
      setStatusMessage('History cleared');
    } 
    else if (cleanCmd === 'clear all') {
      setHistory([]);
      localStorage.removeItem('tarotSavedReadings');
      setMetrics({
        totalReadings: 0,
        majorArcanaDrawn: 0,
        reversedPercentage: 0
      });
      setStatusMessage('All history and saved readings cleared');
      setShowSavedReadings(false);
    }
    else if (cleanCmd === 'spread celtic') {
      // Set spread type to Celtic Cross
      setSpreadType('celtic cross');
      // Ensure we have 10 cards for Celtic Cross
      if (reading.length !== 10) {
        setNumCards(10);
        // Draw new cards if needed
        if (reading.length === 0) {
          drawCards();
        }
      }
    } 
    else if (cleanCmd === 'spread default') {
      // Reset to default spread
      setSpreadType('default');
    }
    else if (cleanCmd === 'save') {
      if (reading.length > 0) {
        const readingId = saveReading(reading);
        setStatusMessage(`Reading saved with ID: ${readingId}`);
      } else {
        setStatusMessage('No cards to save');
      }
    }
    else if (cleanCmd.startsWith('save ')) {
      if (reading.length > 0) {
        const name = cleanCmd.substring(5).trim();
        const readingId = saveReading(reading, name);
        setStatusMessage(`Reading "${name}" saved with ID: ${readingId}`);
      } else {
        setStatusMessage('No cards to save');
      }
    }
    else if (cleanCmd.startsWith('load ')) {
      const loadParam = cleanCmd.substring(5).trim();
      
      // Check if the parameter is a number (ID) or a name
      if (/^\d+$/.test(loadParam)) {
        // It's a number, load by ID
        loadSavedReading(loadParam);
      } else {
        // It's a name, load by name
        loadSavedReadingByName(loadParam);
      }
    }
    else if (cleanCmd === 'list') {
      setShowSavedReadings(!showSavedReadings);
    }
    else if (cleanCmd.startsWith('save history ')) {
      const params = cleanCmd.substring(13).trim().split(' ');
      const historyId = parseInt(params[0]);
      const name = params.slice(1).join(' ');
      
      if (!isNaN(historyId)) {
        saveHistoryReading(historyId, name || null);
      } else {
        setStatusMessage('Please provide a valid history ID');
      }
    }
    
    setCommandInput('');
  };

  // Render Celtic Cross spread
  const renderCelticCross = () => {
    if (reading.length < 10) {
      return <p>Celtic Cross requires 10 cards. Use the draw command.</p>;
    }

    return (
      <div className="celtic-cross-container">
        <div className="celtic-cross-center">
          <div className="celtic-cross-position position-1">
            <Card card={reading[0]} isReversed={reading[0].isReversed} />
            <div className="position-label">Present</div>
          </div>
          <div className="celtic-cross-position position-2">
            <Card card={reading[1]} isReversed={reading[1].isReversed} />
            <div className="position-label">Challenge</div>
          </div>
        </div>
        <div className="celtic-cross-row">
          <div className="celtic-cross-position">
            <Card card={reading[2]} isReversed={reading[2].isReversed} />
            <div className="position-label">Foundation</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[3]} isReversed={reading[3].isReversed} />
            <div className="position-label">Past</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[4]} isReversed={reading[4].isReversed} />
            <div className="position-label">Goal</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[5]} isReversed={reading[5].isReversed} />
            <div className="position-label">Future</div>
          </div>
        </div>
        <div className="celtic-cross-staff">
          <div className="celtic-cross-position">
            <Card card={reading[6]} isReversed={reading[6].isReversed} />
            <div className="position-label">Self</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[7]} isReversed={reading[7].isReversed} />
            <div className="position-label">Environment</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[8]} isReversed={reading[8].isReversed} />
            <div className="position-label">Hopes/Fears</div>
          </div>
          <div className="celtic-cross-position">
            <Card card={reading[9]} isReversed={reading[9].isReversed} />
            <div className="position-label">Outcome</div>
          </div>
        </div>
      </div>
    );
  };

  const saveReading = (reading, name = null) => {
    // Get existing saved readings or initialize empty array
    const savedReadings = JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]');
    
    // Create a new reading object with metadata
    const newSavedReading = {
      id: Date.now(), // Unique ID based on timestamp
      name: name || `Reading ${savedReadings.length + 1}`,
      date: new Date().toISOString(),
      cards: reading.map(card => ({
        id: card.id,
        name: card.name,
        isReversed: card.isReversed
      })),
      spreadType: spreadType
    };
    
    // Add to saved readings
    savedReadings.push(newSavedReading);
    
    // Save back to localStorage
    localStorage.setItem('tarotSavedReadings', JSON.stringify(savedReadings));
    
    return newSavedReading.id; // Return the ID for reference
  };

  const loadSavedReading = (id) => {
    const savedReadings = JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]');
    const savedReading = savedReadings.find(reading => reading.id === parseInt(id));
    
    if (savedReading) {
      // Reconstruct full card objects from saved data
      const loadedCards = savedReading.cards.map(savedCard => {
        const fullCard = tarotCards.find(card => card.id === savedCard.id);
        return {
          ...fullCard,
          isReversed: savedCard.isReversed
        };
      });
      
      // Set the current reading to the loaded one
      setReading(loadedCards);
      setSpreadType(savedReading.spreadType);
      setNumCards(loadedCards.length);
      setStatusMessage(`Loaded reading: ${savedReading.name}`);
    } else {
      setStatusMessage(`No saved reading found with ID: ${id}`);
    }
  };

  // Add this function to load a reading by name
  const loadSavedReadingByName = (name) => {
    const savedReadings = JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]');
    // Find the reading with the matching name (case insensitive)
    const savedReading = savedReadings.find(reading => 
      reading.name.toLowerCase() === name.toLowerCase()
    );
    
    if (savedReading) {
      // Reconstruct full card objects from saved data
      const loadedCards = savedReading.cards.map(savedCard => {
        const fullCard = tarotCards.find(card => card.id === savedCard.id);
        return {
          ...fullCard,
          isReversed: savedCard.isReversed
        };
      });
      
      // Set the current reading to the loaded one
      setReading(loadedCards);
      setSpreadType(savedReading.spreadType);
      setNumCards(loadedCards.length);
      setStatusMessage(`Loaded reading: ${savedReading.name}`);
    } else {
      setStatusMessage(`No saved reading found with name: ${name}`);
    }
  };

  // Add a function to save a reading from history
  const saveHistoryReading = (historyId, name = null) => {
    const historyEntry = history.find(entry => entry.id === historyId);
    
    if (historyEntry) {
      // Get existing saved readings
      const savedReadings = JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]');
      
      // Create a new saved reading from history
      const newSavedReading = {
        id: Date.now(), // New unique ID for the saved reading
        name: name || `History Reading ${savedReadings.length + 1}`,
        date: new Date().toISOString(),
        originalDate: historyEntry.timestamp,
        cards: historyEntry.cards.map(card => ({
          id: card.id,
          name: card.name,
          isReversed: card.isReversed
        })),
        spreadType: 'default' // History readings are always default spread
      };
      
      // Add to saved readings
      savedReadings.push(newSavedReading);
      
      // Save back to localStorage
      localStorage.setItem('tarotSavedReadings', JSON.stringify(savedReadings));
      
      setStatusMessage(`History reading saved as "${newSavedReading.name}"`);
      return newSavedReading.id;
    } else {
      setStatusMessage(`No history reading found with ID: ${historyId}`);
      return null;
    }
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
          spreadType === 'celtic cross' ? (
            renderCelticCross()
          ) : (
            reading.map((card, index) => (
              <Card key={index} card={card} isReversed={card.isReversed} />
            ))
          )
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
              <div className="history-header">
                <div className="history-timestamp">{entry.timestamp}</div>
                <div className="history-id">ID: {entry.id}</div>
              </div>
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
              <button 
                className="history-save-btn"
                onClick={() => saveHistoryReading(entry.id)}
              >
                Save
              </button>
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
          placeholder="Type :help for commands" 
        />
        <span className="vim-cursor"></span>
      </form>
      
      <div className="status-line">
        <span className="status-mode">NORMAL</span>
        <span>Tarot de Marseille v1.0</span>
      </div>
      
      {showCommandHelp && (
        <div className="command-help">
          <div className="command-help-header">
            <h3>Tarot Commands</h3>
            <button 
              className="command-help-close" 
              onClick={() => setShowCommandHelp(false)}
            >
              ×
            </button>
          </div>
          <ul>
            <li><span className="cmd">:draw</span> Draw new cards</li>
            <li><span className="cmd">:set cards n</span> Set number of cards</li>
            <li><span className="cmd">:clear</span> Clear history</li>
            <li><span className="cmd">:clear all</span> Clear all data</li>
            <li><span className="cmd">:help</span> Toggle help</li>
            <li><span className="cmd">:spread celtic</span> Celtic Cross</li>
            <li><span className="cmd">:spread default</span> Default layout</li>
            <li><span className="cmd">:save</span> Save reading</li>
            <li><span className="cmd">:save name</span> Save with name</li>
            <li><span className="cmd">:save history id</span> Save from history</li>
            <li><span className="cmd">:load id</span> Load by ID</li>
            <li><span className="cmd">:load name</span> Load by name</li>
            <li><span className="cmd">:list</span> List saved</li>
          </ul>
        </div>
      )}
      
      {statusMessage && (
        <div className="status-message">
          {statusMessage}
          <button className="close-btn" onClick={() => setStatusMessage('')}>×</button>
        </div>
      )}
      
      {showSavedReadings && (
        <div className="saved-readings">
          <div className="saved-readings-header">
            <h3>Saved Readings</h3>
            <button className="close-btn" onClick={() => setShowSavedReadings(false)}>×</button>
          </div>
          <div className="saved-readings-list">
            {JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]').length > 0 ? (
              JSON.parse(localStorage.getItem('tarotSavedReadings') || '[]').map(reading => (
                <div key={reading.id} className="saved-reading-item">
                  <div className="saved-reading-info">
                    <div className="saved-reading-name">{reading.name}</div>
                    <div className="saved-reading-date">{new Date(reading.date).toLocaleString()}</div>
                    <div className="saved-reading-cards">
                      {reading.cards.length} cards • {reading.spreadType}
                    </div>
                  </div>
                  <div className="saved-reading-actions">
                    <button 
                      onClick={() => loadSavedReading(reading.id)}
                      className="load-btn"
                    >
                      Load
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No saved readings found</p>
            )}
          </div>
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