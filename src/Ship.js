class Ship {
  constructor(type, length, coordinates) {
    this.type = type;
    this.length = length;
    this.coordinates = coordinates;
    this.hits = 0;
    this.rotation = 0;
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
  addRotation() {
    if (this.rotation == 270) {
      this.rotation = 0;
    } else {
      this.rotation += 90;
    }
  }
  subtractRotation() {
    if (this.rotation == 0) {
      this.rotation = 270;
    } else {
      this.rotation -= 90;
    }
  }
  getHits() {
    return this.hits;
  }
  getRotation() {
    return this.rotation;
  }
  getCoordinates() {
    return this.coordinates;
  }
  getLength() {
    return this.length;
  }
}
export default Ship;
