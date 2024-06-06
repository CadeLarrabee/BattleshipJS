class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  isSunk() {
    //returns true if the ship is sunk
    if (this.length <= this.hits) {
      return true;
    } else {
      return false;
    }
  }
  addHit() {
    this.hits += 1;
  }
  getHits() {
    return this.hits;
  }
  getLength() {
    return this.length;
  }
}
module.exports = Ship;
