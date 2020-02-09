let acornButton, randomSlider, resetButton, randomButton, startButton, gunButton
// holds all cells for the board
let cells
//may use at a later date, holds 2d array of cells
//let coordArray = []
// scale to make the cells larger/smaller
let scale = 10
let cols, rows

// have I clicked start?
let start = false
//let arrMap // a copy of cells , used to make coordArray
let randomValue

const createAcornButton = () => {
  acornButton = createButton('acorn')
  acornButton.position(width - 400, height + 10)
  acornButton.size(80)
  acornButton.mousePressed(() => {
    let acorns = [
      cells[35][25],
      cells[36][25],
      cells[37][25],
      cells[38][24],
      cells[40][23],
      cells[40][25],
      cells[41][25]
    ]
    acorns.forEach(acorn => {
      acorn.alive = 1
      acorn.hasBeenChanged = true
    })
  })
}
const createResetButton = () => {
  resetButton = createButton('reset')
  resetButton.position(width-500, height + 50)
  resetButton.size(80)
  resetButton.mousePressed(() => {
    //noLoop()
    //randomSlider.remove()
    cells = []
    start = false
    resetSketch()
    //loop()
  })
}
const createRandomSlider = () => {
  randomSlider = createSlider(0.1, 0.9, 0.3, 0.05)
  randomSlider.position(width-400, height + 30)
  randomSlider.style('width', '80px')
}
const createRandomButton = () => {
  randomButton = createButton('random')
  randomButton.position(width-500, height + 30)
  randomButton.size(80)
  // randoms the game
  randomButton.mousePressed(() => {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (random() < randomValue) {
          cells[i][j].alive = 1
          cells[i][j].hasBeenChanged = true
        }
      }
    }
  })
}
const createStartButton = () => {
  startButton = createButton('start')
  startButton.position(width-500, height + 10)
  startButton.size(80)
  // starts the game
  startButton.mousePressed(() => (start = true))
}
const createPageElements = function() {
  let args = Array.prototype.slice.call(arguments)
  args.forEach(callback => callback())
}
const createGunButton = () => {
  gunButton = createButton('gun')
  gunButton.position(width-400, height + 50)
  gunButton.size(80)
  gunButton.mousePressed(() => {
    let guns = [
      cells[26][25],
      cells[27][25],
      cells[26][26],
      cells[27][26],

      cells[36][26],
      cells[36][25],
      cells[36][27],

      cells[37][24],
      cells[37][28],
      cells[38][23],
      cells[38][29],

      cells[39][23],
      cells[39][29],

      cells[40][26],

      cells[41][28],
      cells[41][24],

      cells[42][27],
      cells[42][26],
      cells[42][25],

      cells[43][26],

      cells[46][24],
      cells[46][23],
      cells[46][25],

      cells[47][25],
      cells[47][24],
      cells[47][23],

      cells[48][22],
      cells[48][26],

      cells[50][22],
      cells[50][26],
      cells[50][21],
      cells[50][27],

      cells[60][24],
      cells[60][23],
      cells[61][24],
      cells[61][23]
    ]
    guns.forEach(gun => {
      gun.alive = 1
      gun.hasBeenChanged = true
    })
  })
}

const resetSketch = () => {
  cells = new Array(width / scale)
  for (i = 0; i < cells.length; i++) {
    cells[i] = new Array(height / scale)
  }
  // creates new cells for the board and pushes them into cells in order of creation
  for (let i = 0; i < width / scale; i++) {
    for (let j = 0; j < height / scale; j++) {
      cells[i][j] = new Cell(i, j)
    }
  }

  // initiate the cells neighbors array so they all know their neighbors
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      cells[i][j].getNeighbors()
    }
  }
}
function setup() {
  textSize(50)
  createCanvas(800, 500)
  cols = width / scale
  rows = height / scale
  createPageElements(
    createResetButton,
    createRandomSlider,
    createRandomButton,
    createAcornButton,
    createStartButton,
    createGunButton
  )
  resetSketch()
}

function mouseDragged() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      cells[i][j].click()
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      cells[i][j].click()
    }
  }
}

// continuously loops @ framerate
function draw() {
  randomValue = randomSlider.value()
  background(62)
  // loop for setting game up
  if (!start) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cells[i][j].show()
      }
    }
  }

  // loop for once the game is setup and startButton has been pressed
  if (start) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cells[i][j].getNeighbors()
      }
    }

    // Conway's rules for the game
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let currentCell = cells[i][j]
        let aliveNeighbors = currentCell.aliveNeighbors
        if (
          currentCell.alive === 1 &&
          (aliveNeighbors < 2 || aliveNeighbors > 3)
        ) {
          currentCell.alive = 0
          currentCell.hasBeenChanged = true
        } else if (currentCell.alive === 0 && aliveNeighbors === 3) {
          currentCell.alive = 1
          currentCell.hasBeenChanged = true
        }
      }
    }
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cells[i][j].show()
      }
    }
  }
}
