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
}

