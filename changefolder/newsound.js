let sun, earth, mars;  
  
function setup() {  
  createCanvas(800, 600);  
  frameRate(30);  
  
  sun = { x: width / 2, y: height / 2, radius: 40, color: 'yellow' };  
  
  earth = {  
    orbit: {  
      centerX: sun.x,  
      centerY: sun.y,  
      radiusX: 120, 
      radiusY: 200,  
      angle: 0       
    },  
    radiusBase: 15,  
    scaleFactor: 5   
  };  
  
  mars = {  
    orbit: {  
      centerX: sun.x,  
      centerY: sun.y,  
      radiusX: 150,   
      radiusY: 300,  
      angle: PI / 4  
    },  
    radiusBase: 10, 
    scaleFactor: 1   
  };  
earthOscillator = new Tone.Oscillator().toDestination().start();  
    earthOscillator.type = 'sine';   
    earthOscillator.frequency.value = 20;   
  
    marsOscillator = new Tone.Oscillator().toDestination().start();  
    marsOscillator.type = 'sine';  
    marsOscillator.frequency.value = 220;
}  
  
function draw() {  
  background(0);  
   
  fill(sun.color);  
  ellipse(sun.x, sun.y, sun.radius * 2, sun.radius * 2);  
  let earthVolume = map(earth.scaleFactor, 1, 30, 0.1, 0.5); 
    earthOscillator.volume.value = earthVolume; 
 
  drawPlanet(mars, 'red');  

  drawPlanet(earth, 'blue');  
 
  if (earth.orbit.angle % (PI / 2) === 0) { 
    noFill();   
    stroke('blue');   
    strokeWeight(3);   
    ellipse(earth.orbit.centerX + earth.orbit.radiusX * 0, 
            earth.orbit.centerY + earth.orbit.radiusY,   
            earth.radiusBase * 2 * earth.scaleFactor,  
            earth.radiusBase * 2 * earth.scaleFactor);  
    fill('blue');  
  }  
}  
  
function drawPlanet(planet, color) {  
 
  planet.orbit.angle += 0.04; 
  if (planet.orbit.angle > TWO_PI) planet.orbit.angle -= TWO_PI;  
  
   
  let cosAngle = cos(planet.orbit.angle);  
  let sinAngle = sin(planet.orbit.angle);  
  let x = planet.orbit.centerX + planet.orbit.radiusX * cosAngle;  
  let y = planet.orbit.centerY + planet.orbit.radiusY * sinAngle;  
  

  let normalizedY = abs(y - planet.orbit.centerY) / planet.orbit.radiusY;  
  planet.scaleFactor = 2 + (1 - normalizedY) * 1;  
  

  push();  
  translate(x, y);  
  scale(planet.scaleFactor);  
  fill(color);  
  ellipse(0, 0, planet.radiusBase * 2, planet.radiusBase * 2);  
  pop();  
}