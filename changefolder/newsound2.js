let angle = 0;
let lineCount = 0;
const maxLines = 200;
let startRadius = 0;
const endRadius = 1000; 

let music; // Declare globally

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(50, 99, 100); 
  strokeWeight(1);
  noFill();
  
  // Create the oscillator but don't start it yet
  music = new Tone.Oscillator({
    frequency: 110,
    type: 'sine'
  }).toDestination();
}

function draw() {
  background(0); 
  translate(width / 2, height / 2); 
  rotate(angle); 
  angle -= 0.1; 

  for (let i = 0; i < lineCount; i++) {
    let angleRad = TWO_PI * i / lineCount; 
    let x1 = cos(angleRad) * startRadius; 
    let y1 = sin(angleRad) * startRadius;
    let x2 = cos(angleRad) * endRadius;
    let y2 = sin(angleRad) * endRadius;
    line(x1, y1, x2, y2);
  }

  if (startRadius > 0) {
    startRadius += 1; 
  }

  if (lineCount < maxLines) {
    lineCount += 1;
  } else {
    lineCount = 0;
    startRadius = 0; 
  }
}

function mousePressed() {
  // Start the oscillator when the canvas is clicked
  if (!music.started) {
    music.start(); // Start the oscillator
  }
  
  // Optionally adjust frequency based on interaction
  let frequency = map(lineCount, 0, maxLines, 110, 880); // Map lineCount to a frequency range
  music.frequency.setValueAtTime(frequency, Tone.now());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
