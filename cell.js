'use strict'

class Cell {
  constructor(x, y, scale) {
    this.alive = false
    this.scale = scale
    this.x = x
    this.y = y
    this.neighbors = []
    this.aliveNeighbors = []
    if (this.x === 0) {
      this.touchesLeft = true
    }
    if (this.x === width - scale) {
      this.touchesRight = true
    }
    if (this.y === 0) {
      this.touchesTop = true
    }
    if (this.y === height - scale) {
      this.touchesBottom = true
    }
  }




  // have count of alive this.neighbors that must be equal to 2 or 3 to stay alive or if 3 live this.neighbors will come alive
  getNeighbors() {
    // The formula to find a vector and a one dimensional array is X plus Y times columns 
    // we fall back to its neighbor being undefined if we would be checking off of the grid
    if (this.touchesTop || this.touchesLeft) {
      this.neighbors[0] = undefined
    } else {
      this.neighbors[0] = cells[(this.x - scale) / scale + ((this.y - scale) / scale) * (width / scale)]
    }

    if (this.touchesTop) {
      this.neighbors[1] = undefined
    } else {
      this.neighbors[1] = cells[this.x / scale + ((this.y - scale) / scale) * (width / scale)]
    }

    if (this.touchesTop || this.touchesRight) {
      this.neighbors[2] = undefined
    } else {
      this.neighbors[2] = cells[((this.x + scale) / scale) + ((this.y - scale) / scale) * (width / scale)]
    }

    if (this.touchesLeft) {
      this.neighbors[3] = undefined
    } else {
      this.neighbors[3] = cells[(this.x - scale) / scale + (this.y / scale) * (width / scale)]
    }

    if (this.touchesRight) {
      this.neighbors[4] = undefined
    } else {
      this.neighbors[4] = cells[(this.x + scale) / scale + (this.y / scale) * (width / scale)]
    }

    if (this.touchesBottom || this.touchesLeft) {
      this.neighbors[5] = undefined
    } else {
      this.neighbors[5] = cells[(this.x - scale) / scale + ((this.y + scale) / scale) * (width / scale)]
    }

    if (this.touchesBottom) {
      this.neighbors[6] = undefined
    } else {
      this.neighbors[6] = cells[this.x / scale + ((this.y + scale) / scale) * (width / scale)]
    }

    if (this.touchesBottom || this.touchesRight) {
      this.neighbors[7] = undefined
    } else {
      this.neighbors[7] = cells[(this.x + scale) / scale + ((this.y + scale) / scale) * (width / scale)]
    }
  }

  // empty the array and then loop through the neighbors and push the alive ones 
  getAliveNeighbors() {
    this.aliveNeighbors = new Array()
    for (let i = 0; i < this.neighbors.length; i++) {
      if (this.neighbors[i] !== undefined && this.neighbors[i].alive) {
        this.aliveNeighbors.push(this.neighbors[i])
      }
    }
  }
  // just changes alive state during setup if we click on a cell
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
    // starts at top left corner of rect of size scale on each side
    rect(this.x, this.y, scale, scale)
  }
}