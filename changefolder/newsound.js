let angle = 0;
let lineCount = 0;
const maxLines = 200;
let startRadius = 300;
const endRadius = 500;


let polySynth = new Tone.PolySynth(Tone.Synth).toDestination();
let reverb = new Tone.Reverb(2).toDestination(); 
polySynth.connect(reverb); 

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(70, 20, 66); 
  strokeWeight(32); 
  noFill();
  

  Tone.start().then(() => {
    console.log("音频上下文已启动");
  });
}

function draw() {
  background(255); 
  translate(width / 2, height / 2); 
  rotate(angle);
  angle += 0.1; 

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

    
    if (lineCount % 10 === 0) {
      let chord = getChord(); 
      let volume = map(lineCount, 5, maxLines, -12, 5); 
      polySynth.volume.value = volume; 
      polySynth.triggerAttackRelease(chord, "40n"); 
    }
  } else {
    lineCount = 0;
    startRadius = 300; 
  }
}


function getChord() {
  const chords = [

    ["F4", "A4", "C5"], 
    ["G4", "B4", "D5"],
    ["A4", "C#5", "E5"], 
    ["B4", "D#5", "F#5"] 
  ];
  return random(chords);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
