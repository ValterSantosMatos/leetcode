import { marketDataFeed } from "./bull-market-data-feed";
import {
  startMarketDataEngine,
  stopMarketDataEngine,
} from "./bull-market-engine";

export const main = async (
  startingPrice: number,
  numberOfTicks: number,
  tickSize: number
) => {
  const prices: Array<{ market: string; price: number }> = [];

  const marketEngineRefBtc = startMarketDataEngine(
    prices,
    "BTC-USD",
    startingPrice,
    tickSize,
    10
  );

  const marketEngineRefEth = startMarketDataEngine(
    prices,
    "ETH-USD",
    startingPrice,
    tickSize,
    10
  );

  const result = await marketDataFeed(prices, startingPrice, numberOfTicks);
  stopMarketDataEngine(marketEngineRefBtc.marketEngineRef);
  stopMarketDataEngine(marketEngineRefEth.marketEngineRef);

  return result;
};

// const result = await main(20000, 100, 10);
// console.log(result);

// export {};

// Create a simple program that:
// Starts the “Market Data Engine”
// Starts the “Market Data Feed”
// Stops the “Market Data Engine” after 100 ticks
// Outputs the low, high and current price
// Prove it works with a test

// Market Data Engine
// Produces ticks. Each tick has an increment in price of 10 USD
// A Tick has a market/price
// Market = BTC-USD
// Price = 20000 USD

// ...

// Market Data Feed
// Consumes ticks from the Market Data Engine
// Tracks the low, high, current price for the market

// Assumptions
// Assume there is one market BTCUSD
// Assume the price can be represented as a double value
