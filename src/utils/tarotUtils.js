/**
 * Utility functions for the tarot application
 */

/**
 * Draw a specified number of unique cards from the deck
 * @param {Array} deck - The deck of cards to draw from
 * @param {Number} count - The number of cards to draw
 * @returns {Array} Array of drawn cards with orientation
 */
export function drawCards(deck, count) {
    if (count < 1 || count > 5) {
      throw new Error("Please select between 1 and 5 cards.");
    }
    
    // Create a copy of the deck and shuffle it
    const shuffled = [...deck].sort(() => 0.5 - Math.random());
    
    // Select cards and determine if they're reversed
    return shuffled.slice(0, count).map(card => {
      return {
        ...card,
        isReversed: Math.random() > 0.5
      };
    });
  }
  
  /**
   * Format a date for display in the history
   * @param {Date} date - The date to format
   * @returns {String} Formatted date string
   */
  export function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  }
  
  /**
   * Calculate total cards drawn across all readings
   * @param {Array} history - The reading history
   * @returns {Number} Total number of cards
   */
  export function calculateTotalCards(history) {
    return history.reduce((sum, entry) => sum + entry.cards.length, 0);
  }