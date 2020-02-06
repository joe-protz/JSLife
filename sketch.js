let cells = []
let scale = 10
let start = false

function setup() {

  frameRate(10)
  createCanvas(600, 300);
  button = createButton('start');
  button.position(30, height + 30);
  button.mousePressed(() => start = true);
  for (i = 0; i < width / scale; i++) {
    for (j = 0; j < height / scale; j++) {
      cells.push(new Cell(i * scale, j * scale, scale))
    }
  }
}

function draw() {

  background(62)
  cells.forEach((cell, index) => {
    if (mouseIsPressed) {

      if (dist(mouseX - scale / 2, mouseY - scale / 2, cells[index].x, cells[index].y) < scale / 2) {
        cells[index].click()
      }
    }
    cells[index].show()

  })
  if (start) {

  }

}