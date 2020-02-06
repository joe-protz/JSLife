'use strict'

class Cell {
  constructor(x, y, scale) {
    this.alive = false
    this.scale = scale
    this.x = x
    this.y = y
  }

  // update () {

  // }
  click() {
    this.alive = true
  }

  show() {
    if (this.alive) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    rect(this.x, this.y, scale, scale)
  }
}