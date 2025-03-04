export const useHolographicEffect = (cardRef) => {
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate position percentages
    const xPercent = Math.floor((x / width) * 100);
    const yPercent = Math.floor((y / height) * 100);
    
    // Update CSS variables for the holographic effect
    card.style.setProperty('--x-position', `${xPercent}%`);
    card.style.setProperty('--y-position', `${yPercent}%`);
    
    // Calculate rotation based on mouse position
    const rotateX = (y / height - 0.5) * 10;
    const rotateY = (x / width - 0.5) * 10;
    
    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return { handleMouseMove, handleMouseLeave };
}; 