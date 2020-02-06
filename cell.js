'use strict'

class Cell {
  constructor(x, y, scale) {
    this.alive = false
    this.scale = scale
    this.x = x
    this.y = y

  }

  // update = function () {

  // }

  show() {
    fill(255)
    rect(this.x, this.y, scale, scale)
  }
}