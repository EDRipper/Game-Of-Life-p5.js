let grid = [];
let cols = 50;
let rows = 50;
let cellW, cellH;

function setup() {
  createCanvas(620, 620);
  cellW = width / cols;
  cellH = height / rows;

  for (let i = 0; i < cols; i++) {
    grid.push([]);
    for (let j = 0; j < rows; j++) {
      grid[i].push(Math.floor(Math.random() * 2)); 
    }
  }
}

function draw() {
  background(255);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 1) {
        fill(0); 
      } else {
        fill(255); 
      }
      rect(i * cellW, j * cellH, cellW, cellH);
    }
  }
}
