import Ship from "./Ship.js";

describe("Ship functions", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(null, 3, [
      [0, 1],
      [0, 2],
      [0, 3],
    ]);
  });

  test("Expect ship length to be 3", () => {
    expect(ship.getLength()).toBe(3);
  });

  test("Expect Ship sunk to be true", () => {
    ship.addHit();
    ship.addHit();
    ship.addHit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Expect Ship rotation to be 180", () => {
    ship.addRotation();
    ship.addRotation();
    expect(ship.getRotation()).toBe(180);
  });

  test("Expect four Ship rotations to be 0", () => {
    ship.addRotation();
    ship.addRotation();
    ship.addRotation();
    ship.addRotation();
    expect(ship.getRotation()).toBe(0);
  });

  test("Expect Ship rotation to be 180", () => {
    ship.subtractRotation();
    ship.subtractRotation();
    expect(ship.getRotation()).toBe(180);
  });

  test("Expect four Ship rotations to be 0", () => {
    ship.subtractRotation();
    ship.subtractRotation();
    ship.subtractRotation();
    ship.subtractRotation();
    expect(ship.getRotation()).toBe(0);
  });

  test("Expect ship hits to be 2", () => {
    ship.addHit();
    ship.addHit();
    expect(ship.getHits()).toBe(2);
  });
});
