const CardPreview = ({ card, isReversed, className = '' }) => {
  if (!card) return null;

  const cardNumber = card.id.toString().padStart(2, '0');
  const imagePath = `/cards/${cardNumber}.jpg`;

  // Get the appropriate description based on card orientation
  const description = isReversed ? card.reversed : card.upright;
  
  return (
    <div className={`card-preview ${isReversed ? 'reversed' : ''} ${className}`}>
      <div className="card-preview-image">
        <img 
          src={imagePath}
          alt={card.name}
          // No transform style here - should display normally
        />
      </div>
      <div className="card-preview-description">
        <div className={`card-preview-orientation ${isReversed ? 'rotated' : ''}`}>
          {isReversed ? 'Reversed' : 'Upright'}
        </div>
        <div className="card-preview-text">{description}</div>
      </div>
    </div>
  );
};

export default CardPreview;
