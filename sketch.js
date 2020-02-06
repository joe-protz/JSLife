let cells = []
let scale = 10

function setup() {
  createCanvas(640, 480);
  for (i = 0; i < width / scale; i++) {
    for (j = 0; j < height / scale; j++) {
      cells.push(new Cell(i * scale, j * scale, scale))
    }
  }
}

function draw() {
  background(62)
  cells.forEach((cell, index) => cells[index].show())


}