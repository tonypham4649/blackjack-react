function getCardNumericValue(cardValue: string): number {
  switch (cardValue) {
    case "Ace":
      return 11; // Initially treating Ace as 11

    case "King":
    case "Queen":
    case "Jack":
      return 10;

    default:
      return parseInt(cardValue); // For numeric cards
  }
}

export function calculateHandValue(
  cards: { value: string; suit: string }[]
): number {
  let totalValue = 0;
  let aceCount = 0; // Keep track of Aces, which can be 1 or 11

  cards.forEach((card) => {
    const cardValue = getCardNumericValue(card.value);
    totalValue += cardValue;
    if (card.value === "Ace") {
      aceCount += 1;
    }
  });

  // Adjust for Aces if total value exceeds 21
  while (totalValue > 21 && aceCount > 0) {
    totalValue -= 10; // Convert an Ace from 11 to 1
    aceCount -= 1;
  }

  return totalValue;
}
