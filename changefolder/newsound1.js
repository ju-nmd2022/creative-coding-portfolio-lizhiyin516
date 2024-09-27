let angle = 0;
let lineCount = 0;
const maxLines = 200;
let startRadius = 300;
const endRadius = 500; 

// 使用 Tone.js 创建合成器，适合柔和音效
let synth = new Tone.AMSynth().toDestination();
let fmSynth = new Tone.FMSynth().toDestination();
let polySynth = new Tone.PolySynth(Tone.Synth).toDestination();

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(70, 20, 66); // 设置线条颜色
  strokeWeight(32); // 线条粗细
  noFill();
}

function draw() {
  background(255); // 浅色背景
  translate(width / 2, height / 2); // 将绘图中心移至画布中心
  rotate(angle); // 旋转画布
  angle += 0.1; // 缓慢顺时针旋转

  // 绘制从中间辐射的线条
  for (let i = 0; i < lineCount; i++) {
    let angleRad = TWO_PI * i / lineCount; // 计算每个线条的角度（弧度）
    let x1 = cos(angleRad) * startRadius; // 使用逐渐减小的起始半径
    let y1 = sin(angleRad) * startRadius;
    let x2 = cos(angleRad) * endRadius; // 结束半径保持不变
    let y2 = sin(angleRad) * endRadius;
    line(x1, y1, x2, y2);
  }

  // 减小起始半径
  if (startRadius > 0) {
    startRadius += 1; // 每次绘制后减小起始半径
  }

  // 增加线条数量
  if (lineCount < maxLines) {
    lineCount += 1;

    // 每10条线播放一次柔和音效
    if (lineCount % 10 === 0) {
      // 使用低音符或和弦，播放悠扬、柔和的声音
      let chord = ["C4", "E4", "G4"]; // 一个简单的和弦
      polySynth.triggerAttackRelease(chord, "2n"); // 播放和弦，持续二分音符

      // 同时添加一些低音效果
      fmSynth.triggerAttackRelease("C2", "4n"); // 低音
      synth.triggerAttackRelease("A3", "4n"); // 辅助音符
    }
  } else {
    // 重置动画参数，使其循环
    lineCount = 0;
    startRadius = 300; // 重置起始半径
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 如果线条长度需要与画布大小保持一定关系，可以在这里调整 startRadius 和 endRadius
}
