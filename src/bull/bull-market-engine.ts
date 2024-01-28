/**
 * Generates a market engine that produces a certain number of prices in a given interval. Uses priceGenerator logic to create a new prices,
 */
export const generateMarketDataEngine = (
  prices: Array<{ market: string; price: number }>,
  market: {
    marketId: string;
    numberOfTicks: number;
    startPrice: number;
  }
) => {
  const { marketId, numberOfTicks, startPrice } = market;

  // Add the first price and start the count
  prices.push({ market: marketId, price: startPrice });
  let pricesCount = 1;
  let lastPrice = startPrice;

  const marketEngineRef = setInterval(() => {
    // Checks the number of ticks condition to stop the generator
    if (pricesCount === numberOfTicks) {
      clearInterval(marketEngineRef);
      return;
    }

    // Add the next prices based on the generator function
    lastPrice = priceGenerator(lastPrice, pricesCount, startPrice);
    prices.push({ market: marketId, price: lastPrice });
    pricesCount = pricesCount + 1;
  }, 10); // random small number for this exercise

  return { marketEngineRef };
};

/**
 * Randomly generates a price. If odd, add to the price if even subtract from the price. Although not specified I made the random between 1% of the starting price so there is a bigger diff.
 */
export const priceGenerator = (
  lastPrice: number,
  index: number,
  startPrice: number
): number => {
  const isOdd = index % 2 === 1;
  const random = (Math.random() * startPrice) / 100; // number between 0 and 1% of the starting price

  const newPrice = isOdd ? lastPrice + random : lastPrice - random;
  return newPrice;
};
