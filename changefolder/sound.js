let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 200);  // 设置线条颜色
  frameRate(30); // 设置帧率
  let initialBranch = new Branch(createVector(width / 2, height), createVector(width / 2, height - 100));
  branches.push(initialBranch);
}

function draw() {
  background(30);  // 设置背景颜色

  for (let i = branches.length - 1; i >= 0; i--) {
    let b = branches[i];
    b.update();
    b.display();
    if (!b.growing && !b.hasBranched) {
      // 仅当分支不再生长且还未分支时，才进行分支
      if (b.len > 4) {
        branches.push(b.branchA());
        branches.push(b.branchB());
      }
      b.hasBranched = true; // 确保分支只发生一次
    }
  }
}

// 定义分支类
class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.growing = true;
    this.len = p5.Vector.dist(this.begin, this.end);
    this.hasBranched = false; // 新增属性：是否已经分支
  }

  update() {
    if (this.growing) {
      let dir = p5.Vector.sub(this.end, this.begin);
      dir.mult(0.01); // 减小增量以减缓生长速度
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
    dir.rotate(PI / 6);  // 设置分支角度
    dir.mult(0.7);
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }

  branchB() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);  // 设置分支角度
    dir.mult(0.7);
    let newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd);
  }
}
