import React from 'react';

const ControlPanel = ({ onDrawCards, onFinalizeRow }) => {
  const handleDraw = (count) => {
    onDrawCards(count);
  };

  return (
    <div className="control-panel">
      <div className="input-line">
        <span className="input-label">Hazard:</span>
        <button className="button" onClick={() => handleDraw(1)}>1 Card</button>
        <button className="button" onClick={() => handleDraw(3)}>3 Cards</button>
        <button className="button" onClick={() => handleDraw(5)}>5 Cards</button>
      </div>
      <div className="input-line">
        <button className="button" onClick={onFinalizeRow}>
          Finalize Row
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;