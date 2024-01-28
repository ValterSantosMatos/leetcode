import { marketDataFeed } from "./bull-market-data-feed";
import { generateMarketDataEngine } from "./bull-market-engine";

describe("market-data-engine", () => {
  it("should track the prices with a random generator", async () => {
    const prices: Array<{ market: string; price: number }> = [];

    const marketId = "BTC-USD";
    const numberOfTicks = 100;
    generateMarketDataEngine(prices, {
      marketId: marketId,
      numberOfTicks,
      startPrice: 20000,
    });

    return marketDataFeed(prices, numberOfTicks).then((result) => {
      expect(result[marketId]).toBeDefined();

      const { low, high, current } = result[marketId];
      expect(current).toBeGreaterThanOrEqual(low);
      expect(current).toBeLessThanOrEqual(high);
    });
  });

  it("should track the prices with two random generators", async () => {
    const prices: Array<{ market: string; price: number }> = [];

    const marketId1 = "BTC-USD";
    const numberOfTicks1 = 100;
    generateMarketDataEngine(prices, {
      marketId: marketId1,
      numberOfTicks: numberOfTicks1,
      startPrice: 20000,
    });

    const marketId2 = "ETH-USD";
    const numberOfTicks2 = 100;
    generateMarketDataEngine(prices, {
      marketId: marketId2,
      numberOfTicks: numberOfTicks2,
      startPrice: 20000,
    });

    return marketDataFeed(prices, numberOfTicks1 + numberOfTicks2).then(
      (result) => {
        expect(result[marketId1]).toBeDefined();
        expect(result[marketId2]).toBeDefined();

        const btcMarket = result[marketId1];
        const ethMarket = result[marketId2];

        // Check market 1 was well generated
        expect(btcMarket.current).toBeGreaterThanOrEqual(btcMarket.low);
        expect(btcMarket.current).toBeLessThanOrEqual(btcMarket.high);
        // Check market 2 was well generated
        expect(ethMarket.current).toBeGreaterThanOrEqual(ethMarket.low);
        expect(ethMarket.current).toBeLessThanOrEqual(ethMarket.high);
        // Check the random function gave diff values for both markets
        expect(btcMarket.current).not.toEqual(ethMarket.current);
        expect(btcMarket.low).not.toEqual(ethMarket.low);
        expect(btcMarket.high).not.toEqual(ethMarket.high);
      }
    );
  });

  it("should track the price correctly if known positive generator", async () => {
    const prices: Array<{ market: string; price: number }> = [];
    jest.spyOn(global.Math, "random").mockReturnValue(1);

    const marketId = "BTC-USD";
    const numberOfTicks = 10;
    const startPrice = 100;
    generateMarketDataEngine(prices, {
      marketId: marketId,
      numberOfTicks,
      startPrice,
    });

    return marketDataFeed(prices, numberOfTicks).then((result) => {
      expect(result[marketId]).toBeDefined();

      const { low, high, current } = result[marketId];

      // Price will be bouncing between 100 and 101 since the first generated price is always an odd number
      expect(current).toBe(101);
      expect(low).toBe(100);
      expect(high).toBe(101);
    });
  });

  it("should track the price correctly if known negative generator", async () => {
    const prices: Array<{ market: string; price: number }> = [];
    jest.spyOn(global.Math, "random").mockReturnValue(-1);

    const marketId = "BTC-USD";
    const numberOfTicks = 10;
    const startPrice = 100;
    generateMarketDataEngine(prices, {
      marketId: marketId,
      numberOfTicks,
      startPrice,
    });

    return marketDataFeed(prices, numberOfTicks).then((result) => {
      expect(result[marketId]).toBeDefined();

      const { low, high, current } = result[marketId];

      // Price will be bouncing between 99 and 100 since the first generated price is always an odd number
      expect(current).toBe(99);
      expect(low).toBe(99);
      expect(high).toBe(100);
    });
  });
});
