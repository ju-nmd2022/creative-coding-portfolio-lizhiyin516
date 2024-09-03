let squareSize = 20;   
let borderWidth = 10;   
let gridCols = 12;  
let gridRows = 23;   
let canvasWidth = gridCols * (squareSize + 2 * borderWidth);   
let canvasHeight = gridRows * (squareSize + 2 * borderWidth);   
let baseRotation = 0.1;  
  
function setup() {  
  createCanvas(canvasWidth, canvasHeight);  
  background(0);  
  drawGrid();  
}  
  
function drawGrid() {  
  let currentRotation = 0; 
  
  
  for (let y = 0; y < gridRows; y++) {  
    for (let x = 0; x < gridCols; x++) {    
      let xPos = x * (squareSize + 2 * borderWidth);  
      let yPos = y * (squareSize + 2 * borderWidth);  

      let squareRotation = radians(currentRotation);  
      if (y >= 4 & y <15) {  
         squareRotation = radians(Math.random() * 100);   
      }else if (y>=15 & y<=23){
          squareRotation = radians(Math.random() * 70+Math.random()*15); 
      } 
      else {  
          
        currentRotation += baseRotation;  
      }    
      push();  
      translate(xPos + squareSize / 2 + borderWidth, yPos + squareSize / 2 + borderWidth);  
      rotate(squareRotation);  
  
      noFill();   
      stroke(255);   
      strokeWeight(borderWidth);   
      rect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);  
      pop();  
    }  
  }  
} 