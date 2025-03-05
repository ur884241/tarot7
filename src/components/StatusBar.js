import React from 'react';

const StatusBar = ({ mode, totalCards, maxCards }) => {
  return (
    <div className="status-line">
      <span>Mode: <span className="status-mode">{mode}</span></span>
      <span>Cards Drawn: {totalCards}/{maxCards}</span>
    </div>
  );
};

export default StatusBar;