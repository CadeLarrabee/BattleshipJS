import Tile from "./Tile.js";

describe("Ship functions", () => {
  let tile;

  beforeEach(() => {
    tile = new Tile(1, 2);
  });

  test("Expect hasShip to be true", () => {
    tile.setShip(true);
    expect(tile.getShip()).toBe(true);
  });
});
