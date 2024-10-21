let angle = 0;
let circleCount = 0;
const maxCircles = 150;
let radius = 100;
const maxRadius = 400;


let synth = new Tone.PolySynth().toDestination(); 

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
  angle += 0.05;

  for (let i = 0; i < circleCount; i++) {
    let step = TWO_PI / circleCount;
    let currentAngle = step * i + angle;
    let x = cos(currentAngle) * radius;
    let y = sin(currentAngle) * radius;

    stroke(map(i, 0, circleCount, 0, 255), 100, 150);
    ellipse(x, y, 50, 50); 
  }

  if (radius < maxRadius) {
    radius += 0.5; 
  }

  if (circleCount < maxCircles) {
    circleCount += 1;


    if (circleCount % 5 === 0) {
      playRandomChord();
    }
  } else {
    circleCount = 0;
    radius = 100;
  }
}


function playRandomChord() {
  const chords = [
    ["C4", "E4", "G4"], 
    ["D4", "F#4", "A4"], 
    ["E4", "G#4", "B4"], 
    ["F4", "A4", "C5"], 
    ["G4", "B4", "D5"], 
    ["A4", "C#5", "E5"], 
    ["B4", "D5", "F#5"]  
  ];
  const randomChord = random(chords);
  const duration = "8n"; 
  synth.triggerAttackRelease(randomChord, duration);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
