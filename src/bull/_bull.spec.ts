import { main } from "./bull";
import { marketDataFeed } from "./bull-market-data-feed";
import {
  startMarketDataEngine,
  stopMarketDataEngine,
} from "./bull-market-engine";

describe("bull", () => {
  it("market-data-engine one market run", async () => {
    const prices: Array<{ market: string; price: number }> = [];
    const tickSize = 10;
    const startingPrice = 20000;

    const marketEngineRefBtc = startMarketDataEngine(
      prices,
      "BTC-USD",
      startingPrice,
      tickSize,
      10
    );

    const result = await marketDataFeed(prices, 100);
    stopMarketDataEngine(marketEngineRefBtc.marketEngineRef);

    return expect(result).toEqual({
      "BTC-USD": { low: 20010, high: 21000, current: 21000 },
    });
  });

  it("market-data-engine two markets", async () => {
    const prices: Array<{ market: string; price: number }> = [];
    const tickSize = 10;

    const marketEngineRefBtc = startMarketDataEngine(
      prices,
      "BTC-USD",
      20000,
      tickSize,
      10
    );

    const marketEngineRefEth = startMarketDataEngine(
      prices,
      "ETH-USD",
      30000,
      tickSize,
      10
    );

    const result = await marketDataFeed(prices, 200);
    stopMarketDataEngine(marketEngineRefBtc.marketEngineRef);
    stopMarketDataEngine(marketEngineRefEth.marketEngineRef);

    return expect(result).toEqual({
      "BTC-USD": { low: 20010, high: 21000, current: 21000 },
      "ETH-USD": { low: 30010, high: 31000, current: 31000 },
    });
  });
});
