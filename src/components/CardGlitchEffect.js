export const useGlitchEffect = (cardRef) => {
  const startGlitchLoop = () => {
    const card = cardRef.current;
    if (!card) return;

    const createGlitch = () => {
      if (!card) return;
      
      // Vary the ASCII cell size slightly
      const cellSize = 1 + Math.random() * 0.5;
      card.style.setProperty('--cell-size', `${cellSize}`);

      requestAnimationFrame(() => {
        setTimeout(createGlitch, 2000 + Math.random() * 1000);
      });
    };

    createGlitch();
  };

  return { startGlitchLoop };
}; 