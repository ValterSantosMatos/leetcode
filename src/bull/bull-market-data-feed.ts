/**
 * Starts the “Market Data Engine”
 * Starts the “Market Data Feed”
 * Stops the “Market Data Engine” after 100 ticks
 * Outputs the low, high and current price
 */
export const marketDataFeed = async (
  prices: Array<{ market: string; price: number }>,
  numberOfTicks: number
) => {
  // console.log("marketDataFeed");

  let result: Record<
    string,
    {
      low: number;
      high: number;
      current: number;
    }
  > = {};
  let currentTick = 0;

  while (currentTick < numberOfTicks) {
    // check if there is a new price
    if (!prices.length) {
      // console.log(`Waiting for a price`);
      await new Promise((r) => setTimeout(r, 5));
      continue;
    }

    for (let i = 0; i < prices.length; i++) {
      const newPrice = prices.pop();
      if (!newPrice) {
        break;
      }

      currentTick = currentTick + 1;
      // console.log(`Got a new price ${newPrice}, ${currentTick}`);

      // console.log(newPrice);

      // console.log(result);
      if (!result || !result[newPrice.market]) {
        result[newPrice.market] = {
          low: newPrice.price,
          high: newPrice.price,
          current: newPrice.price,
        };
      }

      const currentMarket = result[newPrice.market];

      if (newPrice.price > currentMarket.high) {
        currentMarket.high = newPrice.price;
      }
      if (newPrice.price < currentMarket.low) {
        currentMarket.low = newPrice.price;
      }
      currentMarket.current = newPrice.price;
    }
  }

  return result;
};
