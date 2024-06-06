const Ship = require("./Ship.js");

test("Expect ship length to be 3", () => {
  const ship = new Ship(3);
  expect(ship.getLength()).toBe(3);
});

test("Expect Ship sunk to be true", () => {
  const ship = new Ship(3);
  ship.addHit();
  ship.addHit();
  ship.addHit();
  expect(ship.isSunk()).toBe(true);
});

test("Expect ship hits to be 2", () => {
  const ship = new Ship(3);
  ship.addHit();
  ship.addHit();
  expect(ship.getHits()).toBe(2);
});
