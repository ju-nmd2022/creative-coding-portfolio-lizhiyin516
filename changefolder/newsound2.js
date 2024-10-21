let angle = 0;
let shapeCount = 0;
const maxShapes = 150;
let size = 20;
const maxSize = 100;


let synth = new Tone.Synth().toDestination(); 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  
  
  Tone.start().then(() => {
    console.log("音频上下文已启动");
  });
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.03;

  for (let i = 0; i < shapeCount; i++) {
    let step = TWO_PI / shapeCount;
    let currentAngle = step * i + angle;
    let x = cos(currentAngle) * (size + i * 2); 
    let y = sin(currentAngle) * (size + i * 2);

    stroke(map(i, 0, shapeCount, 0, 255), 100, 150);
    

    if (i % 2 === 0) {
      rect(x, y, size, size); 
    } else {
      drawTriangle(x, y, size); 
    }
  }

  if (size < maxSize) {
    size += 0.2;
  }

  if (shapeCount < maxShapes) {
    shapeCount += 1;


    if (shapeCount % 4 === 0) {
      playRandomNote();
    }
  } else {
    shapeCount = 0;
    size = 20;
  }
}


function drawTriangle(x, y, s) {
  beginShape();
  vertex(x, y - s);
  vertex(x - s * 0.866, y + s * 0.5); 
  vertex(x + s * 0.866, y + s * 0.5); 
  endShape(CLOSE);
}


function playRandomNote() {
  const pentatonicNotes = ["C4", "D4"]; 
  const randomNote = random(pentatonicNotes);
  const duration = "8n"; 
  synth.triggerAttackRelease(randomNote, duration);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
