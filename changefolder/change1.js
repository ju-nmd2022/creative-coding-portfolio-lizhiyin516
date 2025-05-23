let squareSize = 20;   
let borderWidth = 10;   
let gridCols = 12;   
let gridRows = 23;   
 
canvasWidth = gridCols * squareSize;  
canvasHeight = gridRows * squareSize;  
  
function setup() {  
  createCanvas(canvasWidth+100, canvasHeight+100);  
  background(128);  
  drawGrid();  
}  
  
function drawGrid() {  
  let baseRotation = 0;  
  let rotationIncrement = 0.05;   
  
  for (let y = 0; y < gridRows; y++) {  
    for (let x = 0; x < gridCols; x++) {  
       
      let xPos = x * squareSize+50;  
      let yPos = y * squareSize+50;  
  
      let squareRotation = radians(baseRotation);   
  
       
      if (y > 4&y<=9) {  
        squareRotation = radians(Math.random() * 20)+radians(Math.random()*1); 
      }else if (y>9&y<=15) {
        squareRotation = radians(Math.random() * 160); 
     }else if (y>15& y<=23){
        squareRotation = radians(Math.random() * 240); 
     }
     else {  
          
        baseRotation += rotationIncrement;  
    
      }  
  
       
     push();  
    translate(xPos , yPos );  
      rotate(squareRotation);  
      noFill();   
      stroke(0);  
      strokeWeight(10);
     
      rect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);  
  
      pop();  
    }  
  }  
}  
