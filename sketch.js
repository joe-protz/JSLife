// holds all cells for the board
let cells = []
//may use at a later date, holds 2d array of cells
let coordArray = []
// scale to make the cells larger/smaller
let scale = 50
// have I clicked start?
let start = false
let arrMap // a copy of cells , used to make coordArray



function setup() {

  frameRate(5)
  createCanvas(500, 500);

  button = createButton('start');
  button.position(30, height + 30);
  // starts the game
  button.mousePressed(() => start = true)
  // creates new cells for the board and pushes them into cells in order of creation
  for (let i = 0; i < (width / scale); i++) {
    for (let j = 0; j < (height / scale); j++) {
      cells.push(new Cell(j * scale, i * scale, scale))
    }
  }
  // initiate the cells neighbors array so they all know their neighbors
  for (let i = 0; i < cells.length; i++) {
    cells[i].getNeighbors()
  }
  //make a coordArray, may be used at later date
  arrMap = cells.map(cell => cell)
  while (arrMap.length) coordArray.push(arrMap.splice(0, width / scale))
}
// continuously loops @ framerate
function draw() {

  background(62)
  // loop for setting game up
  if (!start) {

    cells.forEach((cell, index) => {
      // when a pressed mouse is over a cell, change it to alive
      if (mouseIsPressed) {
        if (dist(mouseX - scale / 2, mouseY - scale / 2, cells[index].x, cells[index].y) < scale / 2) {
          cells[index].click()
        }
      }
      //show all cells 
      cells[index].show()
    })
  }

  // loop for once the game is setup and button has been pressed
  if (start) {
    // create an aliveNeighbors array , we get the alive neighbors BEFORE checking so that we don't mess with the results before checking each one
    cells.forEach((cell, index) => {
      cells[index].getAliveNeighbors()
    })
    // conways rules for the game
    cells.forEach((cell, index) => {
      if (cell.alive) {
        if (cell.aliveNeighbors.length < 2) {
          cell.alive = false
        }
        if (cell.aliveNeighbors.length > 3) {
          cell.alive = false
        }
      } else {
        if (cell.aliveNeighbors.length === 3) {
          cell.alive = true
        }
      }
      cell.show()
    })
  }
}