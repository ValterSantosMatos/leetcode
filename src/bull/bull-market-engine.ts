/**
 * Starts a market engine with that produces a new price based on the previous one at a given interval
 */
export const startMarketDataEngine = (
  prices: Array<{ market: string; price: number }>,
  market: string,
  startPrice: number,
  tickSize: number,
  interval: number
): { marketEngineRef: NodeJS.Timeout } => {
  // console.log("MarketDataEngine started");

  let latestPrice = startPrice;

  const marketEngineRef = setInterval(() => {
    // console.log(`MarketDataEngine price publish: ${latestPrice}`);
    latestPrice = latestPrice + tickSize;
    prices.push({ market, price: latestPrice });
  }, interval);

  return { marketEngineRef };
};

/**
 * Stops an existing market data engine via marketEngineRef
 */
export const stopMarketDataEngine = (marketEngineRef: NodeJS.Timeout) => {
  // console.log("MarketDataEngine stop");
  clearTimeout(marketEngineRef);
};
