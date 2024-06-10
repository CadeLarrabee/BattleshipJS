class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isHit = false;
    this.hasShip = false;
  }
  setShip(bool) {
    this.hasShip = bool;
  }
  getShip() {
    return this.hasShip;
  }
}
export default Tile;
