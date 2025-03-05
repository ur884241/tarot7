import React, { useRef, useEffect, useState } from 'react';
import { useHolographicEffect } from './CardHolographicEffect';
import { useGlitchEffect } from './CardGlitchEffect';
import CardPreview from './CardPreview';
import './Card.css';

const Card = ({ card, isReversed }) => {
  const cardRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);
  const previewTimeoutRef = useRef(null);
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
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, startGlitchLoop]);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    
    // Set a very small delay before showing the preview
    previewTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 50); // Much faster - only 50ms delay
  };
  
  const handleMouseLeaveWithDelay = () => {
    // Clear any existing timeout
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    
    // Hide the preview
    setShowPreview(false);
  };

  const cardNumber = card.id.toString().padStart(2, '0');
  const imagePath = `/cards/${cardNumber}.jpg`;

  return (
    <>
      <div 
        className="card" 
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaveWithDelay}
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
        />
      )}
    </>
  );
};

export default Card; 