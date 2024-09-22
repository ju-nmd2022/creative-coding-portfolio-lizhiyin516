let sun, earth, mars;  
  
function setup() {  
  createCanvas(800, 600);  
  frameRate(30);  
  
  sun = { x: width / 2, y: height / 2, radius: 40, color: 'yellow' };  
  
  earth = {  
    orbit: {  
      centerX: sun.x,  
      centerY: sun.y,  
      radiusX: 120, // 椭圆轨道的短半轴  
      radiusY: 200, // 椭圆轨道的长半轴  
      angle: 0      // 绕轨道的角度  
    },  
    radiusBase: 15, // 基准半径  
    scaleFactor: 5  // 缩放因子  
  };  
  
  mars = {  
    orbit: {  
      centerX: sun.x,  
      centerY: sun.y,  
      radiusX: 150, // 火星轨道的短半轴更大  
      radiusY: 300, // 火星轨道的长半轴更大  
      angle: PI / 4 // 火星的初始角度  
    },  
    radiusBase: 10, // 火星的基准半径较小  
    scaleFactor: 1  // 缩放因子  
  };  
earthOscillator = new Tone.Oscillator().toDestination().start();  
    earthOscillator.type = 'sine'; // 使用正弦波  
    earthOscillator.frequency.value = 20; // 设定一个基本频率  
  
    marsOscillator = new Tone.Oscillator().toDestination().start();  
    marsOscillator.type = 'sine';  
    marsOscillator.frequency.value = 220;
}  
  
function draw() {  
  background(0); // 黑色背景  
  
  // 绘制太阳  
  fill(sun.color);  
  ellipse(sun.x, sun.y, sun.radius * 2, sun.radius * 2);  
  let earthVolume = map(earth.scaleFactor, 1, 30, 0.1, 0.5); // 假设 scaleFactor 从 1 变化到 3  
    earthOscillator.volume.value = earthVolume; 
  // 绘制火星  
  drawPlanet(mars, 'red');  
  
  // 绘制地球  
  drawPlanet(earth, 'blue');  
  
  // 特殊处理：当地球在轨迹上端时不绘制颜色  
  if (earth.orbit.angle % (PI / 2) === 0) { // 检查角度是否为90度的倍数  
    noFill(); // 禁用填充色  
    stroke('blue'); // 启用描边色  
    strokeWeight(3); // 设置描边宽度  
    ellipse(earth.orbit.centerX + earth.orbit.radiusX * 0, // x位置（这里简化为0，因为我们在检查位置而不是实际绘制）  
            earth.orbit.centerY + earth.orbit.radiusY, // y位置为椭圆顶部  
            earth.radiusBase * 2 * earth.scaleFactor, // 宽度  
            earth.radiusBase * 2 * earth.scaleFactor); // 高度，但实际上只作为标记  
    fill('blue'); // 重新启用填充色  
  }  
}  
  
function drawPlanet(planet, color) {  
  // 更新角度  
  planet.orbit.angle += 0.04; // 控制绕轨速度  
  if (planet.orbit.angle > TWO_PI) planet.orbit.angle -= TWO_PI; // 防止角度过大  
  
  // 计算椭圆上点的位置  
  let cosAngle = cos(planet.orbit.angle);  
  let sinAngle = sin(planet.orbit.angle);  
  let x = planet.orbit.centerX + planet.orbit.radiusX * cosAngle;  
  let y = planet.orbit.centerY + planet.orbit.radiusY * sinAngle;  
  
  // 根据位置调整大小  
  let normalizedY = abs(y - planet.orbit.centerY) / planet.orbit.radiusY;  
  planet.scaleFactor = 2 + (1 - normalizedY) * 1; // 缩放因子从1到1.5  
  
  // 绘制行星  
  push();  
  translate(x, y);  
  scale(planet.scaleFactor);  
  fill(color);  
  ellipse(0, 0, planet.radiusBase * 2, planet.radiusBase * 2);  
  pop();  
}