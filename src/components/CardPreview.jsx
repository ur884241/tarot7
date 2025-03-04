const CardPreview = ({ card, isReversed, position }) => {
  if (!card) return null;

  const cardNumber = card.id.toString().padStart(2, '0');
  const imagePath = `/cards/${cardNumber}.jpg`;

  return (
    <div 
      className="card-preview" 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isReversed ? 'rotate(180deg)' : 'none'
      }}
    >
      <img 
        src={imagePath}
        alt={card.name}
      />
    </div>
  );
};

export default CardPreview;
