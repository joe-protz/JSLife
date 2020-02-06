'use strict'

class Cell {
  constructor(x, y, scale) {
    this.alive = false
    this.scale = scale
    this.x = x
    this.y = y
  }
  // have count of alive neighbors that must be equal to 2 or 3 to stay alive or if 3 live neighbors will come alive
  getNeighbors() {
    // The formula to find a vector and a one dimensional array is X plus Y times columns 

    this.neighbors = [
      cells[(this.x - scale) / scale + ((this.y - scale) / scale) * (width / scale)],

      cells[this.x / scale + ((this.y - scale) / scale) * (width / scale)],
      // this one is bugging
      cells[((this.x + scale) / scale) + ((this.y - scale) / scale) * (width / scale)],

      cells[(this.x - scale) / scale + (this.y / scale) * (width / scale)],

      cells[(this.x + scale) / scale + (this.y / scale) * (width / scale)],

      cells[(this.x - scale) / scale + ((this.y + scale) / scale) * (width / scale)],

      cells[this.x / scale + ((this.y + scale) / scale) * (width / scale)],

      cells[(this.x + scale) / scale + ((this.y + scale) / scale) * (width / scale)],


    ]
    this.aliveNeighbors = []
    for (let i = 0; i < this.neighbors.length; i++) {
      if (this.neighbors[i] !== undefined && this.neighbors[i].alive) {
        this.aliveNeighbors.push(this.neighbors[i])
      }
    }
  }
  // just changes alive state
  click() {
    this.alive = true
  }
  // shows a rectangle (square) at the location and red if dead, green if alive
  show() {
    if (this.alive) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    rect(this.x, this.y, scale, scale)
  }
}