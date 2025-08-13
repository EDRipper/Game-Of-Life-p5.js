let grid = [];
let cols = 50;
let rows = 50;
let cellWidth, cellHeight;

function setup() {
  createCanvas(620, 620);
  cellWidth = width / cols;
  cellHeight = height / rows;

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function mouseClicked(){
  let col = floor(mouseX / cellWidth);
  let row = floor(mouseY / cellHeight);//work out which cell im mousing over
  grid[row][col] = 1//set that cell to alive
  fill(0);//colour it in
  rect(row * cellHeight, col * cellWidth, cellWidth, cellHeight);
  //rect(row * cellWidth, coll * cellHeight, cellWidth, cellHeight);//ts not working
}

function draw() {
  background(255);
  let nextGrid = [];

  for (let i = 0; i < cols; i++) {
    nextGrid[i] = [];
    for (let j = 0; j < rows; j++) {
      let neighbours = 0;

      //check each adjacent cell
      for (let xOff = -1; xOff <= 1; xOff++) {
        for (let yOff = -1; yOff <= 1; yOff++) {
          if (xOff === 0 && yOff === 0) continue; //not including the current cell
          let x = i + xOff;
          let y = j + yOff;
          if (x >= 0 && x < cols && y >= 0 && y < rows) {
            neighbours += grid[x][y];
          }
        }
      }

      //CGOL logic
      if (grid[i][j] === 1) {
        if (neighbours < 2 || neighbours > 3) {
          nextGrid[i][j] = 0; //dies lol
        } else {
          nextGrid[i][j] = 1; //stays alive
        }
      } else {
        if (neighbours === 3) {
          nextGrid[i][j] = 1; //brought to life
        } else {
          nextGrid[i][j] = 0;
        }
      }

      //draw
      if (grid[i][j] === 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
    }
  }

  grid = nextGrid;
}
