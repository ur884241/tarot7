import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CardContainer from './components/CardContainer';
import HistoryView from './components/HistoryView';
import CommandLine from './components/CommandLine';
import StatusBar from './components/StatusBar';
import majorArcana from './data/majorArcana';
import { drawCards, calculateTotalCards } from './utils/tarotUtils';

const App = () => {
  // State management
  const [currentReading, setCurrentReading] = useState([]);
  const [readingHistory, setReadingHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [commandText, setCommandText] = useState('');
  const [mode, setMode] = useState('NORMAL');

  // Handle drawing new cards
  const handleDrawCards = (count) => {
    try {
      const drawnCards = drawCards(majorArcana, count);
      setCurrentReading(drawnCards);
      
      // Add to history
      const historyEntry = {
        id: readingHistory.length + 1,
        timestamp: new Date(),
        cards: drawnCards
      };
      
      setReadingHistory([...readingHistory, historyEntry]);
      setCommandText(`draw ${count}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // Toggle history view
  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setCommandText(showHistory ? 'normal' : 'history');
  };

  // Calculate total cards drawn
  const totalCards = calculateTotalCards(readingHistory);
  
  return (
    <div className="container">
      <Header />
      
      <ControlPanel 
        onDrawCards={handleDrawCards} 
        onToggleHistory={toggleHistory} 
      />
      
      {currentReading.length > 0 ? (
        <CardContainer cards={currentReading} title="Current Reading" />
      ) : (
        <p>No cards drawn yet.</p>
      )}
      
      {showHistory && (
        <HistoryView history={readingHistory} />
      )}
      
      <CommandLine text={commandText} />
      
      <StatusBar 
        mode={mode} 
        totalCards={totalCards} 
        maxCards={majorArcana.length} 
      />
    </div>
  );
};

export default App;