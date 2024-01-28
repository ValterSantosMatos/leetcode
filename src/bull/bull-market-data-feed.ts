/**
 * Return value for the market data feed tracker
 */
export type IMarketDataFeed = Record<
  string,
  {
    low: number;
    high: number;
    current: number;
  }
>;

/**
 * Monitors one or more market data feeds and tracks the low, high and current prices. It stops once all prices were received.
 */
export const marketDataFeed = async (
  prices: Array<{ market: string; price: number }>,
  numberOfTicks: number
) => {
  let result: IMarketDataFeed = {};
  let currentTick = 0;

  while (currentTick < numberOfTicks) {
    // check if there is a new price, else it waits for one
    if (!prices.length) {
      await new Promise((r) => setTimeout(r, 5)); // arbitrary small number for sampling
      continue;
    }

    // once we receive a price we treat it as a queue and parse the latest price
    for (let i = 0; i < prices.length; i++) {
      const newPrice = prices.pop();
      if (!newPrice) {
        // should never happen
        break;
      }

      // constructs the return object as this function does not know how many feeds is watching
      if (!result || !result[newPrice.market]) {
        result[newPrice.market] = {
          low: newPrice.price,
          high: newPrice.price,
          current: newPrice.price,
        };
      }

      // updates the return object with the correct values
      const currentMarket = result[newPrice.market];
      if (newPrice.price > currentMarket.high) {
        currentMarket.high = newPrice.price;
      }
      if (newPrice.price < currentMarket.low) {
        currentMarket.low = newPrice.price;
      }
      currentMarket.current = newPrice.price;

      // keep track of how many prices we have parsed
      currentTick = currentTick + 1;
    }
  }

  return result;
};
