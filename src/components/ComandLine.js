import React from 'react';

const CommandLine = ({ text }) => {
  return (
    <div className="cmd-line">
      <span className="cmd-prefix">:</span>
      <span>{text}</span>
      <span className="vim-cursor" />
    </div>
  );
};

export default CommandLine;