import React from 'react';

const CardContainer = ({ cards, title }) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isReversed ? 'reversed' : ''}`}
          >
            <div className="card-title">{card.name}</div>
            <div className="card-art">{card.ascii}</div>
            {card.isReversed && (
              <div className="reversed-indicator">Reversed</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;