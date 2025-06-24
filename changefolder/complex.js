let angleShift = 0;

function setup() {
  createCanvas(1000, 600);
  noStroke();
  background("#100024");
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  for (let r = 300; r > 0; r -= 5) {
    let c = lerpColor(color("#FF0000"), color("#FFFF00"), r / 300);
    fill(c);
    ellipse(centerX, centerY, r * 2, r * 1.2);
  }

  push();
  fill("#FFA500");
  for (let i = 10000; i > 0; i--) {
    let x = centerX + cos(i + angleShift) * sin(i * 0.002) * 500;
    let y = centerY + sin(i + angleShift) * cos(i * 0.002) * 300;
    circle(x, y, 2);
  }
  pop();

  push();
  fill("#FFFF00");
  for (let i = 2500; i > 0; i--) {
    let x = centerX + sin(i * 0.01 + angleShift) * log(i) * 50;
    let y = centerY - cos(i * 0.01 + angleShift) * log(i) * 50;
    circle(x, y, 2);
  }
  pop();

  angleShift += 0.005;
}

// here is the chatGPT conversation for help: https://chatgpt.com/share/685a9ca2-ecbc-8000-b56a-853e3fab7a3c