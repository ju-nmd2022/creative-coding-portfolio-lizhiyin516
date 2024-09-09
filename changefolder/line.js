let cols = 22; 
let rows = 10;   
let cellWidth = 30;   
let cellHeight = 10;   
let waveAmplitude = 50;   
let waveFrequency = 0.5;  
let days =270;
function setup() {  
  createCanvas(windowWidth, windowHeight);  
  let gridw = width * 0.9;  
  let gridh = height * 0.7;  
  let cellw = gridw / cols;  
  let cellh = gridh / rows;  
  let margx = (width - gridw) * 0.5;  
  let margy = (height - gridh) * 0.5;  
    
  for (let i = 0; i < 270; i++) {  
    let row = Math.floor(i / cols);   
    let col = i % cols;  
    let x = margx + col * cellw;  
    let y = margy + row * cellh;  
    let w = 3;  
    let h = 20;  
  
    push();  
    translate(x + cellw / 2, y + cellh / 2);  
  
    let angleModifier;  
    if (row <=10) {  
     
      angleModifier = sin((i / days) * (PI+PI)) * PI  * 0.45 + 0.85;  
    } else {  
      
      angleModifier = cos((i / days) * (PI+PI)) * PI * 0.8 + 0.85;  
   }  
    rotate(angleModifier);  
    let scaleVal = abs(cos((i / days) * PI)) * 2 + 1; // 这里仍然使用cos，但你可以根据需要调整  
    scale(scaleVal, 1);  
    fill(0);  
    rectMode(CENTER);  
    rect(0, 0, w, h);  
    pop();  
  }  
}  
  
function windowResized() {  
  resizeCanvas(windowWidth, windowHeight);  
}  