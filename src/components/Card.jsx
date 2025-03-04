import React, { useRef, useEffect, useState } from 'react';
import { useHolographicEffect } from './CardHolographicEffect';
import { useGlitchEffect } from './CardGlitchEffect';
import CardPreview from './CardPreview';
import './Card.css';

const Card = ({ card, isReversed }) => {
  const cardRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const { handleMouseMove, handleMouseLeave } = useHolographicEffect(cardRef);
  const { startGlitchLoop } = useGlitchEffect(cardRef);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    startGlitchLoop();

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, startGlitchLoop]);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Position the preview to the right of the card
    let x = rect.right + scrollLeft + 20; // 20px gap
    let y = rect.top + scrollTop - 100; // Centered vertically

    // If preview would go off-screen to the right, show it on the left instead
    if (x + 280 > window.innerWidth) {
      x = rect.left + scrollLeft - 300; // 300px = preview width + gap
    }

    setPreviewPosition({ x, y });
    setShowPreview(true);
  };

  const cardNumber = card.id.toString().padStart(2, '0');
  const imagePath = `/cards/${cardNumber}.jpg`;

  return (
    <>
      <div 
        className="card" 
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowPreview(false)}
      >
        <div className="card-title">{card.name}</div>
        <div className="card-image">
          <img 
            src={imagePath}
            alt={card.name}
            style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}
            onError={(e) => {
              console.error(`Failed to load image for ${card.name}`);
              console.error(`ID: ${card.id}`);
              console.error(`Attempted path: ${imagePath}`);
            }}
          />
        </div>
        {isReversed && <div className="reversed-indicator">Rev</div>}
      </div>
      {showPreview && (
        <CardPreview 
          card={card} 
          isReversed={isReversed} 
          position={previewPosition}
        />
      )}
    </>
  );
};

export default Card; 