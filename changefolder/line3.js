let cols = 23;
let rows = 16;
let days = 365;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let gridw = width * 4.0;
  let gridh = height * 0.7;
  let cellw = gridw / cols;
  let cellh = gridh / rows;
  let margx = (width - gridw) * 0.5;
  let margy = (height - gridh) * 0.5;
  
  for (let i = 0; i < days; i++) {
    let col = Math.floor(i / rows);
    let row = i % rows;
    let x = margx + col * cellw;
    let y = margy + row * cellh;
    let w = 66;
    let h = 10;

    push();
    translate(x + cellw / 2, y + cellh / 2);
    
    let phi = (i / days) * PI;
    let theta = sin(phi) * PI * 0.57 + 1.0;
    rotate(theta);
    
    let scaleVal = abs(cos(phi)) * 2 + 1;
    scale(scaleVal, 1);
    
    fill(255,0,0);
    rectMode(CENTER);
    rect(0, 0, w, h);
    
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
