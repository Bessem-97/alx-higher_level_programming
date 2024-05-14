#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object if w or h is not positive
      this.width = undefined;
      this.height = undefined;
    }
  }

  print() {
    if (this.width === undefined || this.height === undefined) {
      console.log();
    } else {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }

  rotate() {
    // Swap width and height
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    // Double the width and height
    this.width *= 2;
    this.height *= 2;
  }
}

