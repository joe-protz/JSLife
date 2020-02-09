'use strict'

class Cell {
  constructor(i, j) {
    this.i = i
    this.j = j
    this.alive = 0
    this.x = i * scale
    this.y = j * scale
    this.hasBeenChanged = false
    this.aliveNeighbors = 0
  }

  // have count of alive this.neighbors that must be equal to 2 or 3 to stay alive or if 3 live this.neighbors will come alive
  getNeighbors() {
    // The formula to find a vector and a one dimensional array is X plus Y times columns
    // we fall back to its neighbor being undefined if we would be checking off of the grid
    let total = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        total +=
          cells[(this.i + i + cols) % cols][(this.j + j + rows) % rows].alive
      }
    }
    this.aliveNeighbors = total
    if (this.alive === 1) {
      this.aliveNeighbors--
    }
  }

  // just changes alive state during setup if we click on a cell
  click() {
    if (
      dist(mouseX - scale / 2, mouseY - scale / 2, this.x, this.y) <
      scale / 2
    ) {
      console.log(this)
      this.alive = 1
      this.hasBeenChanged = true
    }
  }
  // shows a rectangle (square) at the location and red if dead, green if alive
  show() {
    if (!this.hasBeenChanged) {
      fill(0, 0, 255)
    } else if (this.alive === 1) {
      fill(0, 255, 0)
    } else if (this.alive === 0) {
      fill(255, 0, 0)
    }
    // starts at top left corner of rect of size scale on each side
    rect(this.x, this.y, scale, scale)
  }
}
