import React, { useState } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CardContainer from './components/CardContainer';
import HistoryView from './components/HistoryView';
import CommandLine from './components/CommandLine';
import StatusBar from './components/StatusBar';
import majorArcana from './data/majorArcana';
import { drawCards, calculateTotalCards } from './utils/tarotUtils';

const App = () => {
  const [rows, setRows] = useState([]); // Stores all sorted rows
  const [currentRow, setCurrentRow] = useState([]); // Current row being sorted
  const [commandText, setCommandText] = useState('');
  const [mode, setMode] = useState('NORMAL');

  // Handle drawing new cards for a row
  const handleDrawCards = (count) => {
    try {
      const drawnCards = drawCards(majorArcana, count);
      setCurrentRow(drawnCards);
      setCommandText(`draw ${count}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // Finalize the current row and add it to the history
  const finalizeRow = () => {
    if (currentRow.length === 0) {
      alert('No cards drawn yet.');
      return;
    }

    const newRow = {
      id: rows.length + 1,
      timestamp: new Date(),
      cards: currentRow,
    };

    setRows([...rows, newRow]);
    setCurrentRow([]); // Clear the current row
    setCommandText('row finalized');
  };

  // Calculate total cards drawn across all rows
  const totalCards = calculateTotalCards(rows);

  return (
    <div className="container">
      <Header />
      
      <ControlPanel 
        onDrawCards={handleDrawCards} 
        onFinalizeRow={finalizeRow} 
      />
      
      {currentRow.length > 0 && (
        <CardContainer cards={currentRow} title="Current Row" />
      )}
      
      {rows.length > 0 && (
        <HistoryView history={rows} />
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