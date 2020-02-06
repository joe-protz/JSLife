// holds all cells for the board
let cells = []
// scale to make the cells larger/smaller
let scale = 100
// have I clicked start?
let start = false

function setup() {

  frameRate(10)
  createCanvas(300, 300);

  button = createButton('start');
  button.position(30, height + 30);
  // starts the game
  button.mousePressed(() => start = true)
  // creates new cells for the board and pushes them into cells in order
  for (i = 0; i < (width / scale); i++) {
    for (j = 0; j < (height / scale); j++) {
      cells.push(new Cell(j * scale, i * scale, scale))

    }
  }
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
    cells.forEach((cell, index) => {
      cells[index].show()
      // getNeighbors is needed to use the rules. doesn't yet work.
      cells[index].getNeighbors()
    })
    noLoop() // this stops the draw loop, just there for debugging
  }

}