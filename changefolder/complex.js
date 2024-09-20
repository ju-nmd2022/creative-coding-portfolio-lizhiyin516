rotation_speed = 0;

function setup() {
  createCanvas(1000, 600);
  noStroke();
  background("#005");
  h = height / 2;
 w = width / 2;
}

function draw() {
  for (y = 0; y < h; y += 6) {
    c = lerpColor(color("#005"), color("#22489D"), y / h);
    fill(c);
    square(y, y, width - 2 * y);
  }
 push()
  fill("#28C752");
  for (i = 6000; i > 0; i--) {
    x = w + sin(i + rotation_speed) * tan(i * i ) * 250;
    y = h + 250 * cos(i * i);
    circle(x, y, 2);
  }
 pop()
 
 push()
  fill("#28C7BD");
  for (i = 4000; i > 0; i--) {
    x = w - cos(i + rotation_speed) * sin(i * i) * 200;
    y = h - 200 * sin(i );
    circle(x, y, 2);
  }
 pop()
 
 
  rotation_speed += 0.01;
}