let angle = 0;
let lineCount = 0;
const maxLines = 200;
let startRadius = 0;
const endRadius = 1000; 


let synth = new Tone.AMSynth().toDestination();
let fmSynth = new Tone.FMSynth().toDestination();
let polySynth = new Tone.PolySynth(Tone.Synth).toDestination();

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(50, 99, 100); 
  strokeWeight(1);
  noFill();
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


    if (lineCount % 10 === 0) {

      let chord = ["C4", "E4", "G4"]; 
      polySynth.triggerAttackRelease(chord, "2n"); 

      fmSynth.triggerAttackRelease("C2", "4n"); 
      synth.triggerAttackRelease("A3", "4n"); 
    }
  } else {

    lineCount = 0;
    startRadius = 0; 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 
}
