let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 200);  
  frameRate(10); 
  let initialBranch = new Branch(createVector(width / 2, height), createVector(width / 2, height - 100));
  branches.push(initialBranch);
}

function draw() {
  background(0);  

  for (let i = branches.length - 1; i >= 0; i--) {
    let b = branches[i];
    b.update();
    b.display();
    
    if (!b.growing && !b.hasBranched) {
      if (b.len > 20) {
        branches.push(b.branchA());
        branches.push(b.branchB());
      }
      b.hasBranched = true; 
    // chatgpt helps line 19-24
    }
  }
}


class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.growing = true;
    this.len = p5.Vector.dist(this.begin, this.end);
    this.hasBranched = false; 
  }

  update() {
    if (this.growing) {
      let dir = p5.Vector.sub(this.end, this.begin);
      dir.mult(0.01); 
      this.end.add(dir);
      if (p5.Vector.dist(this.begin, this.end) > this.len) {
        this.growing = false;
      }
    }
  }

  display() {
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  branchA() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6);  
    dir.mult(0.7);
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }

  branchB() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4); 
    dir.mult(0.7);
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }
}
